import React, {useEffect, useState} from 'react';
import './ItemsPage.scss'
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
import SceletonCardMode from "../../components/SceletonCardMode/SceletonCardMode";
import SceletonTableMode from "../../components/SceletonTableMode/SceletonTableMode";

const ItemsPage = () => {

  const params = useParams();
  let itemsName = params.name
  let [pageNumber, setPageNumber] = useState(1);
  let [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const isItemsLoading = useSelector((state) => state[itemsName].loading);
  const itemsFull = useSelector((state) => state[itemsName][itemsName]);
  let getRequest = `GET_${itemsName.toUpperCase()}_REQUEST`;

  useEffect(() => {
    dispatch({
      type: getRequest,
      payload: {
        pageNumber: pageNumber,
        searchValue: searchValue,
      }
    })
  }, [searchValue, pageNumber, params.name])

  useEffect(() => {
    setPageNumber(1)
    setSearchValue('')
  }, [params.name])

  function onChangeSearch(event) {
    setSearchValue(event.target.value)
    setPageNumber(1)
  }

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
                      onChangeSearch={onChangeSearch}/>


        <FormControlLabel className='FormControlLabel'
                          control={<Switch className='switch' color="primary" checked={isTable}
                                           onChange={handleTableChange}/>}
                          labelPlacement="start"
                          label={`${isTable ? 'Table Mode' : 'Card Mode'}`}/>
      </div>


      {isItemsLoading
        ? isTable
          ? <SceletonCardMode/>
          : <SceletonTableMode/>
        : itemsFull.results?.length > 0
          ? isTable
            ? <ItemsList items={itemsFull.results} itemsName={itemsName}/>
            : <ItemListTable items={itemsFull.results} itemsName={itemsName}/>
          : <h2 className='container'>No results {params.name} for your search </h2>
      }

      {countOfPages > 1 &&
      <Stack spacing={2}>
        <Pagination
          count={countOfPages}
          size="large"
          page={pageNumber}
          onChange={handlePageChange}
        />
      </Stack>}
    </main>
  );
};

export default ItemsPage;