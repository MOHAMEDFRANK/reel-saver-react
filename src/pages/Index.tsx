
import React from 'react';
import Header from '@/components/Header';
import DownloaderForm from '@/components/DownloaderForm';
import HowTo from '@/components/HowTo';
import Features from '@/components/Features';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-igram py-16 px-4">
          <DownloaderForm />
        </section>
        
        <Features />
        <HowTo />
      </main>
      
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} iGram - Instagram Downloader</p>
        <p className="text-sm text-gray-400 mt-2">
          This tool is for educational purposes only. Please respect Instagram's Terms of Service.
        </p>
      </footer>
    </div>
  );
};

export default Index;
