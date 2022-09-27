const key = '005ef83a83b8618381f6925c6b07aa1b'

const requests = {
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
    requestMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=9648`,
    requestSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
    requestWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=37`,
    requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16`,
    requestTV: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10770`,
    

}

export default requests