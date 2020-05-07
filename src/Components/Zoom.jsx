import React, { useState, useEffect } from 'react';

const Zoom = () => (
  <>
    <div className="zoom">
      <div className="preview">This is the detail/preview</div>
      <div>
        <form>
          <input type="text" placeholder="title" />
          <textarea placeholder="type some thing" />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  </>
);

export default Zoom;
