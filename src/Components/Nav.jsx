import React, { useState, useEffect } from 'react';
import New from './New';
import SingleNote from './SingleNote';

const Nav = ({ list, click, newclick }) => {
  const contentToShow = Object.entries(list).map((entry) => (
    <div className="single_note" id={entry[0]} onClick={click} key={entry[0]}>
      <SingleNote
        {...{ title: entry[1].title, content: entry[1].preview }}
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
