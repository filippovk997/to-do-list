import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <div className="header">
            <input
                type="text"
                placeholder="Tasks"
                value={props.task} 
                onChange={props.onChange} 
                onKeyPress={props.onKeyPress} 
                autoFocus={props.autoFocus} 
            />
            <button
                onClick={() => { props.onClick(props.task); }}
            >
                ADD
            </button>
        </div>
    );
}