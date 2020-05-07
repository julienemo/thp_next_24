import React, { useState, useEffect } from 'react';
import New from './New';
import SingleNote from './SingleNote';

// this is the left list with the "new" button
// it controls whether a note is selected

const Nav = ({ list, click, newclick }) => {
  const contentToShow = Object.entries(list).sort((a, b) => (a[0] < b[0] ? 1 : -1)).map((entry) => (
    <div className="single_note" id={entry[0]} onClick={click} key={entry[0]}>
      <SingleNote
        {...{ title: entry[1].title, content: entry[1].content }}
      />
    </div>
  ));

  return (
    <>
      <div className="nav">
        <New buttonclick={newclick} />
        <div className="list">{contentToShow}</div>
      </div>
    </>
  );
};


export default Nav;
