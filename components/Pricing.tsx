export default function Pricing({}) {
  return (
    <div>
      <h1>Pricing</h1>
      <div className="flex">
        <div className="bg-lightGrey rounded-xl text-center p-6" >
          <h3 className="text-xl font-bold">Simple Website</h3>
          <span>$299.00</span>

          <div>
            <span>3 Page Website</span>
            <span>Contact Form</span>
            <span>Complete Deployment</span>
            <span>No Deployment monthly cost</span>
          </div>

          <button>ORDER NOW</button>
        </div>
      </div>
    </div>
  );
}
