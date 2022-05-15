import React, { useState } from 'react'
import './History.scss'

export default function History() {
    const [selected, setSelected] = useState('status')
  return (
    <div >
        <div className="header">
        <p onClick={()=>setSelected('status')} className={selected === 'status' ? 'selected' : 'not_selected'}>status History</p>
       <p onClick={()=>setSelected('modification')} className={selected === 'modification' ? 'selected ' : 'not_selected border_end'}> Modification History</p>
        </div>
       <div className="status_history">
       <table className="status_table">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>staff</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>alex</p></td>
                  <td><p>1</p></td>
                  <td><p>November 22 2021 11:12 AM</p></td>
                </tr>
              </tbody>
            </table>
           </div>

    </div>
  )
}
