import React from 'react'
import {ITableData} from "../../../utils/Interface/Interfaces"


interface ITableBodyProps {
    table: ITableData
}

export default function TableBody({table}:ITableBodyProps) {
  return (
    <tr>
        <td>{table.name}</td>
        <td>{table.age}</td>
        <td>{table.gender}</td>
        <td>{table.designation}</td>
    </tr>
  )
}
