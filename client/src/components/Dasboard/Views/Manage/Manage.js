import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

//Styled
import { ManageContainer, ManageControl, ManageTags } from './styles';

//Components
import TagBlurb from './TagBlurb/TagBlurb';

const Manage = ({ api }) => {
  const [tags, setTags] = useState([]);
  const [inputTagValue, setInputTagValue] = useState('');

  return (
    <ManageContainer>
      <ManageControl>
        <h5>Add Post Tags</h5>
        <ManageTags>
          <button
            type="button"
            onClick={e => {
              setTags([inputTagValue]);
              setInputTagValue('');
            }}
          >
            Add
          </button>
          <input
            type="text"
            value={inputTagValue}
            onChange={e => {
              setInputTagValue(e.target.value);
            }}
            placeholder="Enter a tag"
          />
        </ManageTags>
        <TagBlurb tags={tags} api={api} />
      </ManageControl>
    </ManageContainer>
  );
};

export default Manage;

Manage.propTypes = {
  api: propTypes.object.isRequired
};
