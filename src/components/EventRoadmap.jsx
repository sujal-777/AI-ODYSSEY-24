import React from 'react';

const EventRoadmap = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Event Roadmap</h2>
        <p className="text-gray-600">
          Here's a timeline of events leading up to the launch of our product.
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-2xl">
        <div className="w-10/12 border-2 border-gray-300 rounded-xl p-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-3" />
            <p className="text-lg font-medium">Event 1: Research</p>
          </div>
          <p className="text-gray-600">
            We conducted market research to identify the needs and pain points of our target audience.
          </p>
        </div>

        <div className="w-10/12 border-2 border-gray-300 rounded-xl p-6 mt-6">
          <div className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded-full mr-3" />
            <p className="text-lg font-medium">Event 2: Development</p>
          </div>
          <p className="text-gray-600">
            Our development team began building the product based on the insights we gained from our research.
          </p>
        </div>

        <div className="w-10/12 border-2 border-gray-300 rounded-xl p-6 mt-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3" />
            <p className="text-lg font-medium">Event 3: Testing</p>
          </div>
          <p className="text-gray-600">
            We conducted extensive testing to ensure the product was stable and user-friendly.
          </p>
        </div>

        <div className="w-10/12 border-2 border-gray-300 rounded-xl p-6 mt-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-3" />
            <p className="text-lg font-medium">Event 4: Launch</p>
          </div>
          <p className="text-gray-600">
            We launched the product to the public and began accepting new users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventRoadmap;