import React, { useState,useEffect} from 'react'
import { tableData } from '../data'

const Table = () => {

    const [count,setCount] = useState([]);

    let tableValues = JSON.stringify(tableData);
    localStorage.setItem("table",tableValues);
    let updatedTable = localStorage.getItem("table")
    updatedTable = JSON.parse(updatedTable);

    const demo = () =>{
        setCount(updatedTable);
    }

    const handleDelete = (index,e) =>{
        setCount(count.filter((i) => i.id !== index))
        let changeLocal = updatedTable.filter((i) => i.id !== index);
        changeLocal = JSON.stringify(changeLocal);
        localStorage.setItem("newtable",changeLocal);
    }

     useEffect(() => {
        demo()
    },[]); 
    

  return (
    <div className="section-center section table">
        <table>
            <tbody>
                {count.map((item,index)=>{
                    return <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.desg}</td>
                        <td><button value={item.id} onClick={e => handleDelete(item.id,e)}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Table