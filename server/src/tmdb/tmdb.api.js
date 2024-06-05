// Import the axiosClient module
import axiosClient from "../axios/axios.client.js";

// Import the tmdbEndpoints module
import tmdbEndpoints from "./tmdb.endpoints.js";

// Define the tmdbApi object
const tmdbApi = {
  // Retrieve a list of media based on type, category, and page
  mediaList: async ({ mediaType, mediaCategory, page }) => await axiosClient.get(
    tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })
  ),

  // Retrieve details of a specific media based on type and ID
  mediaDetail: async ({ mediaType, mediaId }) => await axiosClient.get(
    tmdbEndpoints.mediaDetail({ mediaType, mediaId })
  ),

  // Retrieve genres of a specific media type
  mediaGenres: async ({ mediaType }) => await axiosClient.get(
    tmdbEndpoints.mediaGenres({ mediaType })
  ),

  // Retrieve credits of a specific media based on type and ID
  mediaCredits: async ({ mediaType, mediaId }) => await axiosClient.get(
    tmdbEndpoints.mediaCredits({ mediaType, mediaId })
  ),

  // Retrieve videos of a specific media based on type and ID
  mediaVideos: async ({ mediaType, mediaId }) => await axiosClient.get(
    tmdbEndpoints.mediaVideos({ mediaType, mediaId })
  ),

  // Retrieve images of a specific media based on type and ID
  mediaImages: async ({ mediaType, mediaId }) => await axiosClient.get(
    tmdbEndpoints.mediaImages({ mediaType, mediaId })
  ),

  // Retrieve recommended media of a specific media based on type and ID
  mediaRecommend: async ({ mediaType, mediaId }) => await axiosClient.get(
    tmdbEndpoints.mediaRecommend({ mediaType, mediaId })
  ),

  // Search for media based on type, query, and page
  mediaSearch: async ({ mediaType, query, page }) => await axiosClient.get(
    tmdbEndpoints.mediaSearch({ mediaType, query, page })
  ),

  // Retrieve details of a specific person based on ID
  personDetail: async ({ personId }) => await axiosClient.get(
    tmdbEndpoints.personDetail({ personId })
  ),

  // Retrieve media associated with a specific person based on ID
  personMedias: async ({ personId }) => await axiosClient.get(
    tmdbEndpoints.personMedias({ personId })
  )
};

// Export the tmdbApi object as the default export
export default tmdbApi;