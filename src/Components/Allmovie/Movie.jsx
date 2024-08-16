/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "../Movie/MovieItem";

export default function Movie() {
  const [moviedata, setMoviedata] = useState([]);
  const [loading, setLoding] = useState(false);
  const [favMov, setFavMovie] = useState(
    JSON.parse(localStorage.getItem("favmoviedata")) ?? []
  );
  const [page, setPage] = useState(1);
  const [Searchtext, setSearchText] = useState("");
  const [filtermoive, setFiltermoive] = useState([]);
  const [filter, setFilter] = useState(false);

  console.log(favMov);

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTYwZmE3YTNlMTFjYWFiZTQ4ZjE4Y2Y3ZGQzN2ZlNyIsIm5iZiI6MTcyMjkyMjI1Ny41NDEyNDYsInN1YiI6IjY2MGQzMjMyMzNhMzc2MDE3ZDgyNDJlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RaTSTvSEFUOSFx5pEjzMyHUv-6oyASpbg5msATo1N7Y",
    },
  };

  const MovieFatch = async () => {
    setLoding(true);
    try {
      const response = await axios.request(options);
      console.log("response", response);
      setMoviedata(response.data.results);
      setLoding(false);
    } catch (error) {
      console.log("error", error);
      setLoding(false);
    }
  };

  const searchhandler = (e) => {
    setSearchText(e.target.value);
    if (e.target.value !== "") {
      const filterdata = moviedata.filter((item) =>
        item.original_title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFiltermoive(filterdata);
      setFilter(filterdata.length === 0);
    } else {
      setFiltermoive(moviedata);
    }
  };

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextbtn = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    MovieFatch();
    if (favMov) {
      const favMovData = favMov.map((item) => item.id);
      setFavMovie(favMovData);
    }
  }, [page]);

  useEffect(() => {
    setFiltermoive(moviedata);
  }, [moviedata]);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <>
            <div className="w-64 mt-2 m-auto ">
              <input
                type="text"
                name="search"
                value={Searchtext}
                className="py-2 px-10 rounded-md ring-1"
                placeholder="Search "
                onChange={searchhandler}
              />
            </div>
            {!filter ? (
              <div className="flex flex-wrap gap-5 w-[70%] m-auto mt-6">
                {(filtermoive.length > 0 ? filtermoive : moviedata).map(
                  (item, index) => {
                    // console.log("isfav", favMov.includes(item?.id));
                    return (
                      <MovieItem
                        key={index}
                        item={item}
                        id={item?.id}
                        MovieFatch={MovieFatch}
                        moviedata={moviedata}
                        title={item.original_title}
                        img={item.poster_path}
                        isFov={favMov.includes(item?.id)}
                      />
                    );
                  }
                )}
                <div className="items-center m-auto flex gap-3 mb-6">
                  <button
                    disabled={page === 1}
                    className="py-2 px-5 rounded-md bg-blue-600 text-white ring-1 hover:bg-blue-950"
                    onClick={previous}
                  >
                    Prev
                  </button>
                  <button
                    className="py-2 px-5 rounded-md bg-blue-600 text-white ring-1 hover:bg-blue-950"
                    onClick={nextbtn}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-lg w-36 m-auto text-red-500 mt-10">
                Movie not found
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}
