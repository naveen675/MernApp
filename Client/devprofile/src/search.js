import searchicon from './Images/search-24px.svg';
import React from 'react';

function Image(props) {
  const src = props.src;
  const alt = props.alt;
  const id = props.id;
  return <img id={id} src={src} alt={alt} />;
}

function Input(props) {
  var id = props.id;
  var type = props.type;
  var placeholder = props.placeholder;

  return <input type={type} id={id} placeholder={placeholder} />;
}

function Search(props) {
  return (
    <div className="search">
      <Input id={props.id} type={props.type} placeholder={props.placeholder} />
      <button id="searchbutton">
        <Image src={searchicon} id="searchicon" />
      </button>
    </div>
  );
}

export default Search;