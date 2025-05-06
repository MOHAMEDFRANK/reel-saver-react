
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">
          Frequently asked questions (FAQ)
        </h2>
        
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          This FAQ provides information on frequent questions or concerns about the iGram world downloader. If you can't 
          find the answer to your question, feel free to ask through email on our contact page.
        </p>
        
        <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-lg font-medium">
              What is an Instagram Video Downloader?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700">
              An Instagram Video Downloader is a tool that allows you to save videos, photos, stories, and reels from 
              Instagram to your device. Our tool works by extracting media from public Instagram posts when you provide the URL.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-lg font-medium">
              Which file formats are supported by iGram for downloading purposes?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700">
              iGram supports downloading Instagram content in various formats including MP4 for videos and JPG/PNG for images.
              All downloads maintain the original quality of the content as posted on Instagram.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-lg font-medium">
              Is it legal to download Instagram content?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700">
              Our service is intended for personal use only. Always respect copyright laws and Instagram's Terms of Service.
              Only download content for which you have permission or that is licensed for reuse.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-lg font-medium">
              Do I need an Instagram account to use iGram?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700">
              No, you don't need an Instagram account to use our service. You only need the URL of the public Instagram post
              you want to download.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-lg font-medium">
              Can I download private Instagram content?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700">
              No, our tool can only download content from public Instagram posts. Private content is not accessible through our service
              as it would violate privacy policies.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
