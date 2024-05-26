import axiosClient from '../axios/axios.client.js';
import tmdbEndpoints from './tmdb.endpoints.js';

const tmdbApi = {
    MediaList: async ({ mediaType, mediaCategory, page }) =>  await axiosClient.get(tmdbEndpoints.MediaList({ mediaType, mediaCategory, page })),
    MediaDetails: async ({ mediaType, mediaId }) => await axiosClient.get(tmdbEndpoints.MediaDetails({ mediaType, mediaId })),
    MediaGenres: async ({ mediaType }) => await axiosClient.get(tmdbEndpoints.MediaGenres({ mediaType })),
    MediaCredits: async ({ mediaType, mediaId }) => await axiosClient.get(tmdbEndpoints.MediaCredits({ mediaType, mediaId })),
    MediaVideos: async ({ mediaType, mediaId }) => await axiosClient.get(tmdbEndpoints.MediaVideos({ mediaType, mediaId })),
    MediaImages: async ({ mediaType, mediaId }) => await axiosClient.get(tmdbEndpoints.MediaImages({ mediaType, mediaId })),
    MediaRecommend: async ({ mediaType, mediaId }) => await axiosClient.get(tmdbEndpoints.MediaRecommend({ mediaType, mediaId })),
    MediaSearch: async ({ mediaType, query, page }) => await axiosClient.get(tmdbEndpoints.MediaSearch({ mediaType, query, page })),
    PersonDetail: async ({ personId }) => await axiosClient.get(tmdbEndpoints.PersonDetail({ personId })),
    PersonMedias: async ({ personId }) => await axiosClient.get(tmdbEndpoints.PersonMedias({ personId })),

};

export default tmdbApi;