// src/api/fetchAfricanMovies.js

const API_URL = 'https://example.com/api/african-movies'; // Replace with your actual API URL

const fetchAfricanMovies = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch African movies:', error);
    throw error;
  }
};

export default fetchAfricanMovies;
