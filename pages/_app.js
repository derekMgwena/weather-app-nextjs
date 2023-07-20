// Import the global styles defined in 'globals.css'
import '../styles/globals.css'

// Define the MyApp component, which serves as the main entry point of the application
function MyApp({ Component, pageProps }) {
  // Render the Component with the received pageProps
  return <Component {...pageProps} />
}

// Export the MyApp component so it can be used as the main layout for the entire application
export default MyApp;
