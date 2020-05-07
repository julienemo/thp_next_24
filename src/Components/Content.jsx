import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Zoom from './Zoom';

import { chopString } from '../tools';


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
        preview: chopString(note.content, 15),
      };
    }
    return archive;
  };

  const [list, setList] = useState(originalList());
  const [select, setSelect] = useState('none');

  const changeSelect = (e) => {
    setSelect(list[e.target.id]);
  };


  return (
    <>
      <Nav {...{ list: originalList() }} click={changeSelect} />
      <Zoom {...select} />
    </>
  );
};


export default Content;
