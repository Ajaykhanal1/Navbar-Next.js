"use client"; // needed for client-side interactivity (like toggle menu)

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // State to manage the open/close state of the login modal
  const [open, setOpen] = useState(false);

  const [openSignUp, setOpenSignUp] = useState(false);
  // To switch Tab
  const [activeTab, setActiveTab] = useState("password");

  // Add useEffect to handle scroll in model views
  useEffect(() => {
    if (open || openSignUp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open, openSignUp]);

  return (
    <nav className="bg-orange-500 text-white">
      <div className="container mx-auto flex items-center justify-between pr-2">
        <div className="text-xl font-bold">
          <Link href="/"><img src="/image/logo.png" alt="Delivery Bazar Logo" width={100} /></Link>
        </div>


        <div className="bg-white p-1" >
          <form action="">
            <input type="text" placeholder="Search in Bazar" className=" text-black w-80 rounded-lg focus:outline-none focus:ring-0 transition duration-200 p-2" />
            <button className="ml-2" onClick={() => alert("Products Searching")}>
              <FiSearch className="text-orange-800 w-5 h-5 cursor-pointer" />
            </button>
          </form>
        </div>



        <ul className="flex space-x-6 mr-2">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/about">ABOUT</Link></li>
          <li><Link href="/services">SERVICES</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
          <li><button className="cursor-pointer"
            onClick={() => setOpen(true)}>LOGIN
          </button></li>
          <li>
            <button className="cursor-pointer" onClick={() => setOpenSignUp(true)}>SIGN UP</button>
          </li>
        </ul>
      </div>

      {/* Login Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xs z-50 " onClick={() => setOpen(false)} >
          <div className="h-108 w-100 border border-solid border-white rounded-lg bg-white text-black p-5" onClick={(e) => e.stopPropagation()}>

            <div className="flex justify-end mr-4">
              <button className="text-gary-500 cursor-pointer" onClick={() => setOpen(false)}>
                &#x2715;
              </button>
            </div>

            {/* Tabs for Password and Phone Number*/}
            <div className="flex justify-evenly">

              <div onClick={() => setActiveTab('password')}
                style={{
                  cursor: 'pointer',
                  fontWeight: activeTab === 'password' ? 'bold' : 'normal',
                  borderBottom: activeTab === 'password' ? '2px solid orange' : 'none',
                  paddingBottom: '5px'
                }} >
                Password
              </div>


              <div
                onClick={() => setActiveTab('phone')}
                style={{
                  cursor: 'pointer',
                  fontWeight: activeTab === 'phone' ? 'bold' : 'normal',
                  borderBottom: activeTab === 'phone' ? '2px solid orange' : 'none',
                  paddingBottom: '5px'
                }}
              >
                Phone Number
              </div>
            </div>

            <div className="flex flex-row my-3 ">
              {activeTab === 'password' && (
                <form className="w-full gap-4 flex flex-col">

                  <div className=" ">
                    <input className="w-full h-10 p-2 border border-gray-400 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none font-mono placeholder:text-sm" type="text" name="Please enter your Phone or Email" id="" placeholder="Please enter your Phone or Email" />
                  </div>

                  <div className="">
                    <input className=" w-full h-10 p-2 border border-gray-400 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none font-mono placeholder:text-sm" type="password" name="Please enter your Password" id="" placeholder="Please enter your Password" />
                  </div>

                  <div className="flex justify-end text-gray-600">
                    <h5>Forgot Password?</h5>
                  </div>

                  <button className="bg-orange-400 text-white border rounded-lg h-10 font-mono text-lg cursor-pointer">LOGIN</button>
                </form>
              )}

              {/* Phone Form */}
              {activeTab === 'phone' && (
                <form className="w-full gap-4 flex flex-col">
                  <div className="flex gap-2 w-full my-3">
                    <div>
                      <input className="w-19 h-10 pl-2 border border-gray-400 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none font-mono placeholder-gray-950 placeholder:text-sm" type="number" placeholder="🇳🇵+977" disabled />
                    </div>
                    <div className="w-full">
                      <input className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full h-10 p-2 border border-gray-400 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none font-mono placeholder:text-sm" type="number" placeholder="Please enter your phone number" />
                    </div>
                  </div>

                  <button className="flex items-center bg-orange-400 text-white border rounded-lg h-10 font-mono text-lg cursor-pointer " >
                    <img className="w-6 ml-3 mr-13 " src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01a3DUz31SqzLbTfmQ2_!!6000000002299-2-tps-54-54.png" alt="" />
                    <h5>Send code via Whatsapp</h5>
                  </button>

                  <button className="flex items-center bg-orange-400 text-white border rounded-lg h-10 font-mono text-lg cursor-pointer " >
                    <img className="w-7 ml-3 mr-13 " src="https://lzd-img-global.slatic.net/g/tps/i1/O1CN019amlRf1wUwlLW2cmN_!!6000000006312-2-tps-85-85.png" alt="" />
                    <h5>Send code via SMS</h5>
                  </button>
                </form>

              )}
            </div>

            <div className="text-gray-600 flex justify-center gap-1">Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setOpenSignUp(true)}>Sign up</span></div>
            <div className="text-gray-600 flex justify-center mt-10">Or, login with</div>

            <div className="flex justify-center gap-3 mt-1">

              <div className="flex items-center gap-1">
                <img className="w-10" src="https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg" alt="Google" />
                <h5>Google</h5>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-7" src="https://freepnglogo.com/images/all_img/facebook-logo.png" alt="Facebook" />
                <h5>Facebook</h5>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {openSignUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xs z-50 " onClick={() => setOpenSignUp(false)} >
          <div className="h-108 w-100 border border-solid border-white rounded-lg bg-white text-black p-5" onClick={(e) => e.stopPropagation()}>

            <div className="flex justify-end mr-4">
              <button className="text-gary-500 cursor-pointer" onClick={() => setOpenSignUp(false)}>
                &#x2715;
              </button>
            </div>

            <div className="flex justify-evenly font-bold text-lg ">
              <div className="border-b-2 border-orange-400">Sign up</div>

            </div>

            <div className="flex flex-row my-1 ">

              <form className="w-full gap-4 flex flex-col">
                <div className="flex gap-2 w-full my-1">
                  <div>
                    <input className="w-19 h-10 pl-2 border border-gray-400 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none font-mono placeholder-gray-950 placeholder:text-sm" type="number" placeholder="🇳🇵+977" disabled />
                  </div>
                  <div className="w-full">
                    <input required className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full h-10 p-2 border border-gray-400 rounded-lg focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none font-mono placeholder:text-sm" type="number" placeholder="Please enter your phone number" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <input className="h-15 w-10 focus:outline-none" type="checkbox" name="" id="" required /><span className="text-sm mt-4 text-gray-600">By creating and/or using your account, you agree to our <span className="text-blue-600">Terms of Use</span>  and <span className="text-blue-600">Privacy Policy</span>.</span>
                </div>
                <button className="flex items-center bg-orange-400 text-white border rounded-lg h-10 font-mono text-lg cursor-pointer " >
                  <img className="w-6 ml-3 mr-13 " src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01a3DUz31SqzLbTfmQ2_!!6000000002299-2-tps-54-54.png" alt="" />
                  <h5>Send code via Whatsapp</h5>
                </button>
                <button className="flex items-center border border-orange-400 text-orange-400 rounded-lg h-10 font-mono text-lg cursor-pointer " >
                  <img className="w-7 ml-3 mr-13 " src="https://lzd-img-global.slatic.net/g/tps/i1/O1CN019amlRf1wUwlLW2cmN_!!6000000006312-2-tps-85-85.png" alt="" />
                  <h5>Send code via SMS</h5>
                </button>
              </form>


            </div>

            <div className="text-gray-600 flex justify-center gap-1 mt-2">Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => { setOpenSignUp(false); setOpen(true); }}>Log in Now</span></div>
            <div className="text-gray-600 flex justify-center mt-2">Or, login with</div>

            <div className="flex justify-center gap-3 mt-1">

              <div className="flex items-center gap-1">
                <img className="w-10" src="https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg" alt="Google" />
                <h5>Google</h5>
              </div>

              <div className="flex items-center gap-3">
                <img className="w-7" src="https://freepnglogo.com/images/all_img/facebook-logo.png" alt="Facebook" />
                <h5>Facebook</h5>
              </div>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
