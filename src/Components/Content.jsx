import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Nav from './Nav';

import SingleNote from './SingleNote';
import Form from './Form';

// this is the main content
// it keeps track of
// 1. the list of notes (update from form)
// 2. whether any single note is being view on the right (update from nav)
// 3. whether there is a note being edited/created (update from form)
// 4. whether there has just been a submit (update from form)

const Content = () => {
  const originalListOnTheLeft = () => {
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

  const [list] = useState(originalListOnTheLeft());
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
      const timestamp = moment(new Date()).format('YYYYMMDDhhmmss');
      window.localStorage.setItem(
        timestamp,
        JSON.stringify({ title: editTitle, content: editContent }),
      );
      setEditTitle('');
      setEditContent('');
    }
  }, [newSubmit]);

  const changeSelect = (e) => {
    if (e.target.id) {
      setSelect(list[e.target.id]);
      setEditContent(list[e.target.id].content);
      setEditTitle(list[e.target.id].title);
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
          <SingleNote {...{ title: editTitle, content: editContent }} />
        </div>
        <div>
          <Form key={select.title} {...{ select }} onformsubmit={submitNote} updateContentList={updateList} ontitlechange={streamTitle} oncontentchange={streamContent} />
        </div>
      </div>
    </>
  );
};

export default Content;
