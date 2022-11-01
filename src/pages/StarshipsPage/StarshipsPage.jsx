import React, {useEffect, useState} from 'react';
import './StarshipsPage.scss'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {useDispatch, useSelector} from "react-redux";
import {GET_STARSHIPS_REQUEST} from "../../actions/starships";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import ItemsList from "../../components/ItemsList/ItemsList";


const StarshipsPage = () => {
  let [pageNumber, setPageNumber] = useState(1)
  const dispatch = useDispatch();
  const isStarshipsLoading = useSelector((state) => state.starships.loading);
  const starshipsFull = useSelector((state) => state.starships.starships);

  useEffect(() => {
    dispatch({
      type: GET_STARSHIPS_REQUEST,
      payload: pageNumber
    })
  }, [pageNumber])

  let countOfPages = starshipsFull.count &&  Math.ceil(starshipsFull.count / 10)
  let pages = Array.from(Array(countOfPages).keys())
console.log(starshipsFull.count, 'starshipsFull.count')
  return (
    <main className='starships'>
      <BreadCrumbs/>
      <Pagination pages={pages}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}/>

      {isStarshipsLoading
        ? <Loader/>
        : <ItemsList items={starshipsFull.results} itemUrl='starships' itemPhoto='starships'/>
      }
    </main>
  );
};

export default StarshipsPage;