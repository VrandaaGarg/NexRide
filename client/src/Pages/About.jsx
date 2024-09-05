import React from "react";

function About() {
  return (
    <div className=" pt-28 md:px-16 flex flex-col gap-6 pb-24 dark:bg-gray-900 dark:text-gray-300">
      <div className="grid place-content-center">
        <div className="">
          <h1 className="text-center font-bold pb-3 text-5xl">About Us</h1>
        </div>
        <div className="h-1 flex justify-center w-40 bg-blue-500 rounded-xl"></div>
      </div>
      <div className="">
        <h1 className="text-2xl">
          <h1 className="text-5xl font-bold">
            Welcome to NexRide Discover NexRide!
          </h1>
          <br /> Your ultimate solution for electric 2-wheeler delivery
          logistics. Our platform is designed to address key challenges in the
          industry by providing a comprehensive app that ensures efficient,
          transparent, and secure delivery processes. From real-time tracking to
          expert consultations, NexRide offers everything you need to enhance
          your electric scooter experience.
        </h1>
      </div>
      <div className="flex flex-col gap-14">
        <h1 className="text-5xl font-bold">Features</h1>
        <div className="">
          <h1 className="text-3xl font-bold mb-3">Delivery Tracking</h1>
          <ul className="text-2xl">
            <li>
              <b>Real-Time Updates:</b> Our system provides instant
              notifications as your electric scooter moves through each
              checkpoint. This feature keeps you informed and reduces
              uncertainty during the delivery process.
            </li>
            <li>
              <b>Tracking ID:</b> With a unique tracking ID, you can easily
              monitor the status and location of your delivery. Just enter the
              ID into our tracking field for up-to-date information.
            </li>
          </ul>
          <div className="flex justify-center">
            <img src="/driverTrack.png" className="h-60" alt="" />
          </div>
        </div>

        <div className="">
          <h1 className="text-3xl font-bold mb-3">RideGuide</h1>
          <ul className="text-2xl">
            <li>
              <b>Model Search:</b> Find your ideal electric scooter by exploring
              various models. Our comprehensive database includes details on
              brands, prices, and ranges.
            </li>
            <li>
              <b>Filters:</b> Customize your search with filters to match your
              budget and range requirements. This helps you quickly identify the
              best options that suit your needs.
            </li>
            <li>
              <b> Recommendations:</b> Answer a few predefined questions to
              receive personalized recommendations based on your preferences and
              requirements.
            </li>
          </ul>
        </div>
        <div className="text-2xl">
          <h1 className="text-3xl font-bold mb-3">Expert Consultation</h1>
          <b className="text-2xl">Contact Experts:</b> For users who need
          additional guidance, we offer direct access to industry experts. Get
          personalized advice on selecting the right electric scooter based on
          your needs and preferences.
          <div className="flex justify-center">
            <img src="/ExperAdvice.png" className="h-60" alt="" />
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl font-bold mb-3"> About Us</h1>
        <p className="text-2xl">
          Who We Are NexRide is dedicated to transforming electric 2-wheeler
          delivery logistics. Our mission is to tackle inefficiencies, enhance
          transparency, and improve security in the industry. By leveraging
          cutting-edge technology, we aim to deliver a seamless and
          user-friendly experience for our customers.
        </p>
      </div>
      <div className="mt-9 mb-10">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-2xl">
          Get in Touch Have questions or need support? We're here to help!
        </p>
        <ul className="text-xl">
          <li>
            <b>Email:</b> support@nexride.com – Reach out to our support team
            for assistance with any issues or inquiries.
          </li>
          <li>
            <b>Phone:</b> +123-456-7890 – Call us for immediate support during
            business hours.
          </li>
          <li>
            <b> Address:</b> 123 Electric Lane, Green City, EC 45678 – Visit our
            office or send us mail.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
