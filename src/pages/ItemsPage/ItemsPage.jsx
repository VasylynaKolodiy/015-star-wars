import React, {useEffect, useState} from 'react';
import './ItemsPage.scss'
import Loader from "../../components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemsList from "../../components/ItemsList/ItemsList";
import {useParams} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SimpleZoom from "../../components/SimpleZoom/SimpleZoom";
import ItemListTable from "../../components/ItemListTable/ItemListTable";


const ItemsPage = () => {

  const params = useParams();
  let itemsName = params.name
  let [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const isItemsLoading = useSelector((state) => state[itemsName].loading);
  const itemsFull = useSelector((state) => state[itemsName][itemsName]);

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

  const PER_PAGE = 10
  let countOfPages = itemsFull.count && Math.ceil(itemsFull.count / PER_PAGE)

  const handleChange = (event, value) => {
    setPageNumber(value);
  }

  let [isTable, setIsTable] = useState(true)

  return (
    <main className='items'>
      <div className="top container">
        <BreadCrumbs/>
        <SimpleZoom isTable={isTable} setIsTable={setIsTable}/>
      </div>


      {isItemsLoading
        ? <Loader/>
        : isTable
          ? <ItemsList items={itemsFull.results}
                       itemUrl={itemsName}
                       itemPhoto={itemsName}/>
          : <ItemListTable items={itemsFull.results}
                           itemUrl={itemsName}
                           itemPhoto={itemsName}/>
      }

      {countOfPages > 1 &&
      <Stack spacing={2}>
        <Pagination count={countOfPages}
                    size="large"
                    page={pageNumber}
                    onChange={handleChange}/>
      </Stack>}
    </main>
  );
};

export default ItemsPage;