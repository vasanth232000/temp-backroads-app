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

    const apiData = joke.slice(0,5).map((item,index)=>{
        return  (
                <table key={index} value={index}>
                    <tbody>
                        <tr><td>{item.word}</td>
                        <td>{item.score}</td>
                        {item.tags.map((item,index)=>{
                        return (
                            <td key={index}>{item}</td>
                        )
                    })}</tr>
                    </tbody>
                </table>
        )
    })

 


    return (
        <div className="section-center">
            {apiData}
        </div>
    );
}

export default Joke;