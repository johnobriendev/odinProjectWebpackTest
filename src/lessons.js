import './style.css';
import Picture from './john-lessons.jpg';

export default function lessons () {
    const lessonsPage = document.createElement('div');
    const lessonsText = document.createElement('p');
    const lessonsPicture = new Image();

    lessonsText.classList.add('lessons-text');
    lessonsPicture.classList.add('lessons-picture');

    lessonsPicture.src = Picture;
    lessonsText.innerText = "I have been teaching guitar lessons for over ten years to students of all ages and skill levels. Lessons are tailored to each student based on their specific interests and goals whether they are learning to play their first notes, already performing, or just looking to deepen their understanding of music. Under my guidance former studemts have been admitted to study at prestigious music universities such as the Berklee College of Music, USC Thorton School of Music, and Dusquesne University. I am currently offering online lessons over Zoom or Skype, package discounts are given to those who sign up for recurring lessons. Please contact me for further information about availability and pricing."

    lessonsPage.appendChild(lessonsPicture);
    lessonsPage.appendChild(lessonsText);

    return lessonsPage;
}