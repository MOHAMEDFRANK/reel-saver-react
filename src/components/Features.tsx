
import React from 'react';
import { Download, Monitor, Star, Shield } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">
          Download Instagram Video and Photo
        </h2>
        
        <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          Downloading videos from Instagram in just two clicks is possible without compromising on quality. Avoid using
          unreliable applications and appreciate the videos, even if they are of lower quality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Fast download feature */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Download className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Fast download</h3>
              <p className="text-gray-700">
                Our servers are optimized to provide you with the fastest download speeds.
              </p>
            </div>
          </div>

          {/* Support for all devices feature */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Monitor className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Support for all devices</h3>
              <p className="text-gray-700">
                Whether you're on a mobile, tablet, or desktop, FastDl has got you covered.
              </p>
            </div>
          </div>

          {/* High quality feature */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Star className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">High quality</h3>
              <p className="text-gray-700">
                Download Instagram content in its original quality without any loss.
              </p>
            </div>
          </div>

          {/* Security feature */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">Security</h3>
              <p className="text-gray-700">
                We prioritize your privacy. No login required and all downloads are processed securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
