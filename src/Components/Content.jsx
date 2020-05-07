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
        preview: chopString(note.content, 10),
      };
    }
    return archive;
  };

  return (
    <>
      <Nav {...originalList()} />
      <Zoom />
    </>
  );
};


export default Content;
