import React from 'react';
import './Item.css';

export default function Item(props) {
    return (
        <div className="item">
            <input className="input-checkbox" type="checkbox"
                name={props.index} 
                checked={props.item.checked} 
                onChange={props.onChange.Checked}
            />
            <input className="input-text" type="text"
                name={props.index} 
                value={props.item.value} 
                onChange={props.onChange.Items}
            />
            <button 
                onClick={() => { props.onClick(props.index); }}
            >
                X
            </button>
        </div>
    );
}