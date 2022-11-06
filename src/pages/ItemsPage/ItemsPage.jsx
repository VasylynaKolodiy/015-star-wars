import React, {useEffect, useState} from 'react';
import './ItemsPage.scss'
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemsList from "../../components/ItemsList/ItemsList";
import {useParams} from "react-router-dom";

const ItemsPage = () => {

  const params = useParams();
  let items = params.name

  let [pageNumber, setPageNumber] = useState(1)
  const dispatch = useDispatch();
  const isItemsLoading = useSelector((state) => state[items].loading);
  const itemsFull = useSelector((state) => state[items][items]);

  let getRequest = ''
  getRequest = `GET_${items.toUpperCase()}_REQUEST`

  useEffect(() => {
    setPageNumber(1)
  }, [params.name])

  useEffect(() => {
    dispatch({
      type: getRequest,
      payload: pageNumber,
    })
  }, [pageNumber, params.name])

  let countOfPages = itemsFull.count &&  Math.ceil(itemsFull.count / 10)
  let pages = Array.from(Array(countOfPages).keys())

  return (
    <main className='items'>
      <BreadCrumbs/>
      <Pagination pages={pages}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}/>

      {isItemsLoading
        ? <Loader/>
        : <ItemsList items={itemsFull.results}
                     itemUrl={items}
                     itemPhoto={items}/>
      }
    </main>
  );
};

export default ItemsPage;