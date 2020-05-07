import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Zoom from './Zoom';

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

  const changeSelect = (e) => {
    setSelect(list[e.target.id]);
  };

  const clearSelect = () => {
    setSelect('new');
  };

  const updateList = (key, title, content) => {
    setList(list[key] = { title, content });
  };

  return (
    <>
      <Nav {...{ list }} newclick={clearSelect} click={changeSelect} />
      <Zoom {...select} updateContentList={updateList} />
    </>
  );
};

export default Content;
