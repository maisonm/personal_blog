import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

//Styled
import { TagBlurbContainer, Blurb, SaveTags, SaveTagsBtn } from './styles';

export const TagBlurb = ({ tags }) => {
  const [postTags, setPostTags] = useState([]);
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

  const removeTag = target_tag =>
    setPostTags(postTags.filter(tag => tag !== target_tag));

  return (
    <TagBlurbContainer>
      {blurbRender()}
      <SaveTags>
        {postTags.length === 0 ? null : (
          <SaveTagsBtn type="button">Save Tags</SaveTagsBtn>
        )}
      </SaveTags>
    </TagBlurbContainer>
  );
};

export default TagBlurb;

TagBlurb.propTypes = {
  tags: propTypes.array.isRequired,
  api: propTypes.object.isRequired
};
