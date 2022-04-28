
import React, { useState } from "react";


var ids = [];
function Developers(props){

    const [test,setTest] = useState("hello");

    var data = fetch('/api/list/developers/').then((response) => {return response.json()}).then((data) => {return data});
    // ids.push(id);
    // const element = data.map((developer) => 
    //     <div className="developer"> {developer["id"]}</div>
    // );

    function Update(){
        setTest("welcome");
    }


    return (
        <React.Fragment>
            <div className="developers">
                <h1>{test}</h1>
            </div>
            
        </React.Fragment>
    );
}

export default Developers;
