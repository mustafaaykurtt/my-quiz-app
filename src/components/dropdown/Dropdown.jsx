import React from 'react'
import './Dropdown.css'

const Dropdown = ({ data, setChangeDiffuculty }) => {
    return (
        <div className='dropdown'>
            <select onChange={e => setChangeDiffuculty(e.target.value)}>
                <option value="">Make a choice</option>
                {
                    data.map((dt, i) => (
                        <option key={i} value={dt}>{dt}</option>
                    ))

                }
            </select>

        </div>
    )
} 

export default Dropdown