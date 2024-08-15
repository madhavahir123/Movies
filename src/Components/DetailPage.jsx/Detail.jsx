import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [demovie, setDemovie] = useState({});

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTYwZmE3YTNlMTFjYWFiZTQ4ZjE4Y2Y3ZGQzN2ZlNyIsIm5iZiI6MTcyMjkyMjI1Ny41NDEyNDYsInN1YiI6IjY2MGQzMjMyMzNhMzc2MDE3ZDgyNDJlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RaTSTvSEFUOSFx5pEjzMyHUv-6oyASpbg5msATo1N7Y",
    },
  };

  const MovieFatch = async () => {
    try {
      const response = await axios.request(options);
      console.log("response", response);
      setData(response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const moviedetails = () => {
    console.log(data, "data");
    console.log(params.movieDetailid, "detasil");
    const movie = data.filter((item) => item.id == params.movieDetailid);
    console.log("movie ====>", movie);

    setDemovie(movie[0]);
  };
  useEffect(() => {
    MovieFatch();
  }, []);
  useEffect(() => {
    moviedetails();
  }, [data]);

  //   console.log(data);
  console.log("demovie ====>", demovie);

  return (
    <>
      {demovie ? (
        <div className="relative bg-black">
          <img
            className="w-full opacity-[0.6]"
            src={`https://image.tmdb.org/t/p/w500${demovie.backdrop_path}`}
          />
          <div className="flex m-10 absolute top-7 gap-7 text-white-500">
            <div className="w-fit">
              <img
                className="w-fit"
                src={`https://image.tmdb.org/t/p/w500${demovie.poster_path}`}
                alt="movieimg"
              />
            </div>
            <div className="text-white">
              <h1 className="text-4xl">{demovie.title}</h1>
              <h3 className="text-2xl mt-4 underline">OverView</h3>
              <p className="mt-1">{demovie.overview}</p>
              <h3 className="text-2xl mt-4 underline">Release Date</h3>
              <p className="">{demovie.release_date}</p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
}

export default Detail;
