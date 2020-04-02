import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

//Styles
import {
  AddPostContainer,
  AddPostInfoInput,
  AddPostInfoLabel,
  AddPostTextArea,
  PostOptionWrapper,
  PostOptionGroup,
  AddPostBtn,
  AddAnotherPost
} from './styles';

//Components
import LivePreview from './LivePreview/LivePreview';
import Icon from '../../../Icons/Icon';

const AddPost = ({ api }) => {
  const [postSubmitLoading, setPostSumbitLoading] = useState(false);
  const [postSubmitSuccess, setPostSubmitSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [postData, setPostData] = useState({
    htmlString: '',
    title: '',
    author: '',
    tags: '',
    featuredImage: '',
    postBody: '',
    description: ''
  });

  const resetForm = () => {
    setPostSumbitLoading(false);
    setPostSubmitSuccess(false);
    setPostData({
      htmlString: '',
      title: '',
      author: '',
      tags: '',
      featuredImage: '',
      postBody: '',
      description: ''
    });
  };

  const updatePostData = (value, key) => {
    setPostData(prevData => {
      return {
        ...prevData,
        [key]: value
      };
    });
  };

  const handlePostSubmit = isDraft => {
    const { fetch_config, blog } = api;
    //isDraft arg is a boolean
    const body = {
      title: postData.title,
      author: postData.author,
      featuredImage: postData.featuredImage,
      draft: isDraft,
      post_body: postData.postBody,
      tags: postData.tags,
      description: postData.description
    };

    setPostSumbitLoading(true);

    blog
      .add_post(fetch_config('POST', body))
      .then(res => {
        setPostSumbitLoading(false);
        if (res.status === 200) {
          setPostSubmitSuccess(true);
        } else {
          setError(true);
          setErrorMessage(res.message);
          setPostSubmitSuccess(false);
        }
      })
      .catch(error => {
        setError(true);
        setPostSubmitSuccess(false);
        setPostSumbitLoading(false);
      });
  };

  const autoSave = async () => {
    try {
      await window.sessionStorage.setItem(
        'add_post_auto_save',
        JSON.stringify(postData)
      );
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentSave = window.sessionStorage.getItem('add_post_auto_save');

      if (currentSave === JSON.stringify(postData)) {
        return;
      } else {
        autoSave(postData);
      }
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, [postData]);

  return (
    <AddPostContainer>
      <AddPostInfoLabel htmlFor="title">Title</AddPostInfoLabel>
      <AddPostInfoInput
        type="text"
        value={postData.title}
        onChange={e => updatePostData(e.target.value, 'title')}
        placeholder="enter post title"
        id="title"
      />

      <AddPostInfoLabel htmlFor="description">Description</AddPostInfoLabel>
      <AddPostInfoInput
        value={postData.description}
        onChange={e => updatePostData(e.target.value, 'description')}
        placeholder="enter description"
        id="description"
      />
      <AddPostInfoLabel htmlFor="body">Body</AddPostInfoLabel>
      <AddPostTextArea
        id="body"
        inputwidth="100%"
        height="400px"
        value={postData.postBody}
        onChange={e => {
          updatePostData(e.target.value, 'htmlString');
          updatePostData(e.target.value, 'postBody');
        }}
      />
      <AddPostInfoLabel htmlFor="postbody">Live Preview:</AddPostInfoLabel>
      <LivePreview id="postbody" htmlstring={postData.htmlString} />
      <PostOptionWrapper>
        <PostOptionGroup width="33%">
          <AddPostInfoLabel htmlFor="author">Author:</AddPostInfoLabel>
          <AddPostInfoInput
            type="text"
            value={postData.author}
            onChange={e => updatePostData(e.target.value, 'author')}
            placeholder="enter author's name"
            id="author"
            inputwidth="60%"
          />
        </PostOptionGroup>
        <PostOptionGroup width="33%">
          <AddPostInfoLabel htmlFor="tags">Tags:</AddPostInfoLabel>
          <AddPostInfoInput
            type="text"
            placeholder="enter tags separated by ,"
            value={postData.tags}
            onChange={e => updatePostData(e.target.value, 'tags')}
            id="tags"
            inputwidth="60%"
          />
        </PostOptionGroup>
        <PostOptionGroup width="33%">
          <AddPostInfoLabel htmlFor="featuredImage">
            Feat. Image:
          </AddPostInfoLabel>
          <AddPostInfoInput
            type="text"
            placeholder="enter image url"
            value={postData.featuredImage}
            onChange={e => updatePostData(e.target.value, 'featuredImage')}
            id="featuredImage"
            inputwidth="60%"
          />
        </PostOptionGroup>
      </PostOptionWrapper>
      <AddPostBtn
        type="button"
        onClick={postSubmitSuccess ? null : () => handlePostSubmit(false)}
      >
        <Icon icon={['far', 'plus-square']} size="lg" pSize="1em">
          {postSubmitLoading ? (
            <p>Sending..</p>
          ) : (
            <p>{postSubmitSuccess ? 'Post Added' : 'Add Post'}</p>
          )}
        </Icon>
      </AddPostBtn>
      {postSubmitSuccess ? (
        <AddAnotherPost
          type="button"
          onClick={() => {
            resetForm();
          }}
        >
          Success! Add another post?
        </AddAnotherPost>
      ) : null}
    </AddPostContainer>
  );
};

export default AddPost;

AddPost.propTypes = {
  api: propTypes.object.isRequired
};
