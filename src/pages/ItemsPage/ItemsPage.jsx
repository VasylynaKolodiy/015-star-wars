import React, {useEffect, useState} from 'react';
import './ItemsPage.scss'
import Loader from "../../components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ItemsList from "../../components/ItemsList/ItemsList";
import {useParams} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ItemListTable from "../../components/ItemListTable/ItemListTable";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SearchAppBar from "../../components/SearchAppBar/SearchAppBar";


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

  //

  let [searchValue, setSearchValue] = useState('');
  function onChangeSearch(event) {
    setSearchValue(event.target.value)
  }

  console.log(searchValue, 'searchValue')

  const isItemsSearchLoading = useSelector((state) => state[itemsName].loading);
  const itemsSearchFull = useSelector((state) => state[itemsName][itemsName+'Search']);
  let getSearchRequest = `GET_${itemsName.toUpperCase()}_SEARCH_REQUEST`

  useEffect(() => {
    dispatch({
      type: getSearchRequest,
      payload: searchValue,
    })
  }, [searchValue])

  //

  const PER_PAGE = 10
  let countOfPages = itemsFull.count && Math.ceil(itemsFull.count / PER_PAGE)

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  }
  let [isTable, setIsTable] = useState(true)
  const handleTableChange = () => {
    setIsTable((prev) => !prev);
  };



  return (
    <main className='items'>
      <div className="top container">
        <BreadCrumbs/>
        <SearchAppBar searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      onChangeSearch={onChangeSearch}/>
        <FormControlLabel className='FormControlLabel'
                          control={<Switch className='switch' color="primary" checked={isTable} onChange={handleTableChange}/>}
                          labelPlacement="start"
                          label={`${isTable ? 'Table Mode' : 'Card Mode'}`}/>
      </div>

      {isItemsLoading
        ? <Loader/>
        : isTable
          ? <ItemsList items={itemsFull.results}
                       itemsName={itemsName}/>
          : <ItemListTable items={itemsFull.results}
                           itemsName={itemsName}/>
      }

      {countOfPages > 1 &&
      <Stack spacing={2}>
        <Pagination count={countOfPages}
                    size="large"
                    page={pageNumber}
                    onChange={handlePageChange}/>
      </Stack>}
    </main>
  );
};

export default ItemsPage;