import React from 'react';

import BirthdayGallery from './BirthdayGallery';

import birthday1 from '../assets/images/birthday1.jpg';
import birthday2 from '../assets/images/birthday2.jpg';
import birthday3 from '../assets/images/birthday3.jpg';
import birthday4 from '../assets/images/birthday4.jpg';
import birthday5 from '../assets/images/birthday5.jpg';
import birthday6 from '../assets/images/birthday6.jpg';
import birthday7 from '../assets/images/birthday7.jpg';
import birthday8 from '../assets/images/birthday8.jpg';
import birthday9 from '../assets/images/birthday9.jpg';
import birthday10 from '../assets/images/birthday10.jpg';
import birthday11 from '../assets/images/birthday11.jpg';
import birthday12 from '../assets/images/birthday12.jpg';
import birthday13 from '../assets/images/birthday13.jpg';
import birthday14 from '../assets/images/birthday14.jpg';
import birthday15 from '../assets/images/birthday15.jpg';

const birthdayImages = [
  { src: birthday1, caption: 'Taking a Group Pictures- Neha Birthday !' },
  { src: birthday2, caption: 'Give a Beautiful Gifts - kya hai isme ?' },
  { src: birthday3, caption: 'Irani Cafe- Harshada Birthday' },
  { src: birthday4, caption: 'Moments-Gandhi ke 3 bander ka birthday ' },
  { src: birthday5, caption: 'Fix Plan - Only girls eat cake !' },
  { src: birthday6, caption: 'Diksha Birthday at Arosha !' },
  { src: birthday7, caption: 'Smiles all around gp Photo ' },
  { src: birthday8, caption: 'Pg mai cake cut hua - Siddharth birthday' },
  { src: birthday9, caption: 'Cake is Ready !' },
  { src: birthday10, caption: 'Unforgettable moments' },
  { src: birthday11, caption: 'party lene ke baad photo-Shreyansh Birthday' },
  { src: birthday12, caption: 'Mug with Beautiful Girl - kisne diya ?' },
  { src: birthday13, caption: 'Wrapping up the moments' },
  { src: birthday14, caption: 'The best part of the day- pizza hi pizza' },
  { src: birthday15, caption: 'cream Cafe -- Yogeshree Birthday' },
];

const Birthday = () => {
  return (
    <BirthdayGallery
      title="🎂 Birthday Bash"
      description="A day full of love, cake, surprises, and unforgettable moments with our closest friends."
      images={birthdayImages}
    />
  );
};

export default Birthday;
