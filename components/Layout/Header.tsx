import React, { useState } from 'react';
import Link from 'next/link';

const Header = ({}) => {
  const [showMobileMenu, setMobileMenu] = useState<boolean>(false);

  const onShowMobileMenu = () => setMobileMenu((preState) => !preState);

  const guestLinks = (
    <>
      <Link href='/'>
        <a className='hover:text-orange' onClick={onShowMobileMenu}>
          Home
        </a>
      </Link>
      <Link href='/#our-work'>
        <a className='hover:text-orange ' onClick={onShowMobileMenu}>
          Our Work
        </a>
      </Link>

      <Link href='/contact-us'>
        <a className='hover:text-orange' onClick={onShowMobileMenu}>
          Contact Us
        </a>
      </Link>
    </>
  );

  return (
    <div className='bg-lightGrey fixed top-0 left-0 right-0'>
      <nav className='relative container mx-auto p-2 '>
        <div className='flex items-center justify-between'>
          <div className='pt-2'>
            <Link href='/'>
              <img src='images/XDesign-logo.svg' alt='XDesign Logo' />
            </Link>
          </div>
          <div className='hidden lg:flex space-x-4'>{guestLinks}</div>

          {/* mobile-hamburger icon */}
          <button
            className={
              showMobileMenu
                ? 'block hamburger lg:hidden focus:outline-none open'
                : 'block hamburger lg:hidden focus:outline-none'
            }
            onClick={onShowMobileMenu}
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>

        {/* mobile menu */}
        <div className='lg:hidden '>
          <div
            id='menu'
            className={
              showMobileMenu
                ? 'absolute flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg rounded-full'
                : 'absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg rounded-full'
            }
          >
            {guestLinks}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
