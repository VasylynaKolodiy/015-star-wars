import React, {useEffect, useState} from 'react';
import './ActorsPage.scss'
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {GET_ACTORS_REQUEST} from "../../actions/actors";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemsList from "../../components/ItemsList/ItemsList";

const ActorsPage = () => {
  let [pageNumber, setPageNumber] = useState(1)
  const dispatch = useDispatch();
  const isActorsLoading = useSelector((state) => state.actors.loading);
  const actorsFull = useSelector((state) => state.actors.actors);

  useEffect(() => {
    dispatch({
      type: GET_ACTORS_REQUEST,
      payload: pageNumber,
    })
  }, [pageNumber])

  let countOfPages = actorsFull.count &&  Math.ceil(actorsFull.count / 10)
  let pages = Array.from(Array(countOfPages).keys())

  return (
    <main className='actors'>
      <BreadCrumbs/>
      <Pagination pages={pages}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}/>

      {isActorsLoading
        ? <Loader/>
        : <ItemsList items={actorsFull.results} itemUrl='actors' itemPhoto='characters'/>
      }
    </main>
  );
};

export default ActorsPage;