/* eslint-disable no-unused-vars */
import MovieItem from "./Movie/MovieItem";
import { useEffect, useState } from "react";

const getlocaldata = () => {
  const data = localStorage.getItem("favmoviedata");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function Favmovie() {
  const [movies, setMovies] = useState(getlocaldata());
  const [favicon, setFavicon] = useState(false);
  const [favMov, setFavMovie] = useState(
    JSON.parse(localStorage.getItem("favmoviedata")) ?? []
  );

  useEffect(() => {
    if (favMov) {
      const data = favMov.map((item) => item.id);
      setFavMovie(data);
    }
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-5 w-[70%] m-auto mt-6">
        {movies.map((item, index) => (
          <MovieItem
            key={index}
            item={item}
            id={item.id}
            title={item.original_title}
            img={item.poster_path}
            favicon={favicon}
            isFov={favMov.includes(item.id)}
          />
        ))}
      </div>
    </>
  );
}
