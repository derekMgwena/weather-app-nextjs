// Import necessary dependencies
import Image from 'next/image';
import React from 'react';

// Import the spinner image
import spinner from '../public/spinner.gif';

// Create a functional component called "Spinner"
const Spinner = () => {
  // Render the component's content
  return (
    <>
      {/* Display the spinner image using Next.js Image component */}
      {/* Set the class name for styling with tailwind CSS */}
      <Image className='w-[200px] m-auto block' src={spinner} alt='loading..' />
    </>
  );
};

// Export the Spinner component so it can be used in other parts of the application
export default Spinner;
