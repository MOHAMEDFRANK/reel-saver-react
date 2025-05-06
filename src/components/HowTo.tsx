
import React from 'react';
import Image from '../components/InstructionImage';

const HowTo = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-700 text-center mb-12">
          HOW TO DOWNLOAD VIDEO FROM INSTAGRAM?
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-start gap-4">
              <div className="bg-pink-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Copy the URL</h3>
                <p className="text-gray-700">
                  To get started, access either the Instagram app or website and retrieve the link to the specific video, 
                  reels, carousel, or IGTV content that you want to download.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
