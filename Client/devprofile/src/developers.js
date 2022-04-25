import React from "react";


function Developers(props){

    var ids = props.ids;
    const element = ids.map((id) => 
        <div className="developer"> {id}</div>
    );




    return (
        <React.Fragment>
            <div className="developers">
                {element}
            </div>
            
        </React.Fragment>
    );
}

export default Developers;