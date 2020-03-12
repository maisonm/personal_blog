import React, { useState, useEffect } from 'react';

//Styles
import {
  AddPostContainer,
  AddPostInfoInput,
  AddPostInfoLabel,
  AddPostTextArea,
  PostOptionWrapper,
  PostOptionGroup
} from './styles';

//Components
import LivePreview from './LivePreview/LivePreview';

const AddPost = props => {
  const [htmlString, setHtmlString] = useState('');
  //   useEffect(() => {
  //     console.log(htmlString);
  //   }, [htmlString]);
  return (
    <AddPostContainer>
      <AddPostInfoLabel htmlFor="title">Title</AddPostInfoLabel>
      <AddPostInfoInput type="text" placeholder="enter post title" id="title" />
      <AddPostTextArea
        inputwidth="100%"
        height="400px"
        onChange={e => {
          setHtmlString(e.target.value);
        }}
      />
      <AddPostInfoLabel htmlFor="postbody">Live Preview:</AddPostInfoLabel>
      <LivePreview id="postbody" htmlstring={htmlString} />
      <PostOptionWrapper>
        <PostOptionGroup width="33%">
          <AddPostInfoLabel htmlFor="author">Author:</AddPostInfoLabel>
          <AddPostInfoInput
            type="text"
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
            id="featuredImage"
            inputwidth="60%"
          />
        </PostOptionGroup>
      </PostOptionWrapper>
    </AddPostContainer>
  );
};

export default AddPost;
