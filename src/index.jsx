import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

const App = () => (
  <>
    <div className="nav">
      <div className="new">
        <button type="button">new post</button>
      </div>
      <div className="list">
        <p>one post</p>
        <p>two post</p>
        <p>three post</p>
      </div>
      <div className="zoom">
        <div>This is the detail/preview</div>
        <div>
          <form>
            <textarea placeholder="type some thing" />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
