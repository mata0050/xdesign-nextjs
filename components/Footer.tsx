import Link from 'next/link';

export default function Footer({}) {
  return (
    <div className='bg-lightGrey flex flex-col items-center	md:p-24  py-20 px-10'>
      <h2 className='text-3xl mb-2 text-center'>Starting A New Project?</h2>
      <h3 className='text-xl md:mb-24 font-bold text-silver mb-12'>
        Contact Us
      </h3>

      <p className='lg:w-1/2 text-lg text-center mb-16'>
        If you have an interesting project and would like to see if we are the
        right guys for the job, you can Schedule a Session were we can discuss
        further details free of charge.
      </p>

      <Link href='/contact-us'>
        <a className='px-4 py-2 border-4 rounded-full hover:bg-black hover:text-white'>
          Schedule a Session
        </a>
      </Link>

      <hr className='md:my-20 w-2/6 bg-silver h-1 rounded-full my-16' />

      <div className='flex md:gap-36 mb-16 md:flex-row flex-col gap-10 '>
        <div className='flex flex-col'>
          <h4 className='text-xl font-bold mb-4 md:text-left text-center'>
            Office Hours
          </h4>
          <span className='font-bold text-sm mb-2 md:text-left text-center'>
            Monday : 9:30 AM - 04:00 PM
          </span>
          <span className='font-bold text-sm mb-2 md:text-left text-center'>
            Tuesday : 9:30 AM - 04:00 PM
          </span>
          <span className='font-bold text-sm mb-2 md:text-left text-center'>
            Wednesday : 9:30 AM - 04:00 PM
          </span>
          <span className='font-bold text-sm mb-2 md:text-left text-center'>
            Thursday : 9:30 AM - 04:00 PM
          </span>
          <span className='font-bold text-sm mb-2 md:text-left text-center'>
            Friday : 9:30 AM - 04:00 PM
          </span>
          <span className='font-bold text-sm mb-2 md:text-left text-center'>
            Saturday : 9:30 AM - 12:00 PM
          </span>
        </div>

        <div className='flex flex-col'>
          <h4 className='text-xl font-bold mb-4 md:text-left text-center'>
            Contact Us
          </h4>
          <span className='font-bold text-sm mb-2 md:text-left text-center'>
            info@xdesign.ca
          </span>
          <span className='font-bold text-sm mb-2 md:text-left text-center'>
            Ottawa, Ontario Canada
          </span>
        </div>
      </div>

      <span className='text-sm'>© Copyright – XDesign</span>
      <span className='text-sm'>All rights reserved</span>
    </div>
  );
}
