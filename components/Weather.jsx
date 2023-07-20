// Import necessary dependencies
import Image from 'next/image';
import React from 'react';

// Define the Weather component and receive 'data' as a prop
const Weather = ({ data }) => {
  // Log the 'data' prop to the console (for debugging purposes)
  console.log(data);

  // Render the Weather component's content
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top section */}
      <div className='relative flex justify-between pt-12'>
        {/* Weather icon and description */}
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        {/* Temperature */}
        <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      {/* Bottom section */}
      <div className='bg-black/50 relative p-8 rounded-md'>
        <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
        {/* Information about Feels Like, Humidity, and Winds */}
        <div className='flex justify-between text-center'>
          <div>
            <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className='text-xl'>Feels Like</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
            <p className='text-xl'>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Weather component so it can be used in other parts of the application
export default Weather;
