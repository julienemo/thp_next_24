import React, { useState, useEffect } from 'react';

import SingleNote from './SingleNote';
import Form from './Form';


const Zoom = (select) => (
  <>
    <div className="zoom">
      <div className="preview">
        <SingleNote
          {...{ title: select.title, content: select.content }}
        />
      </div>
      <div>
        <Form {...{ select }} />
      </div>
    </div>
  </>
);

export default Zoom;
