import React from "react";

const Faqs = () => {
  const faqs = [
    {
      question: "How do I use the RideGuide feature?",
      answer:
        "To use the RideGuide feature, enter your preferences such as budget and range. The system will display a list of electric scooters that match your criteria, along with details about each model, including brand, price, and range. You can also get pre-recommendations based on predefined questions.",
    },
    {
      question: "How can I track my delivery?",
      answer:
        "You can track your delivery by entering the tracking ID provided at the time of order into our tracking system. You will receive real-time updates from checkpoint to checkpoint, ensuring you can monitor the progress of your delivery accurately.",
    },
    {
      question: "How can I contact an expert for scooter recommendations?",
      answer:
        "If you need assistance with choosing the right electric scooter, you can contact our experts using the contact numbers provided in the 'Expert Contact' section. They will guide you based on your preferences and requirements.",
    },
    {
      question: "How can I provide feedback on my experience?",
      answer:
        "To provide feedback, simply fill out the feedback form available on our website. Your input is valuable to us and helps improve our services. You can also reach out to our support team via email at nexride.support@example.com.",
    },
  ];

  return (
    <div className="max-w-4xl py-12 mx-12 md:mx-auto">
      <h2 className="text-4xl text-black dark:text-white font-bold mb-10 text-center">
        Questions & Answers
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0 bg-blue-500 text-white  rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3-3 3 3m0 6l-3 3-3-3"
                  />
                </svg>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
