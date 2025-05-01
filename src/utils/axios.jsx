import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTVhNmM3YmFkNjQ4MTMzZjNjMmE5YTM5M2VlMWI5ZSIsIm5iZiI6MTc0NjEyODE5NC4yNDQsInN1YiI6IjY4MTNjZDQyNjMxMTcwM2RhYmY0MDQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dIgBa60R3Tozx3zRh8Yie2QL-XlEfEueOZSMR8jkSho",
  },
});

export default instance;



