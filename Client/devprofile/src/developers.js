import React from "react";


var ids = [];
function Developers(props){

    
    var id = props.id;
    ids.push(id);
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