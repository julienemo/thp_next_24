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
  const [currentNoteId] = useState(select.id);

  const changeTitle = (value) => {
    setCurrentTitle(value);
  };
  const changeContent = (value) => {
    setCurrentContent(value);
  };

  return (
    <form onSubmit={(e) => {
      onformsubmit(e);
      if (currentNoteId) {
        updateContentList(currentNoteId, currentTitle, currentContent);
      } else {
        const timestamp = moment(new Date()).format('YYYYMMDDhhmmss');
        updateContentList(timestamp, currentTitle, currentContent);
      }
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
