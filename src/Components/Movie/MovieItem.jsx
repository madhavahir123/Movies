/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addfavmovie, removefavmovie } from "../../store/Slices/UserSlice";

import { useNavigate } from "react-router-dom";

export default function MovieItem(props) {
  const [fav, setFav] = useState(props.isFov);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favtoggal = () => {
    if (fav) {
      setFav(false);
      dispatch(removefavmovie(props.item.id));
    } else {
      setFav(true);
      dispatch(addfavmovie(props.item));
    }
  };

  const detailhandler = (id) => {
    navigate(`/MovieDetail/${id}`);
  };

  return (
    <>
      <div className="w-[234px] shadow-purple-300 rounded-sm text-center ring-1 ring-purple-300 shadow-xl mb-8 font-medium text-xl  overflow-hidden scale-100 hover:ring-purple-500  hover:scale-105">
        <MdFavoriteBorder
          onClick={favtoggal}
          className={
            !fav
              ? "absolute bg-white p-2 rounded-full text-[35px] m-2 "
              : "absolute bg-red-700 p-2 rounded-full text-[35px] m-2"
          }
        />

        <img
          onClick={() => detailhandler(props.item.id)}
          src={`https://image.tmdb.org/t/p/w500${props.img}`}
          className="w-full"
        />

        <h3 className="">{props.title}</h3>
      </div>
    </>
  );
}
