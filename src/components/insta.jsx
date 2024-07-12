import React from "react";

import imgg from "../images/imgg.png"

function Insta(){
    return (
        <>
        
        <section class=" pb-8 pt-20 bg-[url('https://wallpaperaccess.com/full/2137189.png')] bg-center bg-cover">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <h1
            class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-white mb-5 md:text-5xl leading-[50px]">
            Learn Concept Of Back-end with 
            <span class="text-yellow-400"> Backend_Js</span>
        </h1>
       

        <h2 class="max-w-2xl mx-auto  text-xl  text-white pb-3">
        I am uploading  here some comprehensive Content about Backend Development. This content covers various aspects, including the role of the backend, key technologies involved, and best practices."
        </h2> 
       
        <a href="https://www.instagram.com/backend_js/"
            class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500">
           Check out
        
        </a>
        <div class="flex justify-center ">
            <img
            src={imgg}
            alt="Dashboard image"
          />
        </div>
    </div>
</section></>
    )
}

export default Insta;