import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import './SceletonDetail.scss'

const SceletonDetail = () => {
  return (
    <div className='sceleton__detail container'>
      <Skeleton className='skeleton__inner' variant="rectangular" width='100%' height={318}/>
      <div className='sceleton__related'>
        <Skeleton className='skeleton__inner' variant="rectangular" width='32%' height={168}/>
        <Skeleton className='skeleton__inner' variant="rectangular" width='32%' height={168}/>
        <Skeleton className='skeleton__inner' variant="rectangular" width='32%' height={168}/>
      </div>
    </div>
  );
};

export default SceletonDetail;