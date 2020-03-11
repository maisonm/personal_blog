import React, { useState, useEffect } from 'react';

//Components
import Page from '../../Layout/Page';
import BlogPosts from './components/BlogPosts/BlogPosts';

//HoC
import GlobalApiRoutes from '../../Hoc/InjectApiRoutes';

const Blog = ({ api }) => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch(api.blog.get_all_posts('most_recent'))
      .then(res => {
        if (res.status !== 200) throw new Error('Failed to get blog posts.');
        return res.json();
      })
      .then(posts => setPosts(posts))
      .catch(error => {
        setError(true);
        setErrorMessage(error);
      });
  }, []);

  return (
    <Page pageTitle="Maison's Posts">
      {posts ? <BlogPosts blogPosts={posts} /> : null}
    </Page>
  );
};

export default GlobalApiRoutes(Blog);
