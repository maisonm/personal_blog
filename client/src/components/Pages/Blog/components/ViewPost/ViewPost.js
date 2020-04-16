import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import _ from 'lodash';
import propTypes from 'prop-types';

//Components
import Page from '../../../../Layout/Page';
import HtmlComponent from '../../../../HtmlComponent/HtmlComponent';

//HOC
import InjectApiRoutes from '../../../../Hoc/InjectApiRoutes';

//Styles
import {
  PostContainer,
  PostBody,
  PostFeaturedImage,
  PostDetails,
} from './styles';
import '../PostBodyRender/index.css';

const qs = require('query-string');

const ViewPost = (props) => {
  const [postData, setPostData] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState(undefined);
  const [redirect404, setRedirect404] = useState(false);

  useEffect(() => {
    if (props.location.query) {
      setSearchQuery(props.location.query.postid);
    } else {
      setSearchQuery(qs.parse(props.location.search).postid);
    }
  }, [props.location]);

  useEffect(() => {
    if (searchQuery) {
      //Use urlQuery
      const { api } = props;
      const { blog } = api;

      blog
        .get_single_post(searchQuery)
        .then((res) => {
          if (res.status !== 200) setRedirect404(true);
          else return res.json();
        })
        .then((post) => setPostData(post))
        .catch((e) => setRedirect404(true));
    }
  }, [searchQuery]);
  return (
    <Page noheader={false} pageTitle={postData ? postData.post.title : null}>
      {redirect404 ? <Redirect push to="/404" /> : null}
      {postData ? (
        <PostContainer>
          <PostDetails>
            <p>Author:</p>
            <span>{postData.post.author}</span>
            <p>Tags:</p>
            <span>{postData.post.tags.map((tag) => `${tag},`)}</span>
            <p>Published:</p>
            <span>03-10-20</span>
          </PostDetails>
          <PostFeaturedImage
            src={postData.post.featuredImage}
            alt="featured image"
          />
          <PostBody>
            <HtmlComponent htmlBody={postData.post.post_body} />
          </PostBody>
        </PostContainer>
      ) : null}
    </Page>
  );
};

export default InjectApiRoutes(ViewPost);
