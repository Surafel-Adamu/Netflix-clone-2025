const API_KEY = import.meta.env.VITE_API_KEY;;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, // 213 is the id for Netflix
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, // 28 is the id for Action
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // 35 is the id for Comedy
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, // 27 is the id for Horror
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, // 10749 is the id for Romance
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // 99 is the id for Documentaries
    fetchTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
}
export default requests;