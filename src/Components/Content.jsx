import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Nav from './Nav';

import SingleNote from './SingleNote';
import Form from './Form';

const Content = () => {
  const originalList = () => {
    const archive = {};
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      const note = JSON.parse(window.localStorage.getItem(keys[i]));
      archive[keys[i]] = {
        title: note.title,
        content: note.content,
      };
    }
    return archive;
  };

  const [list, setList] = useState(originalList());
  const [select, setSelect] = useState('none');
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [newSubmit, setNewSubmit] = useState(false);

  const streamTitle = (newTitle) => {
    setNewSubmit(false);
    setEditTitle(newTitle);
  };

  const streamContent = (newContent) => {
    setNewSubmit(false);
    setEditContent(newContent);
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (editContent || editTitle) {
      setNewSubmit(true);
    }
  };

  useEffect(() => {
    if (editContent && editTitle && newSubmit) {
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


  const changeSelect = (e) => {
    if (e.target.id) {
      setSelect(list[e.target.id]);
    }
  };

  const clearSelect = () => {
    setSelect('create');
  };

  const updateList = (noteKey, newTitle, newContent) => {
    list[noteKey] = { title: newTitle, content: newContent };
  };

  return (
    <>
      <Nav {...{ list }} newclick={clearSelect} click={changeSelect} />
      <div className="zoom">
        <div className="preview">
          <SingleNote {...display()} />
        </div>
        <div>
          <Form {...{ select }} onformsubmit={submitNote} updateContentList={updateList} ontitlechange={streamTitle} oncontentchange={streamContent} />
        </div>
      </div>
      {' '}

    </>
  );
};

export default Content;
