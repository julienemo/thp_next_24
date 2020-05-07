import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import Content from './Components/Content';
/*
window.localStorage.setItem(
  '20200501010101',
  JSON.stringify({ title: 'first', content: 'what is wrong with you men' }),
);
window.localStorage.setItem(
  '20200502104236',
  JSON.stringify({
    title: 'second',
    content: "I don't remember your looks but I remember you were 3 sisters",
  }),
);
window.localStorage.setItem(
  '20200508042648',
  JSON.stringify({ title: 'third', content: 'Peer, you are lying' }),
);
window.localStorage.setItem(
  '20180912234728',
  JSON.stringify({
    title: 'forth',
    content: "Then I'll be young and then I'll have my hair back",
  }),
);
window.localStorage.setItem(
  '20191113145638',
  JSON.stringify({ title: 'fifth', content: "Madam don't die, I have an idea" }),
);
window.localStorage.setItem(
  '20200505122849',
  JSON.stringify({
    title: 'sixth',
    content: 'You lost your father like he lost his and the his father his own',
  }),
);

console.log(window.localStorage.length);
 */
const App = () => {
  const thisIsAPlaceHolder = 'hello';
  /*   window.onbeforeunload = () => {
    localStorage.clear();
  }; */

  return (<Content />);
};


ReactDOM.render(<App />, document.getElementById('root'));
