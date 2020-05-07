import React, { useState, useEffect } from 'react';
import moment from 'moment';

import SingleNote from './SingleNote';
import Form from './Form';


const Zoom = (select, updateContentList) => {
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [newSubmit, setNewSubmit] = useState(false);

  const streamTitle = (newTitle) => {
    setEditTitle(newTitle);
  };

  const streamContent = (newContent) => {
    setEditContent(newContent);
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (editContent || editTitle) {
      setNewSubmit(true);
    }
  };

  useEffect(() => {
    if (editContent && editTitle) {
      const now = new Date();
      const timestamp = moment(now).format('YYYYMMDDhhmmss');
      window.localStorage.setItem(
        timestamp,
        JSON.stringify({ title: editTitle, content: editContent }),
      );
      setEditTitle('');
      setEditContent('');
    }
  }, [newSubmit]);

  const display = () => {
    if (!select.hasOwnProperty('0')) {
      return {
        title: select.title,
        content: select.content,
      };
    }
    return {
      title: editTitle,
      content: editContent,
    };
  };

  return (
    <>
      <div className="zoom">
        <div className="preview">
          <SingleNote {...display()} />
        </div>
        <div>
          <Form {...{ select }} onformsubmit={submitNote} updateContentList={updateContentList} ontitlechange={streamTitle} oncontentchange={streamContent} />
        </div>
      </div>
    </>
  );
};

export default Zoom;
