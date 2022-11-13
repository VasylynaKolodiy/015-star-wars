import React from 'react';
import './ItemsList.scss'
import {Link} from "react-router-dom";
import noImage from '../../assets/img/Items/no-photo.jpg'
import CardItem from "../../pages/HomePage/CardItem/CardItem";
import Skeleton from "@mui/material/Skeleton";

const ItemsList = ({items, itemsName}) => {

  return (
    <section className='items__list container'>
      {items?.map((item, i) =>

        <CardItem
          imageUrl={`https://starwars-visualguide.com/assets/img/${itemsName}/${item.url.replace(/[^0-9]/g, '')}.jpg`}
          link={`/${itemsName}/${item.url.replace(/[^0-9]/g, '')}`}
          title={item.name || item.title}
          key={i}/>
      )}
    </section>
  );
};

export default ItemsList;