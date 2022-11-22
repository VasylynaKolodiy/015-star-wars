import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import './SceletonCardMode.scss'

const SceletonCardMode = () => {
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section className='skeleton container'>
      {test.map((elem, i) =>
        <Skeleton className='skeleton__inner' variant="rectangular" width='100%' height={300} key={i}/>
      )}
    </section>
  );
};

export default SceletonCardMode;