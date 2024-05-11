'use client'
import Link from "next/link";
import React from "react";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course:Courses) => course.isFeatured);
  return (
    <div className="py-12 bg-gray-900 ">
      {/* 1 no div */}
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>

      {/* 2 no div */}

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-8">
            {
                featuredCourses.map((course:Courses) =>(
                    <div key={course.id} className="flex justify-center" >
                            <BackgroundGradient  className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className="px-3 py-1.5 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 mt-5">
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                    </div>
                ))
            }
        </div>
      </div>

      {/* 3 no div holo button */}
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
