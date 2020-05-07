import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Form = ({ select }) => {
  const [currentTitle, setCurrentTitle] = useState(select.title);
  const [currentContent, setCurrentContent] = useState(select.content);

  // setCurrentContent(select.content);

  const changeTitle = (e) => {
    setCurrentTitle(e.target.value);
  };

  const changeContent = (e) => {
    setCurrentContent(e.target.value);
  };

  const saveChange = (e) => {
    e.preventDefault();
    const now = new Date();
    const timestamp = moment(now).format('YYYYMMDDhhmmss');
    const title = currentTitle;
    const content = currentContent;
    console.log(title);
    console.log(content);
    console.log(timestamp);
    window.localStorage.setItem(timestamp, JSON.stringify({ title, content }));
  };
  return (
    <form onSubmit={saveChange}>
      <input
        type="text"
        placeholder="Title of your new note"
        onChange={changeTitle}
        value={currentTitle}
      />
      <textarea
        placeholder="Content of your new note"
        onChange={changeContent}
        value={currentContent}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
