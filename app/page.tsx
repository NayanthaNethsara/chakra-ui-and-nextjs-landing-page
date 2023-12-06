"use client";
import CallToActionWithAnnotation from "@/components/HeroSection";
import SimpleThreeColumns from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <CallToActionWithAnnotation />
      <Services />
      <SimpleThreeColumns />
      <Testimonials />
    </>
  );
}
