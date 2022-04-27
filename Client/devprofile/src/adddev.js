import React, { useState } from 'react';
import Form from './form';

import {useNavigate} from 'react-router-dom';



function form(){
  return (
        <Form/>
  )
}

function AddDev(props) {

  
  const [displayForm,setDisplayForm] = useState(0);
  const navigate  = useNavigate();
  return (
    <React.Fragment>
      <button id="addDev" onClick={() => {setDisplayForm(1)}}>
        Add developer Info
      </button>
      {displayForm>0 && <Form />}
    </React.Fragment>
  );
}

export default AddDev;