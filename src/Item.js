import React from 'react';
import './Item.scss';

export default function Item(props) {
    return (
        <div className="item">
            <div
                className={(props.item.favorite)?"favorite":"icon"} 
                onClick={() => { props.onClick.Favorite(props.index); }}
            >
            </div>
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
                onClick={() => { props.onClick.Remove(props.index); }}
            >
                X
            </button>
        </div>
    );
}