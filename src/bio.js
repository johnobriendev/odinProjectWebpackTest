import './style.css';
import Picture from './john-bio.jpg';

export default function bio () {
    const bioPage = document.createElement('div');
    const bioText = document.createElement('p');
    const bioPicture = new Image();

    bioText.classList.add('bio-text');
    bioPicture.classList.add('bio-picture');

    bioPicture.src = Picture;
    bioText.innerText = "John has been a professional musician for over 10 years. He holds a Bachelor's degree in Music from the University of Pittsburgh where he studied under legendary bebop guitarist Joe Negri and the late internationally-acclaimed pianist Geri Allen. While living in Pittsburgh, John founded the jazz/rock/fusion band 'The Clock Reads' with whom he recorded 3 studio albums and 2 live albums. In addition to his busy performing schedule, John taught music and directed group programs at Sunburst School of Music where he held a position for over 5 years. John developed a relationship with John Page Classic Guitars whose collaboration led to him playing with artists such as the pioneering hip-hop group Sugar Hill Gang and Berklee College of Music Professor Tomo Fujita."

    bioPage.appendChild(bioPicture);
    bioPage.appendChild(bioText);

    return bioPage;
}