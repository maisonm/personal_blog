import React, { useState, useEffect } from 'react';

//Redux
//Redux
import { connect } from 'react-redux';
import NAVBAR_ACTIONS from '../../../modules/actions/navbar_actions';

//Components
import Page from '../../Layout/Page';
import BlogPosts from './components/BlogPosts/BlogPosts';

//HoC
import GlobalApiRoutes from '../../Hoc/InjectApiRoutes';

const Blog = ({ api, pageTitle, noheader, navlinkActive }) => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { blog } = api;

  useEffect(() => {
    navlinkActive('Blog');
    blog
      .get_all_posts({}, 'most_recent')
      .then((res) => {
        if (res.status !== 200) {
          setErrorMessage(res.message);
          throw new Error('Failed to get blog posts.');
        }
        return res.json();
      })
      .then((posts) => setPosts(posts))
      .catch((error) => {
        setError(true);
      });
  }, []);

  return (
    <Page
      pageTitle={pageTitle ? pageTitle : `Maison's Posts`}
      noheader={noheader}
    >
      {posts ? <BlogPosts blogPosts={posts} dashboard={false} /> : null}
    </Page>
  );
};

const mapDispatchToProps = (dispatch) => ({
  navlinkActive: (link) => dispatch(NAVBAR_ACTIONS.navlinkActive(link)),
});

export default connect(null, mapDispatchToProps)(GlobalApiRoutes(Blog));
