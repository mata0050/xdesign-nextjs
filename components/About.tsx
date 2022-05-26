export default function About({}) {
  return (
    <div className='sm:p-24 px-10 sm:mt-0 mt-20'>
      <h2 className='text-4xl font-medium mb-12'>
        We Build Websites, Mobile Apps and more !
      </h2>

      <div className='flex lg:flex-nowrap flex-wrap gap-6'>
        <div className='lg:border-r-2 lg:border-black pr-6 '>
          <h4 className='text-2xl mb-4 '>Websites</h4>
          <p className='md:text-lg font-thin lg:mb-0 mb-6'>
            Your brand is unique, so each project is unique. Everything is done
            according to your needs and taking into account your communication
            strategy.
          </p>
        </div>

        <div className='lg:border-r-2 lg:border-black pr-6 '>
          <h4 className='text-2xl mb-4 '>Responsive</h4>
          <p className='md:text-lg font-thin lg:mb-0 mb-6 '>
            We think mobile first, so our sites are responsive to ensure easy
            reading and navigation on tablets and smartphones, plus computers.
          </p>
        </div>

        <div>
          <h4 className='text-2xl mb-4 '>Deployment</h4>
          <p className='md:text-lg font-thin'>
          We'll be ready to deploy your website once our team has finished developing and testing it. 
          </p>
        </div>
      </div>
    </div>
  );
}
