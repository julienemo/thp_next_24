import React, { useState, useEffect } from 'react';

const Form = ({ select }) => {
  const [currentTitle, setCurrentTitle] = useState(select.title);
  const [currentContent, setCurrentContent] = useState(select.content);

  // setCurrentContent(select.content);


  const changeTitle = (e) => {
    console.log('in change title');
    console.log(e.target.value);
    setCurrentTitle(e.target.value);
  };

  const changeContent = (e) => {
    setCurrentContent(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="type something" value={select.title} />
      <textarea placeholder="type some thing" value={select.content} />
      <button type="submit">Save</button>
    </form>
  );
};


export default Form;
