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
  let itemsName = params.name
  let [pageNumber, setPageNumber] = useState(1)
  const dispatch = useDispatch();
  const isItemsLoading = useSelector((state) => state[itemsName].loading);
  const itemsFull = useSelector((state) => state[itemsName][itemsName]);

  console.log(itemsFull, 'itemsFull')
  let getRequest = `GET_${itemsName.toUpperCase()}_REQUEST`

  useEffect(() => {
    setPageNumber(1)
  }, [params.name])

  useEffect(() => {
    dispatch({
      type: getRequest,
      payload: pageNumber,
    })
  }, [pageNumber, params.name])

  let countOfPages = itemsFull.count && Math.ceil(itemsFull.count / 10)
  let pages = Array.from(Array(countOfPages).keys())


  return (
    <main className='items'>
      <div className="top container">
        <BreadCrumbs/>

        {pages.length > 1
        && <Pagination pages={pages}
                       pageNumber={pageNumber}
                       setPageNumber={setPageNumber}/>}

      </div>


      {isItemsLoading
        ? <Loader/>
        : <ItemsList items={itemsFull.results}
                     itemUrl={itemsName}
                     itemPhoto={itemsName}/>
      }
    </main>
  );
};

export default ItemsPage;