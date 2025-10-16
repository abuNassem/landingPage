'use client'
import CallToAction from "@/sections/callToAction";
import Hero from "@/sections/hero";
import LogoTicker from "@/sections/logoTicker";
import Pricing from "@/sections/pricing";
import ProductShowCase from "@/sections/productShowCase";
import TestImonials from "@/sections/testImonials";
import { useState } from "react";
import Header from "./component/common/header";
import SmallHeader from "./component/common/smallHeader";
import Footer from "./component/common/footer";
import { AppContext } from "./component/createContext";
export default function Home() {
  const [openHeader,setOpenHeader]=useState(false)
  const value={
    openHeader,
    setOpenHeader
}
  return (
     <AppContext.Provider value={value}>
       <Header/>
       {openHeader&& <SmallHeader/>}
       
<div >
 
      <Hero/>
      <LogoTicker/>
      <ProductShowCase/>
      <Pricing/>
      <TestImonials/>
      <CallToAction/>
    </div>
            <Footer/>

     </AppContext.Provider>
    
  );
}
