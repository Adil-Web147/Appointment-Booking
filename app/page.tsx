
import Image from "next/image";
import { Navbar } from "./component/Navbar";
import React from "react";
import { auth } from "./lib/auth";
import { redirect } from "next/navigation";
import { Hero } from "./component/Hero";
import { Logos } from "./component/Logos";
import { Features } from "./component/Features";
import { Testimonial } from "./component/Testimonial";
import { CTA } from "./component/Cta";

export default async function Home() {
  const session=await auth();
  if(session?.user){
    return redirect("/dashboard")
  }
  return (
   <div className="max-w-7xl max-auto px-4 sm:px-6 lg:px-8">
    <Navbar/>
    <Hero/>
    <Logos/>
    <Features/>
    <Testimonial/>
    <CTA/>
   </div>
    
  );
}
