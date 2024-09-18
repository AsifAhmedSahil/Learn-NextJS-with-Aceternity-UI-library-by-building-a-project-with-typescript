
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const codingSchoolContent = [
  {
    title: 'Personalized Learning Experience',
    description:
      'Embark on a coding journey tailored specifically to your goals. Our personalized instruction adapts to your unique needs, fostering an environment where creativity and problem-solving flourish. Your aspirations are supported by our dedicated instructors, guiding you on the path to coding mastery.',
  },
  {
    title: 'Hands-On Project-Based Learning',
    description:
      'Dive into real-world projects that enhance your skills through practical application. Our interactive approach ensures that you not only learn coding concepts but also implement them, preparing you for challenges in the tech industry.',
  },
  {
    title: 'Immediate Feedback & Engagement',
    description:
      'Experience an engaging learning atmosphere where feedback is instantaneous. This real-time interaction helps reinforce your understanding and accelerates your growth as a programmer, making the learning process both effective and enjoyable.',
  },
  {
    title: 'Up-to-Date Curriculum',
    description:
      'Stay ahead in the fast-paced world of technology with our continuously updated curriculum. We incorporate the latest trends and tools in coding education, ensuring you acquire the most relevant skills for today’s job market.',
  },
  {
    title: 'Endless Learning Opportunities',
    description:
      'With a vast library of resources and diverse course offerings, you’ll always have new material to explore. Our platform is designed for lifelong learning, ensuring your coding skills evolve and expand as you advance in your career.',
  },
];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={codingSchoolContent} />
    </div>
  )
}

export default WhyChooseUs