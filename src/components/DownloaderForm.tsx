
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Paste, Download } from 'lucide-react';
import TabButton from './TabButton';
import { Film, Image, History, PlaySquare, Tv } from 'lucide-react';
import { toast } from 'sonner';

const contentTypes = [
  { id: 'video', label: 'Video', icon: Film },
  { id: 'photo', label: 'Photo', icon: Image },
  { id: 'story', label: 'Story', icon: History },
  { id: 'reels', label: 'Reels', icon: PlaySquare },
  { id: 'igtv', label: 'IGTV', icon: Tv },
];

const DownloaderForm = () => {
  const [url, setUrl] = useState('');
  const [activeTab, setActiveTab] = useState('video');
  const [isLoading, setIsLoading] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      toast.success('URL pasted successfully');
    } catch (error) {
      toast.error('Failed to read clipboard. Please paste the URL manually.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast.error('Please enter an Instagram URL');
      return;
    }
    
    if (!url.includes('instagram.com')) {
      toast.error('Please enter a valid Instagram URL');
      return;
    }

    setIsLoading(true);
    
    // Simulate download process
    setTimeout(() => {
      toast.success('Download started successfully!');
      setIsLoading(false);
      // In a real app, we would initiate the actual download here
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {contentTypes.map((type) => (
          <TabButton
            key={type.id}
            icon={type.icon}
            label={type.label}
            isActive={activeTab === type.id}
            onClick={() => setActiveTab(type.id)}
          />
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
        Instagram Downloader
      </h1>
      
      <p className="text-white text-center mb-8 text-lg">
        Download Video, Reels, Photo, IGTV, carousel from Instagram
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl flex flex-col md:flex-row gap-2">
        <Input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Insert instagram link here"
          className="flex-1 border-none text-gray-700"
        />
        <div className="flex gap-2">
          <Button 
            type="button" 
            onClick={handlePaste} 
            variant="outline" 
            className="whitespace-nowrap"
          >
            <Paste className="mr-2 h-4 w-4" /> Paste
          </Button>
          <Button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 whitespace-nowrap"
            disabled={isLoading}
          >
            <Download className="mr-2 h-4 w-4" /> 
            {isLoading ? 'Downloading...' : 'Download'}
          </Button>
        </div>
      </form>

      <div className="mt-8 bg-white/80 rounded-lg p-6 text-center text-gray-500 text-sm">
        <p>Ads by Google</p>
        <div className="flex justify-center mt-4 gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
            Stop seeing this ad
          </button>
          <button className="text-gray-600 px-4 py-2 rounded text-sm flex items-center">
            Why this ad? ⓘ
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloaderForm;
