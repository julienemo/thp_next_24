import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Form = ({
  select,
  oncontentchange,
  ontitlechange,
  onformsubmit,
  updateContentList,
}) => {
  const [currentTitle, setCurrentTitle] = useState(select.title);
  const [currentContent, setCurrentContent] = useState(select.content);

  const changeTitle = (value) => {
    setCurrentTitle(value);
  };
  const changeContent = (value) => {
    setCurrentContent(value);
  };
  // setCurrentContent(select.content);

  return (
    <form onSubmit={(e) => {
      onformsubmit(e);
      const timestamp = moment(new Date()).format('YYYYMMDDhhmmss');
    }}
    >
      <input
        type="text"
        placeholder="Title of your new note"
        onChange={(e) => {
          ontitlechange(e.target.value);
          changeTitle(e.target.value);
        }}
        value={currentTitle}
      />
      <textarea
        placeholder="Content of your new note"
        onChange={(e) => {
          oncontentchange(e.target.value);
          changeContent(e.target.value);
        }}
        value={currentContent}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
