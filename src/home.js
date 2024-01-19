//import './style.css';
import Picture from './john-home.jpg';
import './style.css';

export default function home () {

    const homePage = document.createElement('div');
    const homePicture = new Image();
    const homeText = document.createElement('div');

    homePage.classList.add('home-page');
    homePicture.classList.add("home-picture");
    homeText.classList.add('home-text');


    homeText.innerText = "Guitarist, Composer, Educator";
    homePicture.src = Picture;

    homePage.appendChild(homePicture);
    homePage.appendChild(homeText);

    return homePage;
}