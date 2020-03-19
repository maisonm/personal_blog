import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

//Blog Posts List component: renders out a list of blog posts

//Components
import HtmlComponent from '../../../../HtmlComponent/HtmlComponent';

//Styles
import {
  BlogPostListContainer,
  BlogListCard,
  BlogPostHeader,
  BlogPostDescription,
  BlogPostInfo,
  BlogPostInfoBox,
  AreYouSureRemove
} from './styles';

//FA
import Icon from '../../../../Icons/Icon';

const BlogPosts = ({ blogPosts, dashboard, removePost, showEditPost }) => {
  const { posts } = blogPosts;
  const [fireRemovePost, setFireRemovePost] = useState(false);
  const [showAreYouSure, setShowAreYouSure] = useState(null);
  const [postIdToRemove, setPostIdToRemove] = useState(false);
  const [postToRemoveTitle, setPostToRemoveTitle] = useState(null);

  useEffect(() => {
    if (fireRemovePost) {
      removePost(postIdToRemove);
    }
  }, [fireRemovePost]);

  return (
    <BlogPostListContainer>
      {showAreYouSure ? (
        <AreYouSureRemove>
          <p>You are removing "{postToRemoveTitle}". Are you sure?</p>
          <button
            onClick={() => {
              setFireRemovePost(true);
              setShowAreYouSure(false);
            }}
            type="button"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setShowAreYouSure(false);
              setPostIdToRemove(null);
              setPostToRemoveTitle(null);
            }}
            type="button"
          >
            No
          </button>
        </AreYouSureRemove>
      ) : null}
      {posts
        ? posts.map((post, i) => (
            <BlogListCard key={i}>
              <BlogPostHeader>{post.title}</BlogPostHeader>
              <BlogPostDescription>
                This is a blog post that describes something really cool. It
                doesn't really matter what that is.
              </BlogPostDescription>
              <BlogPostInfo>
                <BlogPostInfoBox>
                  <div>
                    <Icon
                      icon={['far', 'edit']}
                      size="sm"
                      color="mainIconColor"
                    />
                    <span>last edited:</span> 03/05/20
                  </div>
                </BlogPostInfoBox>
                <BlogPostInfoBox>
                  <div>
                    <Icon
                      icon={['far', 'sticky-note']}
                      size="sm"
                      color="mainIconColor"
                    />
                    <span>tags:</span> react, javascript, es6
                  </div>
                </BlogPostInfoBox>
                {dashboard ? (
                  <BlogPostInfoBox>
                    <BlogPostInfoBox onClick={() => showEditPost(post)}>
                      <div>
                        <Icon
                          icon={['far', 'edit']}
                          size="md"
                          pSize="1.3em"
                          cursor="pointer"
                          color="mainIconColor"
                          hovercolor="secondaryIconColor"
                        >
                          edit
                        </Icon>
                      </div>
                    </BlogPostInfoBox>
                    <BlogPostInfoBox
                      onClick={() => {
                        setPostIdToRemove(post._id);
                        setPostToRemoveTitle(post.title);
                        setShowAreYouSure(true);
                      }}
                    >
                      <div>
                        <Icon
                          icon={['far', 'minus-square']}
                          size="md"
                          pSize="1.3em"
                          cursor="pointer"
                          color="mainIconColor"
                          hovercolor="secondaryIconColor"
                        >
                          remove
                        </Icon>
                      </div>
                    </BlogPostInfoBox>
                  </BlogPostInfoBox>
                ) : null}
              </BlogPostInfo>
            </BlogListCard>
          ))
        : null}
    </BlogPostListContainer>
  );
};

export default BlogPosts;

BlogPosts.propTypes = {
  // blogPosts: propTypes.object.isRequired,
  dashboard: propTypes.bool.isRequired,
  removePost: propTypes.func,
  showEditPost: propTypes.func
};
