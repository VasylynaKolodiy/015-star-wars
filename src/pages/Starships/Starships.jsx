import React, {useEffect, useState} from 'react';
import './Starships.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {useDispatch, useSelector} from "react-redux";
import {GET_STARSHIPS_REQUEST} from "../../actions/starships";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import StarshipsList from "./StarshipsList/StarshipsList";


const Starships = () => {
  let [pageNumber, setPageNumber] = useState(1)
  let pages = Array.from(Array(4).keys())
  const dispatch = useDispatch();

  const isStarshipsLoading = useSelector((state) => state.starships.loading);
  const starships = useSelector((state) => state.starships.starships);

  useEffect(() => {
    dispatch({
      type: GET_STARSHIPS_REQUEST,
      payload: pageNumber
    })
  }, [pageNumber])
  console.log(starships)
  
  return (
    <main className='starships'>
      <BreadCrumbs/>
      <Pagination pages={pages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      {isStarshipsLoading
        ? <Loader/>
        : <StarshipsList starships={starships}/>
      }
    </main>
  );
};

export default Starships;