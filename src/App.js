import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import List from './List';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    container: {
        width: 430,
        boxShadow: "1px 0px 5px 0px #4e4e4e"
    },
}));

export default function App() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);
    
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    const classes = useStyles();
    
    const handleChangeTask = (event) => {
        setTask(event.target.value);
    };
    useEffect(() => {
        axios.get(`${axios.defaults.baseURL}`)
        .then(response => {
            setItems(response.data);
        });
    }, [])

    const handleClickAdd = (value) => {
        if (value === "")
            return;

        axios.post(`${axios.defaults.baseURL}`, { 
                value: value, 
                checked: false 
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
                axios.patch(`${axios.defaults.baseURL}/${(item.id)}`, { checked: event.target.checked });
            }
            item.checked = (index == event.target.name) ? event.target.checked : item.checked;
            return item;
        }));
    };

    const handleChangeItems = (event) => {
        setItems(items.map((item, index) => {
            if (index == event.target.name)
                axios.patch(`${axios.defaults.baseURL}/${(item.id)}`, { value: event.target.value });
            item.value = (index == event.target.name) ? event.target.value : item.value;
            return item;
        }));
    };

    const handleClickRemove = (index) => {
        setItems(items.filter((item, ind) => { 
            return !(ind == index && axios.delete(`${axios.defaults.baseURL}/${(item.id)}`));
        }));
    };

    return (
        <div className={classes.container}>
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
                onClick={handleClickRemove} 
            />
        </div>
    );
}