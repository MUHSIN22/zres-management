import React from 'react'
import './cashflow.scss'
export default function Table({cashFlow}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Opening</th>
                    <th>Closing</th>
                    <th>Difference</th>
                </tr>
            </thead>
            <tbody>
                {
                    cashFlow[0] ? cashFlow.map((item, index) => (
                        <tr key={index}>
                            <td>{new Date(item.BDate).toLocaleDateString()}</td>
                            <td>{item.OpeningBalance}</td>
                            <td>{item.ClosingBalance}</td>
                            <td>{item.BDifference}</td>
                        </tr>
                    )) : "No data found"
                }
            </tbody>
        </table>
    )
}
