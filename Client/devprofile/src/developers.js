
import React, { useState } from "react";


var ids = [];
function Developers(props){


    var data = fetch('/api/list/developers/').then((response) => {return response.json()}).then((data) => {return data});
    console.log(data["Prototype"]);
    // ids.push(id);
    // const element = data.map((developer) => 
    //     <div className="developer"> {developer["id"]}</div>
    // );




    return (
        <React.Fragment>
            <div className="developers">
                <h1>hello</h1>
            </div>
            
        </React.Fragment>
    );
}

export default Developers;