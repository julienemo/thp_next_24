import React, { useState, useEffect } from 'react';
import New from './New';
import SingleNote from './SingleNote';

const Nav = (list) => {
  const contentToShow = Object.entries(list).map((entry) => {
    console.log(entry);
    console.log(entry[0]);

    const note = entry[1];
    console.log(note);

    return (<div className="single_note"><SingleNote key={entry[0]} {...{ title: note.title, content: note.preview }} /></div>);
  });

  return (
    <>
      <div className="nav">
        <New />
        <div className="list">{contentToShow}</div>
      </div>
    </>
  );
};


export default Nav;
