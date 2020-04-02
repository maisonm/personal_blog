import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

//Styled
import {
  TagBlurbContainer,
  Blurb,
  SaveTags,
  SaveTagsBtn,
  AddTagsSuccess,
  AddTagsError
} from './styles';

export const TagBlurb = ({ tags, api }) => {
  const [postTags, setPostTags] = useState([]);
  const [error, setError] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const blurbRender = () =>
    postTags.map((tag, i) => {
      if (tag.length !== 0) {
        return (
          <Blurb onClick={e => removeTag(tag)} key={i}>
            {tag}
          </Blurb>
        );
      }
    });

  useEffect(() => {
    if (tags.length !== 0) {
      setPostTags(prevPostTags => [...prevPostTags, tags]);
    }
  }, [tags]);

  const handleTagsAdd = () => {
    const { fetch_config } = api;
    const { add_tags } = api.tags;

    let body = {
      post_tags: postTags
    };

    add_tags(fetch_config('POST', body))
      .then(res => {
        if (res.status === 200) {
          setAddSuccess(true);
          setTimeout(() => {
            setAddSuccess(false);
          }, 6000);
          setPostTags([]);
        }
      })
      .catch(e => {
        setError(true);
        setAddSuccess(false);
      });
  };

  const removeTag = target_tag =>
    setPostTags(postTags.filter(tag => tag !== target_tag));

  return (
    <TagBlurbContainer>
      {blurbRender()}
      <SaveTags>
        {postTags.length === 0 ? null : (
          <SaveTagsBtn onClick={() => handleTagsAdd()} type="button">
            Save Tags
          </SaveTagsBtn>
        )}
        {addSuccess ? (
          <AddTagsSuccess>
            Tags added succesfully!
            <span onClick={() => setAddSuccess(false)}>Add more?</span>
          </AddTagsSuccess>
        ) : null}
        {error ? (
          <AddTagsError>
            Failed to add tags.
            <span onClick={() => setError(false)}>Try again?</span>
          </AddTagsError>
        ) : null}
      </SaveTags>
    </TagBlurbContainer>
  );
};

export default TagBlurb;

TagBlurb.propTypes = {
  tags: propTypes.array.isRequired,
  api: propTypes.object.isRequired
};
