import _ from 'lodash';
import './style.css';
import './index.less';
import printMe from './print.js';


 function component() {
  //  const element = document.createElement('div');
  //  const btn = document.createElement('button');
 

  // // Lodash, currently included via a script, is required for this line to work

  // // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //  element.classList.add('hello');
  //  btn.innerHTML = 'Click me and check the console!';

  //  btn.onclick = printMe;
  //  element.appendChild(btn);
  //   // Add the image to our existing div.
  //   const myIcon = new Image();
  //   myIcon.src = Icon;
  //   element.appendChild(myIcon);
 
  //  return element;
 }
 gsap.to(".myClass", {duration: 2, x: 1000});
 document.body.appendChild(component());