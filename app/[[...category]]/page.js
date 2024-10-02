import React from "react";
import HomeContainer from "@/containers/home";
import Movies from '@/mocks/movies.json';
const API_URL='https://api.themoviedb.org/3'
const getPopulerMovies =async () =>{
const rest = await fetch(`${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`);
return res.json();


}

function HomePage({ params }) {
  let selectedCategory = false; // Başlangıç değeri false olarak ayarlayın

    if (params?.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <HomeContainer
      selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;
