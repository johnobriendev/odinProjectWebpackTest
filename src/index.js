import home from './home.js';
import header from './header.js';
import bio from './bio.js';
import lessons from './lessons.js';
import './style.css';

function component() {
    const content = document.createElement('div');
    content.id = "content";
    document.body.appendChild(content);
   

    const initialize = () => {
        content.appendChild(header());
        content.appendChild(home());
    }
    initialize();

    const clear = () => {
        if (content.firstChild.nextSibling) {
            content.removeChild(content.firstChild.nextSibling);
        }
    };

    const navItems = [...document.querySelectorAll(".nav-item")];

    const renderPage = (event) => {
        clear();
        console.log("clicked");
        if(event.target.innerText === "Home"){
            content.appendChild(home());
        }else if(event.target.innerText === "Bio"){
            content.appendChild(bio());
        }else if(event.target.innerText === "Lessons"){
            content.appendChild(lessons());
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', (event) => renderPage(event));
    });

    

  }
  
component();