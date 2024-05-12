import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebiners from "@/components/UpcomingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-center text-2xl mt-8">Next js for next level</h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs />
      <TestimonialCards/>
      <UpcomingWebiners/>
      
    </main>
  );
}
