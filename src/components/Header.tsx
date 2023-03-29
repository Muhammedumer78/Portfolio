import React from 'react';
// images
import Logo from "../../public/ume3.svg";
import Image from 'next/image';
const Header = () => {
  return (
  <header className='py-8 bg-black'>
     <div className='container mx-auto'>
    <div className='flex justify-between items-center'>
    {/* logo */}
    <a href='#'>
<Image src={Logo} alt="ume" height={160} width={160} className="rounded-full" />

    </a>
    {/* Button */}
    <button className='font-bold font-serif btn btn-sm'>Work with me</button>
    </div>
    </div>

  </header>
  );
};

export default Header;
