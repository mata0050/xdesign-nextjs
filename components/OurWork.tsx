const workData = [
  {
    id: 4,
    title: 'Covid App',
    workType: ['Web Development', 'Web App'],
    description:
      'The Covid app was created to keep track of covid cases in the province of Ontario. This web app could be downloaded and installed on any smartphone.',
    image: 'images/covid-app.jpg',
  },
  {
    id: 1,
    title: 'Car Dealership',
    workType: ['Web Development', 'Mobile Responsive'],
    description:
      'Re-design WordPress website as the site was slow to load, and information was not organized in a easy-to-digest way.',
    image: 'images/car-dealership.jpg',
  },
  {
    id: 2,
    title: 'Bike Dealership',
    workType: ['Web Development', 'Web App', 'E-Commerce Website'],
    description:
      'Re-Designed the website as the old website we slow and information was in disarray. Customer wanted to sell more bikes online, developed a custom E-Commerce site.',
    image: 'images/bike-dealership.jpg',
  },
];

export default function OurWork({}) {
  return (
    <div
      className='bg-darkGrey sm:p-24  text-white px-10 py-20 lg:my-0 lg:mb-24 my-10'
      id='our-work'
    >
      <h1 className='text-center text-4xl mb-16'>Our Work</h1>

      {workData.map((work) => (
        <div
          className='flex items-center max-w-screen-lg mx-auto lg:flex-row flex-col lg:text-left text-center lg:mb-24 md:mb-16 mb-10'
          key={work.id}
        >
          <div>
            <span className='text-silver font-bold '>LATEST WORK</span>
            <h2 className='py-2 text-2xl font-bold'>{work.title}</h2>

            <div className='flex mb-6 lg:justify-start justify-center gap-2'>
              {work.workType.map((workType) => (
                <span
                  className='bg-lightBrown text-black md:text-sm text-xs py-1 px-2 font-bold '
                  key={workType}
                >
                  {workType}
                </span>
              ))}
            </div>

            <p className='lg:w-5/6 dm:w-6/12 lg:mx-0 mx-auto  '>
              {work.description}
            </p>
          </div>
          <img
            src={work.image}
            alt='Zimbabwe Embassy Website redesign'
            className='lg:w-1/2 lg:mt-0 mt-16'
          />
        </div>
      ))}
    </div>
  );
}
