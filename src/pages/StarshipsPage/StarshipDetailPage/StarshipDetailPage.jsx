import React, {useEffect} from 'react';
import './StarshipDetailPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {GET_STARSHIP_REQUEST} from "../../../actions/starships";
import {useParams} from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import ItemDetail from "../../../components/ItemDetail/ItemDetail";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";

const StarshipDetailPage = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const isStarshipLoading = useSelector((state) => state.starships.loading);
  const starship = useSelector((state) => state.starships.starship);

  useEffect(() => {
    dispatch({
      type: GET_STARSHIP_REQUEST,
      payload: params.id
    })
  }, [params.id])

  return (
    <main className='starship'>
      <BreadCrumbs name={starship.name}/>
      {isStarshipLoading
        ? <Loader/>
        : <ItemDetail item={starship} itemPhoto='starships'/>
      }
    </main>
  );
};

export default StarshipDetailPage;