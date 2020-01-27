import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './CompletedTasks.scss';

export default function CompletedTasks() {
    const [items, setItems] = useState([]);

    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        axios.get(`${axios.defaults.baseURL}`)
        .then(response => {
            setItems(response.data);
        });
    }, []);

    const handleChangeChecked = (event) => {
        setItems(items.map((item, index) => {
            if (index == event.target.name) {
                axios.patch(`${axios.defaults.baseURL}/${(item.id)}`, { checked: event.target.checked });
            }
            item.checked = (index == event.target.name) ? event.target.checked : item.checked;
            return item;
        }));
    };

    const handleClickRemove = (index) => {
        setItems(items.filter((item, ind) => { 
            return !(ind == index && axios.delete(`${axios.defaults.baseURL}/${(item.id)}`));
        }));
    };

    return (
        <div className="completed-tasks">
            <ul>
                {items.map((item, index) => {
                    if (item.checked)
                    return (
                        <div className="item">
                        <input className="input-checkbox" type="checkbox"
                            name={index} 
                            checked={item.checked} 
                            onChange={handleChangeChecked}
                        />
                        <input className="input-text" type="text"
                            name={index} 
                            value={item.value} 
                            disabled
                        />
                        <button 
                            onClick={() => { handleClickRemove(index) }}
                        >
                            X
                        </button>
                    </div>
                    )
                })}
            </ul>
        </div>
    );
}