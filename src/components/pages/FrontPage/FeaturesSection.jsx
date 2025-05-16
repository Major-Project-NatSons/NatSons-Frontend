import React from 'react';

const FeaturesSection = () => {
  return (
    <>
      <section className="container mx-auto px-8 md:px-24 py-16 bg-white flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:mr-20">
          <div className="relative w-full lg:w-[450px] h-[300px] rounded-[40px] overflow-hidden shadow-xl">
            <img
              src="/home.jpg"
              alt="Original Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight font-sans">
            Explore Different Design Styles
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Instantly visualize different styles with a single text prompt.
          </p>
          <ul className="space-y-4 text-xl font-medium text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Transition between design styles effortlessly
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Customize elements to create your ideal aesthetic
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Preview design changes instantly for informed decisions
            </li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-8 md:px-24 py-16 bg-white flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight font-sans">
            Ask, Learn and Design with Confidence
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Get expert guidance at your fingertips. Ask questions about materials, costs, and design options— receive informed responses to make confident design decisions.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:mr-20">
          <div className="relative w-full lg:w-[450px] h-[300px] rounded-[40px] overflow-hidden shadow-xl">
            <img
              src="/home.png"
              alt="Original Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
