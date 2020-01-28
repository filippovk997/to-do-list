import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from './../Header';
import List from './../List';
import './Main.scss';

export default function Main() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);
    
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    
    const handleChangeTask = (event) => {
        setTask(event.target.value);
    };
    useEffect(() => {
        axios.get(`${axios.defaults.baseURL}`)
        .then(response => {
            setItems(response.data);
        });
    }, []);

    const handleClickAdd = (value) => {
        if (value === "")
            return;

        axios.post(`${axios.defaults.baseURL}`, { 
                value: value, 
                checked: false,
                favorite: false 
            })
            .then(response => {
                setItems(items.concat(response.data));
            });

        setTask("");
    };

    const handleKeyPressEnter = (event) => {
        if (event.key === "Enter")
            handleClickAdd(event.target.value);
    };

    const handleChangeChecked = (event) => {
        setItems(items.map((item, index) => {
            if (index == event.target.name) {
                axios.patch(`${axios.defaults.baseURL}/${(item.id)}`, {checked: event.target.checked, favorite: false });
            }
            item.checked = (index == event.target.name) ? event.target.checked : item.checked;
            return item;
        }));
    };

    const handleChangeItems = (event) => {
        setItems(items.map((item, index) => {
            if (index == event.target.name) {
                axios.patch(`${axios.defaults.baseURL}/${(item.id)}`, { value: event.target.value });
            }
            item.value = (index == event.target.name) ? event.target.value : item.value;
            return item;
        }));
    };

    const handleClickFavorite = (index) => {
        setItems(items.map((item, ind) => {
            if (index == ind) {
                axios.patch(`${axios.defaults.baseURL}/${(item.id)}`, { favorite: !item.favorite });
                console.log(axios.get(`${axios.defaults.baseURL}/${(item.id)}`));
            }
            item.favorite = (index == ind) ? !item.favorite : item.favorite;
            return item;
        }));
        console.log(items);
    };

    const handleClickRemove = (index) => {
        setItems(items.filter((item, ind) => { 
            return !(ind == index && axios.delete(`${axios.defaults.baseURL}/${(item.id)}`));
        }));
    };

    return (
        <div className="main">
            <Header 
                task={task} 
                onChange={handleChangeTask} 
                onClick={handleClickAdd} 
                onKeyPress={handleKeyPressEnter} 
                autoFocus={true} 
            />
            <List 
                items={items} 
                onChange={{Checked: handleChangeChecked, Items: handleChangeItems}} 
                onClick={{Favorite: handleClickFavorite, Remove: handleClickRemove}}
            />
        </div>
    );
}