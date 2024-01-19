export default function header () {
    const header = document.createElement('div');
    const logo = document.createElement('h1');
    const navigation = document.createElement('div');
    const home = document.createElement('div');
    const bio = document.createElement('div');
    const lessons = document.createElement('div');
    const contact = document.createElement('div');

    header.classList.add('header');
    logo.classList.add('logo');
    navigation.classList.add('navigation');
    home.classList.add('home-btn', 'nav-item');
    bio.classList.add('bio', 'nav-item');
    lessons.classList.add('lessons', 'nav-item');
    contact.classList.add('contact', 'nav-item');

    logo.innerText = "John O'Brien";
    home.innerText = "Home";
    bio.innerText = "Bio";
    lessons.innerText = "Lessons";
    contact.innerText = "Contact";

    navigation.appendChild(home);
    navigation.appendChild(bio);
    navigation.appendChild(lessons);
    navigation.appendChild(contact);

    header.appendChild(logo);
    header.appendChild(navigation);

    return header;
}