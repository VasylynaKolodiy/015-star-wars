import React from 'react';
import './ItemDetail.scss'
import {useParams} from "react-router-dom";
import ItemRelatedBlock from "../ItemRelatedBlock/ItemRelatedBlock";
import ItemInfoBlock from "../ItemInfoBlock/ItemInfoBlock";

const ItemDetail = ({item, itemPhoto}) => {
  let noShow = ['created', 'edited', 'url']
  let titles = ['films', 'species', 'vehicles', 'starships', 'characters', 'residents', 'planets', 'people', 'pilots']

  const params = useParams();
  return (
    <section>
      <ItemInfoBlock item={item} titles={titles} itemPhoto={itemPhoto} noShow={noShow} params={params} />
      <ItemRelatedBlock item={item} titles={titles} />
    </section>
  );
};

export default ItemDetail;