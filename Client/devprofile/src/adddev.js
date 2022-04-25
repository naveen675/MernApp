import React from 'react';

import {useNavigate} from 'react-router-dom';

function AddDev() {

    const navigate  = useNavigate();
  return (
    <React.Fragment>
      <button id="addDev" onClick={() => navigate("/form")}>
        Add developer Info
      </button>
    </React.Fragment>
  );
}

export default AddDev;