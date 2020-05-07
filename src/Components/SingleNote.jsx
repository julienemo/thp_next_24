import React, { useState, useEffect } from 'react';

const SingleNote = ({
  title, content,
}) => {
  const five = '5';
  // const [currentTitle, setCurrentTitle] = useState(title);
  // console.log(currentTitle);

  // const [currentContent, setCurrentContent] = useState(content);
  // console.log(currentContent);

  return (
    <>
      <h6 className="note_title">{title}</h6>
      <p>{content}</p>
    </>
  );
};


export default SingleNote;
