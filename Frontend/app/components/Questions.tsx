"use client"
import React, { useState } from 'react';

export default function Questions() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);
  // Add more state variables for additional questions as needed

  return (
    <div className='text-gray-800 w-[375px] h-[1100px] md:w-[768px] md:h-[830px] lg:h-[750px] lg:w-[1440px] flex items-center justify-center flex-col px-6 mt-4 relative lg:pb-10'>
      <h1 className='text-[30px] text-center font-bold '>
        Frequently asked questions        
      </h1>
      <p className='text-gray-500 lg:text-[16px] md:text-[16px] text-[14px] lg:mt-2 lg:mx-60 md:px-12 text-center'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
      </p>
      <div className="mt-8 w-full lg:px-8 md:px-2">
        
        <div className="border border-gray-200 rounded-md overflow-hidden">
         
          <div className="py-6 px-6 border-b border-gray-200">
         
                <button className="flex justify-between w-full" onClick={() => setShowAnswer1(!showAnswer1)}>
                <div className="text-gray-800 font-semibold flex flex-col text-[18px]">Authentication issues
                
                </div>
                
                {/* New text added here */}
                <span className="text-blue-500 hover:bg-blue-50 px-2 py-1 text-[12px]">New</span>
                </button>
                {showAnswer1 && <p className="text-gray-600 mt-2">Answer to question 1.</p>}
            </div>
            <div className="py-6 px-6 border-b border-gray-200">
            <button className="flex items-center justify-between w-full" onClick={() => setShowAnswer2(!showAnswer2)}>
                <h3 className="text-gray-800 font-semibold text-[15px]">Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.</h3>
                <div className="flex items-center">
                <span className="text-gray-500 text-[15px] mr-2 cursor-pointer" onClick={() => setShowAnswer2(!showAnswer2)}>
                    Updated last week
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${showAnswer2 ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </div>
            </button>
            {showAnswer2 && <p className="text-gray-600 mt-2">Answer to question 2.</p>}
            </div>

          <div className="py-6 px-6 border-b border-gray-200">
            <button className="flex items-center justify-between w-full" onClick={() => setShowAnswer3(!showAnswer3)}>
              <h3 className="text-gray-800 font-semibold text-[15px]">Cras vitae, scelerisque tortor augue.</h3>
              <div className="flex items-center">
                <span className="text-gray-500 text-[15px] mr-2 cursor-pointer" onClick={() => setShowAnswer2(!showAnswer2)}>
                    Updated today
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${showAnswer3 ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              </div>
            </button>
            {showAnswer3 && <p className="text-gray-600 mt-2">Answer to question 3.</p>}
          </div>
          <div className="py-6 px-6 border-b border-gray-200">
            <button className="flex items-center justify-between w-full" onClick={() => setShowAnswer4(!showAnswer4)}>
              <h3 className="text-gray-800 font-semibold text-[15px]">Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.</h3>
              <div className="flex items-center">
                <span className="text-gray-500 text-[15px] mr-2 cursor-pointer" onClick={() => setShowAnswer2(!showAnswer2)}>
                    Updated 2 days ago
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${showAnswer3 ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              </div>
              
            </button>
            {showAnswer4 && <p className="text-gray-600 mt-2">Answer to question 2.</p>}
          </div>
          <div className="py-6 px-6 border-b border-gray-200">
            <button className="flex items-center justify-between w-full" onClick={() => setShowAnswer5(!showAnswer5)}>
              <h3 className="text-gray-800 font-semibold text-[15px]">Pretium ultricies donec non mollis senectus lectus libero tellus.</h3>
              <div className="flex items-center">
                <span className="text-gray-500 text-[15px] mr-2 cursor-pointer" onClick={() => setShowAnswer2(!showAnswer2)}>
                    Updated 3 days ago
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${showAnswer3 ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              </div>
            </button>
            {showAnswer5 && <p className="text-gray-600 mt-2">Answer to question 2.</p>}
          </div>
          <div className="py-6 px-6 border-b border-gray-200">
            <button className="flex items-center justify-between w-full" onClick={() => setShowAnswer6(!showAnswer6)}>
              <h3 className="text-gray-800 font-semibold text-[15px]">Elit massa amet aenean ultrices vitae placerat augue.</h3>
              <div className="flex items-center">
                <span className="text-gray-500 text-[15px] mr-2 cursor-pointer" onClick={() => setShowAnswer2(!showAnswer2)}>
                    Updated 4 days ago
                </span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${showAnswer3 ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              </div>
            </button>
            {showAnswer6 && <p className="text-gray-600 mt-2">Answer to question 2.</p>}
          </div>
          {/* Add more questions and answers as needed */}
        </div>
      </div>
    </div>
  );
}
