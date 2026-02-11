"use client";
import { useEffect, useState } from "react";
import CardList1 from "./components/CardList1";

export default function Home() {
  const [index, setIndex] = useState(0);
  const slides=[
    "/image/slide1.jpg",
    "/image/slide2.jpg",
    "/image/slide3.jpg",
    "/image/slide4.jpg",
    "/image/slide5.jpg",
    
  ];

  // auto slide every 3 seconds
  useEffect(()=>{
    const interval=setInterval(()=>{
      setIndex(prev=>prev===slides.length-1?0:prev+1);
    },3000);

    return ()=>clearInterval(interval); // cleanup on unmount
  },[slides.length]);


  return (
  <main className="pl-5 pr-5">
    <div className="relative">
      <div className="flex h-120 ">
      <img className="w-4xl  border-r-2 border-gray-300" src={slides[index]} alt={`Slide ${ index + 1 }`} />
      <img src="/image/scanForApp.jpg" alt="Sacn For App" width={350} />
      <button className=" bg-white absolute left-80 bottom-2 border p-1 m-2 gap-1.5 rounded-lg" onClick={()=>setIndex(index===0? slides.length-1:index-1)}>Prev</button>
      <button className=" bg-white absolute right-180 bottom-2 border p-1 m-2 gap-1.5 rounded-lg" onClick={()=>setIndex(index===slides.length-1?0:index+1)}>Next</button>
      </div>
    </div>

    <h1 className="color-gray-800 bg-gray-300 p-2 text-2xl mt-1">Flash Sale</h1>
    <div className="text-orange-500 border-b-2 border-gray-300 flex justify-between p-2 mt-2">
      <h1 className="ml-10 ">On Sale Now</h1>
      <input className="mr-10 border border-orange-500 p-1" type="submit" value="SHOP ALL PRODUCTS" />
    </div>
    <CardList1 />
  </main>
  );
}
