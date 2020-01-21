import React from 'react';
import './Item.scss';

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
            <span
                className={(props.item.favorite)?"favorite":"icon"} 
                onClick={() => { props.onClick.Favorite(props.index); }}
            >
            </span>
            <button 
                onClick={() => { props.onClick.Remove(props.index); }}
            >
                X
            </button>
        </div>
    );
}