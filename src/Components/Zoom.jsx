import React, { useState, useEffect } from 'react';

import SingleNote from './SingleNote';
import Form from './Form';


const Zoom = (select) => {
  console.log(select);

  const display = () => {
    if (select.hasOwnProperty('3')) {
      return {
        title: '',
        content: 'Select a note from the left or write a new one',
      };
    }
    if (select.hasOwnProperty('2')) {
      return {
        title: 'Title of your new note',
        content: 'Content of your new note',
      };
    }
    return {
      title: select.title,
      content: select.content,
    };
  };
  console.log();
  return (
    <>
      <div className="zoom">
        <div className="preview">
          <SingleNote {...display()} />
        </div>
        <div>
          <Form {...{ select }} />
        </div>
      </div>
    </>
  );
};

export default Zoom;
