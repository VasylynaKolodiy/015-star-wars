import React from 'react';
import Skeleton from "@mui/material/Skeleton";

const Scelet = () => {
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  return (
    <div className='skeleton container'>
      {test.map(elem =>
          <Skeleton className='skeleton__inner' variant="rectangular" width='100%' height={300}/>
      )}
    </div>
  );
};

export default Scelet;