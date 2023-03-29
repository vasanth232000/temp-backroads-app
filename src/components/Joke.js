import React, { useEffect, useState } from "react";
import Axios from "axios";

function Joke() {

    const [joke, setJoke] = useState([]);




    const apiBuild = () => {
        Axios.get("https://api.datamuse.com/words?ml=ringing+in+the+ears").then(
            (response) => {
                setJoke(response.data)
                }
        )
    }

    useEffect(() => {
        apiBuild()
    }, []);  

    const apiData = joke.map((item,index)=>{
        return  <tr key={index}>
        <th>{item.word}</th>
        <th>{item.score}</th>
      </tr>
    })
 

    // let apilength = joke.length;

    return (
        <>
        <table>
            <tbody>
            {apiData}
            </tbody>
            </table>
        
        </>
    );
}

export default Joke;