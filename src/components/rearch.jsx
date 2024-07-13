import React from 'react';


function Research({ prop, col, text, resourse, val }) {
  return (
    <>
      <div className={` p-3 border-4 border-solid border-slate-900  flex flex-row flex-wrap justify-center backdrop-blur-sm mt-5 h{ w-full   `}>
        <div className=" lg:text-center text-center pt-5 text-3xl font-bold  flex flex-wrap text-yellow-200"> <h1 className=' lg:p-5 lg:text-center'>

          {text}
        </h1>
        </div>

        <div className={`  flex flex-col ${prop} lg:flex-row md:flex-row `}>

          <div className='  mt-4 pb-5 pt-5 '>
            <img className='    border-4 border-solid border-cyan-500 ' height={500} width={500} src={resourse}></img>
          </div>
          <div className='  mr-10 content-center justify-center pl-20'>

            <p className=" max-w-lg text-xl v font-semibold leading-normal text-white">{val}</p>

          </div>
        </div>

      </div>
    </>
  );
}

export default Research;
