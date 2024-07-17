import React from "react"

function Heading({prop}){
    return (
        <>
        
       
<div>

<div className="flex mb-2 w-full items-center justify-center bg-black">
    <span className="absolute  flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
    I'm Kunal
  </span>
    <h1
        className="  bg-gradient-to-r  from-cyan-500 via-yellow-500  to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        I'm Kunal
    </h1>
</div>
<p className=" p-2 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">B.Tech student with experience in JS, HTML, CSS, Graphic designing, gaming and programming languages like C and C++. Passionate about using technology to enhance user experience and solve real-world problems. Enthusiastic about exploring new technologies and ideas to stay ahead in the fast-paced tech industry.</p>
<a href="https://www.linkedin.com/in/kunal-1a4983228/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    About Me !
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>
</div>
       
</>
    )

} 
export default Heading;