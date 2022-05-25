export default function Review({}) {
  return (
    <div className='flex'>
      <img src='images/review-image.svg' className="w-6/12" alt='' />

      <div className="pr-24">
        <h3 className="text-3xl mb-4">Reviews</h3>
        <h4 className="text-2xl mb-2 font-bold text-silver">What people say about XDesign.</h4>

        <p className="italic text-lg font-thin mb-10">
          "I have learned some absolutely invaluable information, stuff that I
          would never have even thought about. Mike and Josh have not only built
          my website but l also hired them to help with marketing my business. l
          started my business over a three year ago and he has grown my
          business, we are turning down clients as we can’t accommodate anymore
          clients. lf you are starting a business and need online presents, l
          highly recommend Mike and his team at XDesign. Thanks Mike, for all
          your hard work."
        </p>

        <img
          src='images/vanilla-logo.svg'
          alt='Vanilla Cleaning Logo'
          // className="w-30"
        />
      </div>
    </div>
  );
}
