'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebiners() {

  const featuredWebinars = [
    {
      title: 'JavaScript Fundamentals',
      description:
        'Explore the core concepts of JavaScript and build a strong foundation in web development.',
      slug: 'javascript-fundamentals',
      isFeatured: true,
    },
    {
      title: 'React.js Best Practices',
      description:
        'Learn best practices for building scalable and maintainable React applications.',
      slug: 'react-js-best-practices',
      isFeatured: true,
    },
    {
      title: 'Introduction to TypeScript',
      description:
        'Discover how TypeScript can enhance your JavaScript development with strong typing and more.',
      slug: 'introduction-to-typescript',
      isFeatured: true,
    },
    {
      title: 'Building Server-Side Apps with Next.js',
      description:
        'Dive into server-side rendering and static site generation with Next.js.',
      slug: 'building-server-side-apps-next-js',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'State Management with Redux',
      description:
        'Master Redux for effective state management in your React applications.',
      slug: 'state-management-with-redux',
      isFeatured: true,
    },
    {
      title: 'Debugging JavaScript Like a Pro',
      description:
        'Learn effective debugging techniques to streamline your JavaScript development process.',
      slug: 'debugging-javascript',
      isFeatured: true,
    },
];


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Programming Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebiners