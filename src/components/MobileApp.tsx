
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileApp = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="border border-pink-200 rounded-xl p-6 bg-gradient-to-r from-purple-50 to-pink-50 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/a6137f48-41e6-475f-8ddf-99e2e6bf210c.png" 
              alt="Instagram downloader mobile app" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-purple-800">
              Download Video from Instagram with mobile app
            </h2>
            <p className="text-gray-700">
              Download any photos, videos, reels, IGTV in one click! Our app provides fast, high-resolution 
              downloads without watermarks, making it an ideal choice for downloading Instagram content.
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white py-6 px-8 rounded-md text-lg mt-4 w-full md:w-auto">
              <Download size={20} />
              Install now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
