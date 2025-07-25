    import React from "react";
    const Greeting = 
        (props,age,studyin) =>{
        return(
            <div>
                <h1>hello {props.name}</h1>
                <h1> i am {props.age} years old</h1>
                <h1>studying {props.studyin}</h1>
            </div>
        )
    }
    export default Greeting