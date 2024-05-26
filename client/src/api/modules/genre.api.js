import publicClient from "../client/public.client";

//object holds a function that returns URL strings for specific API endpoints.
const genreEndpoints = {
    list: ({ mediaType }) => `${mediaType}/genres`
};

//Fetches the list of genres for a given mediaType.
const genreApi = {
    getList: async ({ mediaType }) => {
        try {
            const response = await publicClient.get(genreEndpoints.list({ mediaType }));

            return { response };
        } catch (err) { return { err }; }
    }
};

export default genreApi;