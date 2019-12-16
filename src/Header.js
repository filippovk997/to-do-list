import React from 'react';

export default function Header(props) {
    return (
        <div>
            <input 
                type="text" 
                value={props.task} 
                onChange={props.onChange} 
                onKeyPress={props.onKeyPress} 
                autoFocus={props.autoFocus} 
            />
            <button onClick={() => { props.onClick(props.task); }}>Add</button>
        </div>
    );
}