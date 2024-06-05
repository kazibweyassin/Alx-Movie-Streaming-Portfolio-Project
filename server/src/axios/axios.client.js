// Import the axios library
import axios from "axios";

// Define a function to make a GET request
const get = async (url) => {
  // Send a GET request using axios
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      "Accept-Encoding": "identity"
    }
  });
  // Return the response data
  return response.data;
};

// Export the get function as the default export
export default { get };