import React, {useEffect} from 'react';
import './VehicleDetailPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {GET_VEHICLE_REQUEST} from "../../actions/vehicles";
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const VehicleDetailPage = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const isVehicleLoading = useSelector((state) => state.vehicles.loading);
  const vehicle = useSelector((state) => state.vehicles.vehicle);

  useEffect(() => {
    dispatch({
      type: GET_VEHICLE_REQUEST,
      payload: params.id
    })
  }, [params.id])

  return (
    <main className='vehicle'>
      <BreadCrumbs name={vehicle.name}/>
      {isVehicleLoading
        ? <Loader/>
        : <ItemDetail item={vehicle} itemPhoto='vehicles'/>
      }
    </main>
  );
};

export default VehicleDetailPage;