import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

//Styles
import {
  EditPostContainer,
  EditPostInfoLabel,
  EditPostInfoInput,
  EditPostTextArea,
  EditPostBtn,
  EditAnotherPost,
  PostOptionWrapper,
  PostOptionGroup,
  CloseEditPost
} from './styles';

//Components
import LivePreview from '../../AddPost/LivePreview/LivePreview';
import Icon from '../../../../Icons/Icon';

const EditPost = ({ post, closeEditPost, api }) => {
  const [postSubmitLoading, setPostSumbitLoading] = useState(false);
  const [postSubmitSuccess, setPostSubmitSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { fetch_config, blog } = api;

  const [postData, setPostData] = useState({
    postId: post._id,
    htmlString: post.post_body,
    title: post.title,
    author: post.author,
    tags: post.tags.toString(),
    featuredImage: post.featured_image,
    postBody: post.post_body,
    description: post.description
  });

  const resetForm = () => {
    setPostSumbitLoading(false);
    setPostSubmitSuccess(false);
    setPostData({
      postId: '',
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

  const handlePostSubmit = () => {
    let body = {
      updatedPost: {
        title: postData.title,
        author: postData.author,
        tags: postData.tags,
        featuredImage: postData.featuredImage,
        post_body: postData.postBody,
        description: postData.description
      }
    };
    blog
      .update_post(fetch_config('PUT', body), postData.postId)
      .then(res => console.log(res));
  };

  return (
    <EditPostContainer>
      <CloseEditPost onClick={() => closeEditPost()}>
        <h3>Edit Post</h3>
        <Icon
          icon={['far', 'plus-square']}
          size="lg"
          pSize=".85em"
          hovercolor="mainIconColor"
          cursor="pointer"
        >
          Close Edit
        </Icon>
      </CloseEditPost>
      <EditPostInfoLabel htmlFor="title">Title</EditPostInfoLabel>
      <EditPostInfoInput
        type="text"
        value={postData.title}
        onChange={e => updatePostData(e.target.value, 'title')}
        placeholder="enter post title"
        id="title"
      />

      <EditPostInfoLabel htmlFor="description">Description</EditPostInfoLabel>
      <EditPostInfoInput
        value={postData.description}
        onChange={e => updatePostData(e.target.value, 'description')}
        placeholder="enter description"
        id="description"
      />
      <EditPostInfoLabel htmlFor="body">Body</EditPostInfoLabel>
      <EditPostTextArea
        id="body"
        inputwidth="100%"
        height="400px"
        value={postData.postBody}
        onChange={e => {
          updatePostData(e.target.value, 'htmlString');
          updatePostData(e.target.value, 'postBody');
        }}
      />
      <EditPostInfoLabel htmlFor="postbody">Live Preview:</EditPostInfoLabel>
      <LivePreview id="postbody" htmlstring={postData.htmlString} />
      <PostOptionWrapper>
        <PostOptionGroup width="33%">
          <EditPostInfoLabel htmlFor="author">Author:</EditPostInfoLabel>
          <EditPostInfoInput
            type="text"
            value={postData.author}
            onChange={e => updatePostData(e.target.value, 'author')}
            placeholder="enter author's name"
            id="author"
            inputwidth="60%"
          />
        </PostOptionGroup>
        <PostOptionGroup width="33%">
          <EditPostInfoLabel htmlFor="tags">Tags:</EditPostInfoLabel>
          <EditPostInfoInput
            type="text"
            placeholder="enter tags separated by ,"
            value={postData.tags}
            onChange={e => updatePostData(e.target.value, 'tags')}
            id="tags"
            inputwidth="60%"
          />
        </PostOptionGroup>
        <PostOptionGroup width="33%">
          <EditPostInfoLabel htmlFor="featuredImage">
            Feat. Image:
          </EditPostInfoLabel>
          <EditPostInfoInput
            type="text"
            placeholder="enter image url"
            value={postData.featuredImage}
            onChange={e => updatePostData(e.target.value, 'featuredImage')}
            id="featuredImage"
            inputwidth="60%"
          />
        </PostOptionGroup>
      </PostOptionWrapper>
      <EditPostBtn
        type="button"
        onClick={postSubmitSuccess ? null : () => handlePostSubmit(false)}
      >
        <Icon icon={['far', 'plus-square']} size="lg" pSize="1em">
          {postSubmitLoading ? (
            <span>Sending..</span>
          ) : (
            <span>{postSubmitSuccess ? 'Post Added' : 'Add Post'}</span>
          )}
        </Icon>
      </EditPostBtn>
      {postSubmitSuccess ? (
        <EditAnotherPost
          type="button"
          onClick={() => {
            resetForm();
          }}
        >
          Success! Add another post?
        </EditAnotherPost>
      ) : null}
    </EditPostContainer>
  );
};

export default EditPost;

EditPost.propTypes = {
  post: propTypes.object.isRequired,
  closeEditPost: propTypes.func.isRequired
};
