import React from 'react';

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
  BlogPostInfoBox
} from './styles';

//FA
import Icon from '../../../../Icons/Icon';

const BlogPosts = ({ blogPosts }) => {
  const { posts } = blogPosts;

  return (
    <BlogPostListContainer>
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
                  <p>
                    <Icon
                      icon={['far', 'edit']}
                      size="sm"
                      color="mainIconColor"
                    />
                    <span>last edited:</span> 03/05/20
                  </p>
                </BlogPostInfoBox>
                <BlogPostInfoBox>
                  <p>
                    <Icon
                      icon={['far', 'sticky-note']}
                      size="sm"
                      color="mainIconColor"
                    />
                    <span>tags:</span> react, javascript, es6
                  </p>
                </BlogPostInfoBox>
              </BlogPostInfo>
            </BlogListCard>
          ))
        : null}
    </BlogPostListContainer>
  );
};

export default BlogPosts;
