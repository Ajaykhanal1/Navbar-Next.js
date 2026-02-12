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





      <div className="footerFirst grid grid-cols-[1fr_1fr_2fr] bg-gray-100">


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
            <li><a href="#">About Bazar</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Bazar Blog</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Digital Payments</a></li>
            <li><a href="#">Bazar Customer University</a></li>
            <li><a href="#">Bazar Affiliate Program</a></li>
            <li><a href="#">Review & Win</a></li>
            <li><a href="#">Meet the winners</a></li>
            <li><a href="#">Bazar University</a></li>
            <li><a href="#">Sell on Bazar</a></li>
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
            <img className="w-50" src="https://www.vhv.rs/dpng/d/114-1147665_transparent-google-play-icon-png-android-available-on.png" alt="" />
            <img className="w-50" src="https://brandlogos.net/wp-content/uploads/2025/04/huawei_appgallery_badge-logo_brandlogos.net_0kc7c-768x232.png" alt="" />
          </div>
        </div>

      </div>



      <div className="footerSecond grid grid-cols-[1fr_3fr] p-10">
        <div className="flex flex-col justify-between">
          <div><h3 className="mb-5 text-xl">Payment Methods</h3></div>
          <div className="flex ">
            <img className="w-13 h-9 mr-1" src="https://img.lazcdn.com/us/domino/c2458806-20cd-491a-a688-b401834ea19c_NP-139-84.png" alt="" />
            <img className="w-13 h-9 mr-1" src="https://img.lazcdn.com/us/domino/a6e969c7-243f-4323-8ad1-64599aeb52af_NP-117-70.png" alt="" />
            <img className="w-13 h-9 mr-1" src="https://img.lazcdn.com/us/domino/9ec5c353-cd15-400b-b2b4-8b7182fe76e7_NP-63-48.png" alt="" />
            <img className="w-13 h-9 mr-1" src="https://img.lazcdn.com/us/domino/9a39944c-1987-458d-8199-3a6c821bcdec_NP-144-84.png" alt="" />
            <img className="w-13 h-9" src="https://img.lazcdn.com/us/domino/29073aca-2ca5-4b79-a9cf-7d4ef62cbf7a_NP-768-424.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-between ml-15">
          <div><h3 className="mb-5 text-xl">Verified by</h3></div>
          <div><img src="//img.drz.lazcdn.com/g/tps/imgextra/i4/O1CN01ZaMORP1I3qlBom0V2_!!6000000000838-2-tps-73-41.png" alt="" /></div>
        </div>
      </div>


      <div className="thirdFooter grid grid-cols-[1fr_1fr_1fr_1fr] bg-gray-200 p-10 gap-2">

        <div className=" p-2">
          <h1 className="mb-3 text-gray-800">Experience Hassle-Free Online Shopping in Nepal with Bazar</h1>
          <p className="text-xs">E-commerce has evolved over the past few years and since it&apos;s easier and more convenient, it is evident that customers are actually switching to the trend of online shopping. Bazar, the Nepali shopping store, brings a whole new concept by showcasing a number of famous brands under one roof. Not only does it fulfill clothing necessities of both men and women but you can also shop for all kinds of appliances like air conditioners, heaters, refrigerators, LED TVs and a lot more. Simply select your favorite brand like Samsung, Apple, HP, Huawei, Dell, Canon, Nikon, etc and get yourself the best electronic items.
          </p>
          <h1 className="mt-5 mb-3 text-gray-800 ">Convenient Online Shopping in Nepal</h1>
          <p className="text-xs">Bazar is the ultimate Nepali eCommerce website that offers a solution for all needs of the customers. It has a wide and assorted range of products including clothing, electronics, mobile phones, home and living, health and beauty and much more.</p>
          <p className="text-xs">Bazar strives to provide customers the best shopping experience in Nepal. The online store is updated daily and</p>
        </div>




        <div className=" p-2 ">
          <div className="text-xs">new products are added every day to cater to all your needs. Visit Bazar.com.np to experience shopping in Nepal as never before. Don't forget to Download Bazar App and get exclusive discounts.
            <div className="mt-1
            ">            Bazar is a global online marketplace with ecommerce stores in <span className="text-blue-700">Pakistan</span>, <span className="text-blue-700">Bangladesh</span>, <span className="text-blue-700">Nepal</span>, <span className="text-blue-700">Sri Lanka</span> and <span className="text-blue-700">Myanmar</span>.
            </div>            <div className="m-2 ml-0">General Information:</div>
            <div className="mb-2">            Bazar Kaymu Private Limited
              Kathmandu Metropolitan City, Ward No. 11,Thapathali,Kathmandu, Nepal
              VAT No. 602403687</div>

            <div className="mb-2"> DOC registration number : 3-35-382-19/2081/82</div>

            <div className="mb-2">            Grievance handling Information:
            </div>           <div className="mb-2"> Grievance Management
              015970597 (please ask to be redirected to our Grievance Management team)
            </div>
            <div className="mb-2">OR</div>

            <div className="">Email:</div> <span className="text-blue-700"> customer.experience.np@care.Bazar.com</span></div>
          <h1 className="text-gray-800 mt-2 mb-2">TRENDING</h1>
          <div><p className="text-xs">Bazar 11.11 Sale,12.12 Sale,Dashain Dhamaka,Mobile Week,Valentine's Day Sale,Cricket Streaming,Grocery Shopping in Nepal,Realme GT 2 Pro,Realme GT Neo 3,</p></div>
        </div>





        <div className=" p-2">
          <h1 className="text-gray-800">Top Categories & Brands</h1>
          <div className="mb-2 ">
            <h6 className=" text-gray-700 text-xs" >NEW MOBILE PHONES IN NEPAL
            </h6>
            <p className="text-xs">Samsung Mobile Phones , Xiaomi Mobiles , Nokia Mobiles , Oppo Mobiles , Apple iPhones , OnePlus , Sony Mobiles , Huawei Mobiles , Lenovo Mobiles , Colors Mobiles , Gionee Mobiles , HTC Mobiles , Umidigi Mobiles , Tablets , Samsung Tablet , Mobile Accessories</p>
          </div>
          <div className="mb-2 ">
            <h6 className=" text-gray-700  text-xs" >LATEST LAPTOPS
            </h6>
            <p className="text-xs">Apple Laptops , Samsung Laptops , Asus Laptops , Acer Laptops , HP Laptops , Dell Laptops</p>
          </div>
          <div className="mb-2 ">
            <h6 className=" text-gray-700 text-xs" >LED TVS PRICES
            </h6>
            <p className="text-xs">Samsung LED TVs , Sony LED TVs , Videocon LED TVs</p>
          </div>
          <div className="mb-2 ">
            <h6 className=" text-gray-700 text-xs" >SUMMER APPLIANCES
            </h6>
            <p className="text-xs">Air Conditioners , Refrigerators & Fridges , Samsung Refrigerators , Deep Freezers , Generators & Portable Power , Water Dispensers
            </p>
          </div>
          <div className="mb-2 ">
            <h6 className=" text-gray-700 text-xs " >CAMERAS
            </h6>
            <p className="text-xs">Camera Tripods , Dron6s , IP & CCT V Cameras</p>
          </div>
          <div className="mb-2 ">
            <h6 className=" text-gray-700 text-xs" >LATEST GADGETS
            </h6>
            <p className="text-xs">Earphones & Headsets , Power Banks , Smart Watches , Portable Speakers , VR Headsets , PS4 Pro - PS4 Slim , Dell XPS 15 , HP Envy 13 , HP Spectre x360 , Samsung A51 , Galaxy Tab A7 , Galaxy Tab S7 , Samsung A72 , Samsung M51 , Apple iPhone 11 , iPhone 13 , Apple Watch , Realme GT Neo 2 , Huawei Watch GT 2 Pro , Honor Band 6 , Huawei Band 6 , Samsung M52 , Samsung A52s , Poco F3 GT 5G , iPhone 13 Pro , iPhone 13 Mini , Narzo 50i , Narzo 50A , iPhone 13 Pro Max , OnePlus Nord N10 , OnePlus 9 Pro , OnePlus Nord CE 5G , OnePlus 8T , Redmi Note 11 , Samsung M33 , Samsung A23 , Samsung A73 , Samsung A33 , Samsung A53 , Xiaomi Pad 5 , NIU , iPhone 14 , iPhone 14 Pro , iPhone 14 Plus , iPhone 14 Pro Max</p>
          </div>
        </div>





        <div className="   p-2">
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">COMPUTER COMPONENTS
            </h6>
            <p className="text-xs">Ram , Motherboards , Processors , Desktop Casings , CPU Cooling Fans , Gaming Graphic Cards</p>
          </div>
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">WOMEN'S FASHION
            </h6>
            <p className="text-xs">Clothes , Ladies Watches , Jewelry , Sarees , Ladies Kurti Designs , Women Undergarments , Shirts for Ladies & Girls , T-shirts for Ladies & Girls</p>
          </div>
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">MEN'S FASHION
            </h6>
            <p className="text-xs">Men's jeans , Bags for Men , Men's Shoes , Men's T-Shirts , Men's Watches</p>
          </div>
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">ONLINE GROCERY STORE
            </h6>
            <p className="text-xs">Rice , Chocolates , Tea , Coffee</p>
          </div>
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">ONLINE BOOKSTORE
            </h6>
            <p className="text-xs">Stationary Store , Religious Items</p>
          </div>
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">ONLINE AUTOMOTIVE STORE
            </h6>
            <p className="text-xs">Motorcycles - Bikes , Helmets</p>
          </div>
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">LEADING ONLINE STORES
            </h6>
            <p className="text-xs">Goldstar Shoes , Dell , Samsung , Canon , Oppo , Sony , Nokia , Apple</p>
          </div>
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">Goldstar Shoes , Dell , Samsung , Canon , Oppo , Sony , Nokia , Apple</h6>
            <p className="text-xs">Vivo Y20 , Oppo A12 , Samsung Galaxy M31 , iPhone 12 , Redmi 9A , Poco F3 , Samsung M12 , Oppo F19 Pro , Samsung A32 , Infinix Hot 10 , Samsung A12 , OnePlus Nord 2 , Samsung M62 , Samsung M32 , TVS Ntorq , Poco X3 Pro , Poco C3 , Acer Nitro 5 , Samsung F22 , MI 11 Lite , Gold , Macbook Air , iPad Pro , Lenovo Legion 5 , Acer Aspire 5 , Ideapad 3 , HP Pavilion 15 , Khukri Rum , Micromax In Note 1 , Realme 9i , Realme 9 Pro+ , Gas Geyser , Black Horse , Cactus Toy , Antigen Testkit , PS5 , Electric Scooter , Z Flip 3 , Tab S6 , Tab A8 , Stealth 13</p>
          </div>
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">SHOP WORLDWIDE WITH LAZADA
            </h6>
            <p className="text-xs">Singapore , Malaysia , Philippines , Indonesia , Vietnam , Thailand</p>
          </div>
          <div className="mb-2">
            <h6 className="text-gray-700 text-xs">SHOP WORLDWIDE WITH MIRAVIA
            </h6>
            <p className="text-xs">Spain , Portugal</p>
          </div>
        </div>
      </div>



      <div className="lastfooter grid grid-cols-[2fr_1fr_2fr] pt-10 pb-10">
        <div>
          <h1 className="mb-2">Bazar International
          </h1>
          <div className="flex">
            <img className="w-6 h-6 mr-1" src="https://img.lazcdn.com/us/domino/be86b237-3425-4f99-9177-e0d420ece837_BD-84-84.png" alt="" />
            <p className="mr-1">Pakistan</p>
            <img className="w-6 h-6 mr-1" src="https://img.lazcdn.com/us/domino/b9a34bd0-721d-451b-b828-4575bde3d2b5_BD-84-84.png" alt="" />
            <p className="mr-1">Bangladesh</p>
            <img className="w-6 h-6 mr-1" src="https://img.lazcdn.com/us/domino/2fb836db-3d37-4bb6-92e8-3af677a5503c_BD-84-84.png" alt="" />
            <p className="mr-1">Sri Lanka</p>
            <img className="w-6 h-6 mr-1" src="https://img.lazcdn.com/us/domino/d1af7d07-f74e-44d2-8d27-e2dc6e5ea70c_BD-84-84.png" alt="" />
            <p className="mr-1">Myanmar</p>
            <img className="w-6 h-6 mr-1" src="https://img.lazcdn.com/us/domino/187cdce2-c2da-4b05-a96e-e5b0386c654d_BD-86-86.png" alt="" />
            <p>Nepal</p>
          </div>
        </div>
        <div>
          <h1 className="mb-2 pl-24">Follow Us
          </h1>
          <div className="flex pl-19">
            <img className="w-7 mr-2" src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01Wdetn224xMIRNihao_!!6000000007457-2-tps-34-34.png" alt="" />
            <img className="w-7 mr-2" src="https://img.lazcdn.com/us/domino/cc9e593f-adae-428c-abae-e55953feea31_BD-76-76.png" alt="" />
            <img className="w-7 mr-2" src="https://img.lazcdn.com/us/domino/f65e9f63-e19e-4fa6-bdfd-35158b2e21d8_BD-76-76.png" alt="" />
            <img className="w-7 mr-2" src="https://img.lazcdn.com/us/domino/3f1d2d6a-1d36-4eb4-82ff-1e4511f6d293_BD-75-76.png" alt="" />
          </div>
        </div>

        <div className="flex justify-end ">
          © Bazar 2026
        </div>

      </div>
    </main>
  );
}
