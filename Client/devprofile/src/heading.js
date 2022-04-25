import React from 'react';
// import devimage from "./Images/undraw_dev_productivity_umsq 1.png";

function Heading(props) {
  const content = props.content;
  const id = props.id;
  return (
    <React.Fragment>
      <h3 id={id}>{content}</h3>
      {/* <img id={'developerImg'} src={devimage} alt={'developer'} /> */}
    </React.Fragment>
  );
}

export default Heading;