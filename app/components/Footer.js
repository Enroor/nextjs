'use client';

import React from 'react';
import Image from 'next/image';
import Next from '@/public/next.svg';
import Tailwind from '@/public/tailwind.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center mt-auto py-6 border-t border-gray-200">
      <p className="text-sm text-gray-600">Proyecto realizado con:</p>
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <Image src={Next} alt="Next.js Logo" width={120} height={120} className='hover:invert-50 md:w-[170px] md:h-[170px]'/>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Tailwind} alt="Tailwind CSS Logo" width={120} height={120} className='hover:invert-50 md:w-[170px] md:h-[170px]'/>
        </div>
      </div>
      <p className="text-xs text-gray-500">
        &copy; Quique Rodríguez 2025
      </p>
    </footer>
  );
};

export default Footer;
