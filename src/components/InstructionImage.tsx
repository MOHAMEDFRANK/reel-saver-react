
import React from 'react';

const InstructionImage = () => {
  return (
    <div className="relative border-4 border-gray-200 rounded-lg p-2 bg-white">
      <div className="rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="text-sm text-gray-400">@nickname</div>
          </div>
          <div className="text-gray-400">⋯</div>
        </div>
        <div className="aspect-square bg-gradient-to-b from-pink-200 to-purple-200 flex items-center justify-center">
          <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
        </div>
        
        <div className="absolute top-1/3 right-0 transform translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Copy link</span>
            <div className="relative w-10 h-10">
              {/* Cursor pointer with hand icon */}
              <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z" fill="white"/>
                  <path d="M18 15V25M22 20H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionImage;
