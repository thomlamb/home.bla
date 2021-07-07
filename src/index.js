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
 gsap.to(".mask-items:nth-child(1)", {duration: 2, x: 100});


$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   // breakpoint and up  
	
        console.log("'ggeg")
   
         // when you hover a toggle show its dropdown menu
         $(".main-menu .menu-link").click(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".show").toggleClass("show"); 
          });
   
           // hide the menu when the mouse leaves the dropdown
         $( ".navbar .menu-link" ).mouseleave(function() {
           $(this).removeClass("show");  
         });
     
           // do something here
   
   // document ready  
   });

 document.body.appendChild(component());