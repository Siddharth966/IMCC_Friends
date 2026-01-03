import React from 'react';
import BirthdayGallery from './BirthdayGallery';

import birthday1 from '/assets/images/birthday1.jpg';
import birthday2 from '/assets/images/birthday2.jpg';
import birthday3 from '/assets/images/birthday3.jpg';
import birthday4 from '/assets/images/birthday4.jpg';
import birthday5 from '/assets/images/birthday5.jpg';
import birthday6 from '/assets/images/birthday6.jpg';
import birthday7 from '/assets/images/birthday7.jpg';
import birthday8 from '/assets/images/birthday8.jpg';
import birthday9 from '/assets/images/birthday9.jpg';
import birthday10 from '/assets/images/birthday10.jpg';
import birthday11 from '/assets/images/birthday11.jpg';
import birthday12 from '/assets/images/birthday12.jpg';
import birthday13 from '/assets/images/birthday13.jpg';
import birthday14 from '/assets/images/birthday14.jpg';
import birthday15 from '/assets/images/birthday15.jpg';

const birthdayImages = [
  { 
    src: birthday1, 
    caption: 'Taking a Group Pictures- Neha Birthday !',
    date: 'March 2023',
    location: 'College Campus',
    emoji: '📸'
  },
  { 
    src: birthday2, 
    caption: 'Give a Beautiful Gifts - kya hai isme ?',
    date: 'December 2022',
    location: 'Secret Santa',
    emoji: '🎁'
  },
  { 
    src: birthday3, 
    caption: 'Irani Cafe- Harshada Birthday',
    date: 'August 2023',
    location: 'Irani Cafe',
    emoji: '☕'
  },
  { 
    src: birthday4, 
    caption: 'Moments-Gandhi ke 3 bander ka birthday',
    date: 'April 2023',
    location: 'PG Room',
    emoji: '🙈'
  },
  { 
    src: birthday5, 
    caption: 'Fix Plan - Only girls eat cake !',
    date: 'June 2023',
    location: 'Girls Hostel',
    emoji: '👭'
  },
  { 
    src: birthday6, 
    caption: 'Diksha Birthday at Arosha !',
    date: 'February 2023',
    location: 'Arosha Restaurant',
    emoji: '🎉'
  },
  { 
    src: birthday7, 
    caption: 'Smiles all around gp Photo',
    date: 'October 2022',
    location: 'College Lawn',
    emoji: '😄'
  },
  { 
    src: birthday8, 
    caption: 'Pg mai cake cut hua - Siddharth birthday',
    date: 'January 2023',
    location: 'PG Celebration',
    emoji: '🏠'
  },
  { 
    src: birthday9, 
    caption: 'Cake is Ready !',
    date: 'July 2023',
    location: 'Birthday Party',
    emoji: '🎂'
  },
  { 
    src: birthday10, 
    caption: 'Unforgettable moments',
    date: 'September 2022',
    location: 'Memory Lane',
    emoji: '💫'
  },
  { 
    src: birthday11, 
    caption: 'party lene ke baad photo-Shreyansh Birthday',
    date: 'November 2022',
    location: 'Post-Party',
    emoji: '🥳'
  },
  { 
    src: birthday12, 
    caption: 'Mug with Beautiful Girl - kisne diya ?',
    date: 'May 2023',
    location: 'Surprise Gift',
    emoji: '☕❤️'
  },
  { 
    src: birthday13, 
    caption: 'Wrapping up the moments',
    date: 'March 2023',
    location: 'Farewell',
    emoji: '✨'
  },
  { 
    src: birthday14, 
    caption: 'The best part of the day- pizza hi pizza',
    date: 'December 2022',
    location: 'Pizza Party',
    emoji: '🍕'
  },
  { 
    src: birthday15, 
    caption: 'cream Cafe -- Yogeshree Birthday',
    date: 'August 2023',
    location: 'Cream Cafe',
    emoji: '🍰'
  },
];

const birthdayCelebrants = [
  { name: "Neha", month: "March", favorite: "Cake cutting" },
  { name: "Harshada", month: "August", favorite: "Cafe outings" },
  { name: "Siddharth", month: "January", favorite: "PG parties" },
  { name: "Diksha", month: "February", favorite: "Restaurant dinners" },
  { name: "Shreyansh", month: "November", favorite: "Night parties" },
  { name: "Yogeshree", month: "August", favorite: "Cafe treats" },
  { name: "Friends Group", month: "Multiple", favorite: "Surprise parties" },
];

const Birthday = () => {
  return (
    <BirthdayGallery
      title="🎂 Birthday Celebrations"
      description="From surprise parties to heartfelt moments, every birthday with our friends turns into a memory we'll cherish forever. The cakes, the laughter, the gifts, and the endless photos — each celebration adds a new chapter to our friendship story."
      images={birthdayImages}
      additionalData={{
        celebrants: birthdayCelebrants,
        totalBirthdays: "15+ Celebrations",
        years: "2022-2023",
        favoriteCake: "Chocolate Truffle",
        tradition: "Group Photo & Cake Fight"
      }}
    />
  );
};

export default Birthday;