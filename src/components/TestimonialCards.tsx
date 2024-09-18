'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const codingSchoolTestimonials = [
  {
    quote:
      'Joining this coding school completely transformed my programming skills. The instructors are top-notch and truly invested in my success!',
    name: 'Jordan Smith',
    title: 'JavaScript Student',
  },
  {
    quote:
      "The support and community here are incredible. I've not only improved my coding skills but also gained confidence as a developer.",
    name: 'Sophia Brown',
    title: 'React.js Student',
  },
  {
    quote:
      "This school equipped me with the tools and knowledge I needed to launch my career in tech. The hands-on projects were invaluable!",
    name: 'Liam Johnson',
    title: 'TypeScript Student',
  },
  {
    quote:
      'Finding the right guidance as a beginner was tough, but my instructor here truly understood my challenges and helped me excel.',
    name: 'Mia Davis',
    title: 'Next.js Student',
  },
  {
    quote:
      'The courses on Redux were game-changers for my understanding of state management. I highly recommend this school for any aspiring developer!',
    name: 'Ethan White',
    title: 'Redux Student',
  },
];


function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={codingSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards