import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

//Styles
import { PublishedPostsContainer } from './styles';

//Components
import BlogPosts from '../../../Pages/Blog/components/BlogPosts/BlogPosts';
import EditPost from './EditPost/EditPost';

export const PublishedPosts = ({ api }) => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showEdit, setShowEdit] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);

  const { blog, fetch_config } = api;

  useEffect(() => {
    blog
      .get_all_posts({}, 'most_recent')
      .then(res => {
        if (res.status !== 200) {
          setErrorMessage(res.message);
          throw new Error('Failed to get blog posts.');
        }
        return res.json();
      })
      .then(posts => setPosts(posts))
      .catch(error => {
        setError(true);
      });
  }, [postsLoading]);

  useEffect(() => {
    console.log(showEdit);
    console.log(postToEdit);
  }, [showEdit]);

  const removePost = postid => {
    setPostsLoading(true);
    blog
      .remove_post(fetch_config('DELETE', {}), postid)
      .then(res => {
        setPostsLoading(false);
        if (res.status !== 200) {
          setError(true);
          setErrorMessage(res.message);
        }
      })
      .catch(e => {
        setError(true);
      });
  };

  const showEditPost = post => {
    setPostToEdit(post);
    setShowEdit(true);
  };

  const closeEditPost = () => {
    setPostToEdit(null);
    setShowEdit(false);
  };

  const determinView = () => {
    if (showEdit)
      return (
        <EditPost post={postToEdit} closeEditPost={closeEditPost} api={api} />
      );
    if (!showEdit || posts)
      return (
        <BlogPosts
          blogPosts={posts}
          dashboard={true}
          removePost={removePost}
          showEditPost={showEditPost}
        />
      );
  };

  useEffect(() => {}, [posts]);
  return <PublishedPostsContainer>{determinView()}</PublishedPostsContainer>;
};

export default PublishedPosts;
