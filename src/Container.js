import React, { useState, useEffect } from 'react';
import Header from './Header';
import List from './List';

export default function Container() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);

    const handleChangeTask = (event) => {
        setTask(event.target.value);
    };

    const handleClickAdd = (value) => {
        if (value === "")
            return;
        setItems(items.concat({ value: value, checked: false }));
        setTask("");
    };

    const handleKeyPressEnter = (event) => {
        if (event.key === "Enter")
            handleClickAdd(event.target.value);
    };

    const handleChangeChecked = (event) => {
        setItems(items.map((item, index) => {
            item.checked = (index == event.target.name) ? event.target.checked : item.checked;
            return item;
        }));
    };

    const handleChangeItems = (event) => {
        setItems(items.map((item, index) => {
            item.value = (index == event.target.name) ? event.target.value : item.value;
            return item;
        }));
    };

    const handleClickRemove = (index) => {
        setItems(items.filter((item, ind) => ind != index));
    };

    return (
        <div>
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