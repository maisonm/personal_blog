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
  const [htmlString, setHtmlString] = useState('');
  const [title, setTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [postSubmitLoading, setPostSumbitLoading] = useState(false);
  const [postSubmitSuccess, setPostSubmitSuccess] = useState(false);
  const [error, setError] = useState(false);

  const resetForm = () => {
    setPostSumbitLoading(false);
    setPostSubmitSuccess(false);
    setTitle('');
    setPostBody('');
    setAuthor('');
    setTags('');
    setFeaturedImage('');
    setHtmlString('');
  };

  const handlePostSubmit = isDraft => {
    const { fetch_config, blog } = api;
    //isDraft arg is a boolean
    const body = {
      title,
      author,
      featuredImage,
      draft: isDraft,
      post_body: postBody
    };

    setPostSumbitLoading(true);

    fetch(blog.add_post, fetch_config('POST', body))
      .then(res => {
        setPostSumbitLoading(false);
        if (res.status === 200) {
          setPostSubmitSuccess(true);
        } else {
          setPostSubmitSuccess(false);
        }
      })
      .catch(error => {
        setError(true);
        setPostSumbitLoading(false);
      });
  };

  const autoSave = async () => {
    const autoSaveObject = {
      title,
      author,
      tags,
      featuredImage,
      postBody
    };

    try {
      await window.sessionStorage.setItem(
        'add_post_auto_save',
        JSON.stringify(autoSaveObject)
      );
    } catch (e) {
      return;
    }
  };

  //   setInterval(() => {
  //     const currentSave = window.sessionStorage.getItem('add_post_auto_save');

  //     const autoSaveObject = {
  //       title,
  //       author,
  //       tags,
  //       featuredImage,
  //       postBody
  //     };

  //     if (currentSave === JSON.stringify(autoSaveObject)) {
  //       return;
  //     } else {
  //       autoSave();
  //     }
  //   }, 5000);

  return (
    <AddPostContainer>
      <AddPostInfoLabel htmlFor="title">Title</AddPostInfoLabel>
      <AddPostInfoInput
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="enter post title"
        id="title"
      />
      <AddPostTextArea
        inputwidth="100%"
        height="400px"
        value={postBody}
        onChange={e => {
          setHtmlString(e.target.value);
          setPostBody(e.target.value);
        }}
      />
      <AddPostInfoLabel htmlFor="postbody">Live Preview:</AddPostInfoLabel>
      <LivePreview id="postbody" htmlstring={htmlString} />
      <PostOptionWrapper>
        <PostOptionGroup width="33%">
          <AddPostInfoLabel htmlFor="author">Author:</AddPostInfoLabel>
          <AddPostInfoInput
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
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
            value={tags}
            onChange={e => setTags(e.target.value)}
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
            value={featuredImage}
            onChange={e => setFeaturedImage(e.target.value)}
            id="featuredImage"
            inputwidth="60%"
          />
        </PostOptionGroup>
      </PostOptionWrapper>
      <AddPostBtn
        type="button"
        onClick={() => {
          handlePostSubmit(false);
        }}
      >
        <Icon icon={['far', 'plus-square']} size="lg" pSize="1em">
          {postSubmitLoading ? <p>Sending..</p> : <p>Add Post</p>}
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
