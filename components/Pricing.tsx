import Link from 'next/link';
import { BsCheckAll } from 'react-icons/bs';

const priceList = [
  {
    id: 1,
    title: 'Simple Website',
    price: '$699.99',
    description:
      'Static websites are examples of simple websites. This is a static website that you are viewing. Static sites do not allow users to log in.',
    included: [
      'Contact Form',
      'Mobile Responsive',
      'Complete Deployment',
      'No Deployment monthly cost',
    ],
  },
  {
    id: 2,
    title: 'Web App',
    price: '$1499.99',
    description:
      'A Web Application is a website that requires all users to sign in. Ecommerce websites, social networking websites such as Instagram are examples of Web Apps.',
    included: [
      'Admin Panel /CMS',
      'Contact Form',
      'Mobile Responsive',
      'Database Backup',
      'Complete Deployment',
    ],
  },
  {
    id: 3,
    title: 'Business Web App',
    price: '$3999.99',
    description:
      'A Web Application is a website that requires all users to sign in. Ecommerce websites, social networking websites such as Instagram are examples of Web Apps.',

    included: [
      'Admin Panel /CMS',
      'Contact Form',
      'Mobile Responsive',
      'Database Backup',
      'Manage Database',
      'Complete Deployment',
    ],
  },
];

export default function Pricing({}) {
  return (
    <div className='bg-lightGrey pt-12 ' id='pricing'>
      <h1 className='text-4xl font-bold text-center py-12 '>Pricing</h1>

      <p className='mb-6 w-4/6 mx-auto'>
        All of our websites are one-of-a-kind. We don't use wordpress templates
        since we understand that our clients want to be different. We create the
        website according to your specifications.
      </p>
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
            <p className='mt-6 text-sm'>{price.description}</p>

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
