export default function Hero({}) {
  return (
    <main className='bg-darkGrey'>
      <div className='flex flex-col items-center flex-wrap lg:flex-row'>
        <img
          className='mt-20 lg:w-1/2 lg:px-0 sm:px-24 px-10'
          src='images/man-working.gif'
          alt='man working on web development projects'
        />

        <div className='lg:w-1/2 text-white sm:px-24 px-10 mb-24 lg:mt-20'>
          <h1 className='xsm:text-5xl font-thin mb-12 text-4xl '>
            Conquer you Web & Mobile Space
          </h1>

          <p className='text-lg leading-8'>
            We at XDesign are passionate about creating websites and user
            interfaces (UI Design). We use all our knowledge to help our clients
            build their brands through interactivity.
          </p>
        </div>
      </div>
    </main>
  );
}
