import React, { useState, useEffect } from "react";
import Showdown from "showdown";

const SingleNote = ({ title, content }) => {
  const converter = new Showdown.Converter();
  const creatMD = { __html: content ? converter.makeHtml(content) : "" };
  // const [currentTitle, setCurrentTitle] = useState(title);
  // console.log(currentTitle);

  // const [currentContent, setCurrentContent] = useState(content);
  // console.log(currentContent);

  return (
    <>
      <h6 className="note_title">{title}</h6>
      <div dangerouslySetInnerHTML={creatMD} />
    </>
  );
};

export default SingleNote;
