import React from 'react';

export default function Item(props) {
    return (
        <div>
            <input 
                type="checkbox" 
                name={props.index} 
                checked={props.item.checked} 
                onChange={props.onChange.Checked}
            />
            <input 
                type="text" 
                name={props.index} 
                value={props.item.value} 
                onChange={props.onChange.Items}
            />
            <button onClick={() => { props.onClick(props.index); }}>&times;</button>
        </div>
    );
}