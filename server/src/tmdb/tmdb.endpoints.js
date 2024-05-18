import tmdbConfig from "./tmdb.config";

const tmdbEndpoints = {
    MediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, { page }),
    MediaDetails: ({ mediaType, mediaId }) => tmdbConfig.getUrl(`${mediaType}/${mediaId}`, {}),
    MediaGenres: ({ mediaType }) => tmdbConfig.getUrl(`genre/${mediaType}/list`, {}),
    MediaCredits: ({ mediaType, mediaId }) => tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`, {}),
    MediaVideos: ({ mediaType, mediaId }) => tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`, {}),
    MediaRecommend: ({ mediaType, mediaId }) => tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`, {}),
    MediaImages: ({ mediaType, mediaId }) => tmdbConfig.getUrl(`${mediaType}/${mediaId}/images`, {}),
    MediaSearch: ({ mediaType, query, page }) => tmdbConfig.getUrl(`search/${mediaType}`, { query, page }),
    PersonDetail: ({ personId }) => tmdbConfig.getUrl(`person/${personId}`, {}),
    PersonMedias: ({ personId }) => tmdbConfig.getUrl(`person/${personId}/combined_credits`, {}),
}; 

export default tmdbEndpoints;
