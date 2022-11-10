import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import './SimpleZoom.scss'



const SimpleZoom = ({isTable, setIsTable}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    setIsTable(!isTable)
  };

  return (

      <FormControlLabel
        className='FormControlLabel'
        control={<Switch checked={checked} onChange={handleChange} />}
      />

  );
};

export default SimpleZoom;