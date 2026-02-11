"use client";
import { useEffect, useState } from "react";
import CardList1 from "./components/CardList1";
import CardList2 from "./components/CardList2";
import CardList3 from "./components/CardList3";
export default function Home() {
  const [index, setIndex] = useState(0);
  const slides = [
    "/image/slide1.jpg",
    "/image/slide2.jpg",
    "/image/slide3.jpg",
    "/image/slide4.jpg",
    "/image/slide5.jpg",

  ];

  // auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev === slides.length - 1 ? 0 : prev + 1);
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [slides.length]);


  return (
    <main className="pl-5 pr-5">
      <div className="relative">
        <div className="flex h-120 ">
          <img className="w-4xl  border-r-2 border-gray-300" src={slides[index]} alt={`Slide ${index + 1}`} />
          <img src="/image/scanForApp.jpg" alt="Sacn For App" width={350} />
          <button className=" bg-white absolute left-80 bottom-2 border p-1 m-2 gap-1.5 rounded-lg" onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}>Prev</button>
          <button className=" bg-white absolute right-180 bottom-2 border p-1 m-2 gap-1.5 rounded-lg" onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}>Next</button>
        </div>
      </div>

      <h1 className="color-gray-800 bg-gray-300 p-2 text-2xl mt-1 pt-5">Flash Sale</h1>
      <div className="text-orange-500 border-b-2 border-gray-300 flex justify-between p-2 mt-2">
        <h1 className="ml-10 ">On Sale Now</h1>
        <input className="mr-10 border border-orange-500 p-1" type="submit" value="SHOP ALL PRODUCTS" />
      </div>

      <CardList1 />

      <h1 className="color-gray-800 bg-gray-300 p-2 text-2xl mt-1 pt-5">Categories</h1>
      <CardList2 />

      <h1 className="color-gray-800 bg-gray-300 p-2 text-2xl mt-1 pt-5">Just For You</h1>
      <CardList3 />


      <div className=" flex justify-center items-center mt-2 mb-2 ">
        <div className="border border-sky-600 text-sky-600 pt-1 pl-25 pr-25 pb-1 mt-2 mb-2">LOAD MORE</div>
      </div>





      <div className="footerFirst grid grid-cols-[1fr_1fr_2fr]">


        <div className="firstFirst">
          <h3 className="text-blue-600 font-bold mb-2">Customer Care</h3>
          <ul className="text-blue-600">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">How to Buy</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>



        <div className="SecondFirst">
          <h3 className="text-blue-600 font-bold mb-2">Bazar</h3>
          <ul className="text-blue-600">
            <li><a href="#">About Daraz</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Daraz Blog</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Digital Payments</a></li>
            <li><a href="#">Daraz Customer University</a></li>
            <li><a href="#">Daraz Affiliate Program</a></li>
            <li><a href="#">Review & Win</a></li>
            <li><a href="#">Meet the winners</a></li>
            <li><a href="#">Daraz University</a></li>
            <li><a href="#">Sell on Daraz</a></li>
            <li><a href="#">Code of Conduct</a></li>
          </ul>
        </div>



        <div className="thirdFirst flex justify-between">
          <div><img className="w-30" src="/image/logo.png" alt="Logo" /></div>
          <div className="">
            <div className="title text-red-500 font-mono">Happy Shopping</div>
            <div className="text text-blue-600">Download App</div>
          </div>
          <div className="flex flex-col">
            <img className="w-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Available_on_the_App_Store_%28black%29.png/1280px-Available_on_the_App_Store_%28black%29.png?20120930120057" alt="" />
            <img  className="w-50" src="https://www.vhv.rs/dpng/d/114-1147665_transparent-google-play-icon-png-android-available-on.png" alt="" />
            <img className="w-50" src="https://brandlogos.net/wp-content/uploads/2025/04/huawei_appgallery_badge-logo_brandlogos.net_0kc7c-768x232.png" alt="" />
          </div>
        </div>

      </div>








    </main>
  );
}
