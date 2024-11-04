import axios from "axios"


const MOVIE_API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2NlM2ZlOGU5M2FjODM5OTAzYjAxNTE3YmZiNDlhMSIsIm5iZiI6MTcyODQ0MTYyMi4wODQ1NjMsInN1YiI6IjY3MDVkZjgzMzczYjFiZTBlMGU5ZTA0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m3K7vTtHS9dvY7M1LJG0AbAuUcX_dxYCP_6KfH3Bz5w";


export const movieInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${MOVIE_API_TOKEN}`
        },
        responseType:"json",

});