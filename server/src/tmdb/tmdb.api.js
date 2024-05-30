/* This code snippet is defining an object named `tmdbApi` that contains several asynchronous functions
for interacting with The Movie Database (TMDb) API. Each function corresponds to a specific API
endpoint and performs an HTTP GET request using the `axiosClient` to fetch data from the TMDb API. */
import axiosClient from "../axios/axios.client.js";
import tmdbEndpoints from "./tmdb.endpoints.js";

const tmdbApi = {
    mediaList: async ({ mediaType, mediaCategory, page }) => await axiosClient.get(
        tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })
    ),
    mediaDetail: async ({ mediaType, mediaId }) => await axiosClient.get(
        tmdbEndpoints.mediaDetail({ mediaType, mediaId })
    ),
    mediaGenres: async ({ mediaType }) => await axiosClient.get(
        tmdbEndpoints.mediaGenres({ mediaType })
    ),
    mediaCredits: async ({ mediaType, mediaId }) => await axiosClient.get(
        tmdbEndpoints.mediaCredits({ mediaType, mediaId })
    ),
    mediaVideos: async ({ mediaType, mediaId }) => await axiosClient.get(
        tmdbEndpoints.mediaVideos({ mediaType, mediaId })
    ),
    mediaImages: async ({ mediaType, mediaId }) => await axiosClient.get(
        tmdbEndpoints.mediaImages({ mediaType, mediaId })
    ),
    mediaRecommend: async ({ mediaType, mediaId }) => await axiosClient.get(
        tmdbEndpoints.mediaRecommend({ mediaType, mediaId })
    ),
    mediaSearch: async ({ mediaType, query, page }) => await axiosClient.get(
        tmdbEndpoints.mediaSearch({ mediaType, query, page })
    ),
    personDetail: async ({ personId }) => await axiosClient.get(
        tmdbEndpoints.personDetail({ personId })
    ),
    personMedias: async ({ personId }) => await axiosClient.get(
        tmdbEndpoints.personMedias({ personId })
    )
};

export default tmdbApi;