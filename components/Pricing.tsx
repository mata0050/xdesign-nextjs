import Link from 'next/link';
import { BsCheckAll } from 'react-icons/bs';

const priceList = [
  {
    id: 1,
    title: 'Simple Website',
    price: '$299.99',
    included: [
      '3 Page Website',
      'Contact Form',
      'Mobile Responsive',
      'Complete Deployment',
      'No Deployment monthly cost',
    ],
  },
  {
    id: 2,
    title: 'Small Business Website',
    price: '$799.99',
    included: [
      '10 Page Website',
      'Admin Panel /CMS',
      'Contact Form',
      'Mobile Responsive',
      'Complete Deployment',
    ],
  },
  {
    id: 3,
    title: 'Custom Business Website',
    price: '$2999.99',
    included: [
      '25 Page Website',
      'Admin Panel /CMS',
      'Contact Form',
      'Mobile Responsive',
      'Complete Deployment',
    ],
  },
];

export default function Pricing({}) {
  return (
    <div className='bg-lightGrey '>
      <h1 className='text-4xl font-bold text-center py-12'>Pricing</h1>
      <div className='flex p-6 gap-12 flex-col md:flex-row flex-wrap lg:flex-nowrap '>
        {priceList.map((price) => (
          <div className='rounded-xl  bg-white  p-6 md:w-1/3 ' key={price.id}>
            <h3 className='text-xl font-bold text-center'>{price.title}</h3>
            <span className='flex items-center justify-center text-center block mt-4 text-4xl font-thin'>
              <span className='text-xs mr-2'>starting</span>
              {price.price}
            </span>

            <ul className='my-6 sm:mt-10 md:w-full w-64 mx-auto '>
              {price.included.map((includes) => (
                <li className='flex flex-row ' key={includes}>
                  <BsCheckAll />
                  <span className='pl-4'>{includes}</span>
                </li>
              ))}
            </ul>

            <Link href='/contact-us'>
              <a className='bg-lightGrey py-2 px-4 mt-12 rounded-full w-36 uppercase mx-auto block hover:bg-black hover:text-white'>
                Order Now
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
