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
      const data = favMov.map((item) => item?.id);
      setFavMovie(data);
    }
  }, [movies]);

  const setFavDataWhileUnfav = (id) => {
    console.log("Call -------------------------------------------");

    const favData = JSON.parse(localStorage.getItem("favmoviedata"));
    const data = favData.filter((item) => item.id !== id);
    setMovies(data);
  };
  console.log("favMov", favMov);
  return (
    <>
      <div className="flex flex-wrap gap-5 w-[70%] m-auto mt-6">
        {movies.length > 0 &&
          movies.map((item, index) => {
            return (
              <MovieItem
                key={index}
                item={item}
                id={item.id}
                title={item.original_title}
                img={item.poster_path}
                favicon={favicon}
                isFov={true}
                setFavDataWhileUnfav={setFavDataWhileUnfav}
              />
            );
          })}
      </div>
    </>
  );
}
