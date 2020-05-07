import React, { useState, useEffect } from 'react';

import SingleNote from './SingleNote';


const Zoom = (select) => (
  <>
    <div className="zoom">
      <div className="preview">
        <SingleNote
          {...{ title: select.title, content: select.content }}
        />
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="type something"
            value={select.title}
          />
          <textarea placeholder="type some thing" value={select.content} />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  </>
);

export default Zoom;
