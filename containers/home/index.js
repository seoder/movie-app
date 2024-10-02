import React from "react";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({ selectedCategory }) {
  return (
    <div>
      {/* Featured Movie */}
      <FeaturedMovie movie={Movies.results[0]} />

      {/* Categories */}
      <Categories categories={Genres.genres.slice(0, 5)} />

      {/* Seçilen Kategoriye Göre Filmler */}
      {!!selectedCategory?.movies?.length && (
        <MoviesSection
          title={
            Genres.genres.find(genre => genre.id === +selectedCategory.id)?.name || "Selected Category"
          }
          movies={selectedCategory.movies}
        />
      )}

      {/* Popüler Filmler */}
      <MoviesSection
        title="Popular Films"
        movies={Movies.results.slice(1, 7)} // name kullanılamaz, tüm dizi veriliyor
      />

      {/* Favori Filmler */}
      <MoviesSection
        title={Genres.genres.find(genre => genre.id === +selectedCategory.id)?.name || "Category"}
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
