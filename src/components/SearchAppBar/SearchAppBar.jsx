import * as React from 'react';
import {DebounceInput} from "react-debounce-input";
import searchIcon from '../../assets/img/HomePage/search.png'
import './SearchAppBar.scss'

const SearchAppBar = ({searchValue, onChangeSearch}) => {
  return (
    <div className='search'>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        placeholder='Search...'
        value={searchValue}
        onChange={(event) => onChangeSearch(event)}/>
      <div className='search__iconWrapper'>
        <img className='search__icon' src={searchIcon} alt=''/>
      </div>
    </div>
  );
};

export default SearchAppBar;