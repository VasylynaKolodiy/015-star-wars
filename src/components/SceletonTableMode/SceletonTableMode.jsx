import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import './SceletonTableMode.scss'

const SceletonTableMode = () => {
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  return (
    <section className='sceleton__table container'>
      {test.map((elem, i) =>
        <Skeleton className='skeleton__inner' variant="rectangular" width='100%' height='10%' key={i}/>
      )}
    </section>
  );
};

export default SceletonTableMode;