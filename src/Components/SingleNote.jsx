import React, { useState, useEffect } from 'react';

const SingleNote = ({ title, content }) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentContent, setCurrentContent] = useState(content);

  return (
    <>
      <h6 className="note_title">{currentTitle}</h6>
      <p>{currentContent}</p>
    </>
  );
};


export default SingleNote;
