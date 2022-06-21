import React, { useState } from 'react'
import { TableData } from '../../../utils/constants/mockdata'
import '../../../assests/scss/table.scss'
import TableBody from './TableBody'

const Table =(props:any) => {
    const [tableData, setTableData] = useState([...props.data]);
    const sortData = (field:string)=>{
        const sortedTemp = [...tableData].sort((a,b)=> a[field].toString().localeCompare(b[field].toString()));
        const sortedTableVals = [...tableData].map(v=>v[field]).join();
        const sortedTempVals = [...sortedTemp].map(v=>v[field]).join();
        console.log(sortedTableVals);
        console.log(sortedTempVals);

        
        if(sortedTableVals === sortedTempVals){
            setTableData([...tableData].sort((a,b)=> b[field].toString().localeCompare(a[field].toString())));            
        }else{
            setTableData(sortedTemp);
        }
    }
  return (
    <div className='dynamic-table'>
       <div className="employee-table">
           {props.title && <h1>{props.title}</h1>}
           <table>
               <thead>
                   <tr>
                        {props.headers.map((v:any,key:number)=> 
                        <th key={key} className={`text-${v.align}`}>{v.label}
                         {v.sortable && <button onClick={()=>sortData(v.field)}>sort</button>
                         }</th>)}
                   </tr>
               </thead>
               <tbody>
                   {/* {
                       TableData.map((table, key)=>{
                           return (
                            <TableBody key={key} table={table}/>
                           ) 
                       })
                   } */}
                   {
                       tableData.map((v:any,key2:number)=>(
                           <tr>
                                {props.headers.map((header:any,key3:number)=>(
                                    <td key={key3} className={`text-${header.align}`}>{v[header.field]}</td>
                                ))}
                           </tr>
                       ))
                   }
               </tbody>
           </table>
       </div>
    </div>
  )
}

export default Table;