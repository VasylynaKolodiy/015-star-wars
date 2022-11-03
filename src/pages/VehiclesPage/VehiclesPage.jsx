import React, {useEffect, useState} from 'react';
import './VehiclesPage.scss'
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {GET_VEHICLES_REQUEST} from "../../actions/vehicles";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemsList from "../../components/ItemsList/ItemsList";

const VehiclesPage = () => {
  let [pageNumber, setPageNumber] = useState(1)
  const dispatch = useDispatch();
  const isVehiclesLoading = useSelector((state) => state.vehicles.loading);
  const vehiclesFull = useSelector((state) => state.vehicles.vehicles);

  useEffect(() => {
    dispatch({
      type: GET_VEHICLES_REQUEST,
      payload: pageNumber,
    })
  }, [pageNumber])

  let countOfPages = vehiclesFull.count &&  Math.ceil(vehiclesFull.count / 10)
  let pages = Array.from(Array(countOfPages).keys())

  return (
    <main className='vehicles'>
      <BreadCrumbs/>
      <Pagination pages={pages}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}/>

      {isVehiclesLoading
        ? <Loader/>
        : <ItemsList items={vehiclesFull.results} itemUrl='vehicles' itemPhoto='vehicles'/>
      }
    </main>
  );
};

export default VehiclesPage;