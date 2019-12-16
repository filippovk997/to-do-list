import React from 'react';
import Item from './Item';

export default function List(props) {
    return (
        <div>
            {props.items.map((item, index) => {
                return (
                    <div key={index}>
                        <Item 
                            index={index}
                            item={item} 
                            onChange={props.onChange} 
                            onClick={props.onClick} 
                        />
                    </div>              
                );
            })}
        </div>
    );
}