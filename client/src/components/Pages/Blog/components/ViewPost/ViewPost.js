import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import _ from 'lodash';
import propTypes from 'prop-types';

//Components
import Page from '../../../../Layout/Page';

//HOC
import InjectApiRoutes from '../../../../Hoc/InjectApiRoutes';

//Styles
import { PostPageContainer } from './styles';

const qs = require('query-string');

const ViewPost = (props) => {
  const [postData, setPostData] = useState(undefined);
  const [redirect404, setRedirect404] = useState(false);

  //Get query search from url
  const urlQuery = qs.parse(props.location.search);

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  useEffect(() => {
    //Redirect upon no query search passed into the url or wrong search param variable name used (ie. post vs postid)
    if (_.isEmpty(urlQuery) || !urlQuery.postid) {
      return setRedirect404(true);
    }

    if (props.location.state) {
      //use post from state
      const { state } = props.location;
      setPostData(state);
    } else {
      //Use urlQuery
      const { api } = props;
      const { blog } = api;

      blog
        .get_single_post(urlQuery.postid)
        .then((res) => {
          if (res.status !== 200)
            throw new Error(
              'Failed to load post. Please refresh and try again.'
            );
          else return res.json();
        })
        .then((post) => console.log(post))
        .catch((e) => console.log(e));
    }
  }, []);
  return (
    <PostPageContainer>
      {redirect404 ? <Redirect push to="/404" /> : null}
      Page
    </PostPageContainer>
  );
};

export default InjectApiRoutes(ViewPost);
