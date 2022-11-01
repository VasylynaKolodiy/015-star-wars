import React, {useEffect} from 'react';
import './ActorDetailPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {GET_ACTOR_REQUEST} from "../../actions/actors";
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const ActorDetailPage = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const isActorLoading = useSelector((state) => state.actors.loading);
  const actor = useSelector((state) => state.actors.actor);

  useEffect(() => {
    dispatch({
      type: GET_ACTOR_REQUEST,
      payload: params.id
    })
  }, [params.id])

  return (
    <main className='actor'>
      <BreadCrumbs name={actor.name}/>

      {isActorLoading
        ? <Loader/>
        : <div className="actor__container container">

          <div className="actor__wrapper">
            <img className='actor__photo'
                 src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                 alt={`${actor.name} photo`}/>
          </div>

          <div className="actor__info">
            {Object.keys(actor).map((key, index) =>
              <p className='actor__text' key={index}>
                <span>{key.charAt(0).toUpperCase()}{key.slice(1).replaceAll('_', ' ')}:</span> {actor[key]}
              </p>
            )}
          </div>
        </div>
      }
    </main>
  );
};

export default ActorDetailPage;