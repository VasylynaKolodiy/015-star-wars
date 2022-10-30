import React, {useEffect, useState} from 'react';
import './ActorsPage.scss'
import Loader from "../../components/Loader/Loader";
import Pagination from "./Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {GET_ACTORS_REQUEST} from "../../actions/actors";
import ActorsList from "./ActorsList/ActorsList";

const ActorsPage = () => {

  let [pageNumber, setPageNumber] = useState(1)
  let pages = Array.from(Array(9).keys())
  const dispatch = useDispatch();

  const isActorsLoading = useSelector((state) => state.actors.loading);
  const actors = useSelector((state) => state.actors.actors);

  useEffect(() => {
    dispatch({
      type: GET_ACTORS_REQUEST,
      payload: pageNumber
    })
  }, [pageNumber])


  return (
    <main className='actors'>
      <Pagination pages={pages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      {isActorsLoading
        ? <Loader/>
        : <ActorsList actors={actors}/>
      }
    </main>
  );
};

export default ActorsPage;