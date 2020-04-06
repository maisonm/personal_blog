import React, { useState } from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';

import propTypes from 'prop-types';

//Semantic UI Search
import { Search } from 'semantic-ui-react';

//Styles
import { SemanticContainer } from './styles';

const SemanticSearch = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');
  const [post, setPost] = useState(undefined);

  const handleResultSelect = (e, { result }) => setValue(result.title);

  const handleAutoSuggestClick = (post) => {
    setRedirect(true);
    setPost(post);
  };

  const handleSearchChange = (e, { value }) => {
    setIsLoading(true);
    setValue(value);

    setTimeout(() => {
      if (value.length < 1) {
        setIsLoading(false);
        setResults([]);
        setValue('');
      }

      const re = new RegExp(_.escapeRegExp(value), 'i');
      const isMatch = (result) => {
        return re.test(result.title);
      };

      let matching = _.filter(props.data, isMatch);

      let displayObjects = [];

      matching.forEach((post, i) => {
        let searchResult = {
          key: i,
          onClick: () => {
            handleAutoSuggestClick(post);
          },
          title: post.title,
        };

        displayObjects.push(searchResult);
      });

      setIsLoading(false);
      setResults(displayObjects);
    }, 300);
  };

  return (
    <SemanticContainer>
      {redirect ? (
        <Redirect
          push
          to={{
            pathname: `/single/post/${post._id}`,
            state: {
              post,
            },
          }}
        />
      ) : null}
      <Search
        loading={isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={_.debounce(handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        placeholder="Search posts"
        {...props}
      />
    </SemanticContainer>
  );
};

export default SemanticSearch;

propTypes.SemanticContainer = {
  // usertype: propTypes.string.isRequired,
  data: propTypes.object.isRequired,
};
