import React from 'react';
import Item from './Item';
import './List.scss';

export default function List(props) {
    return (
        <div className="list">
            {props.items.map((item, index) => {
                if (item.checked == false && item.favorite == true) {
                    return (
                        <div key={index}>
                            <Item 
                                index={`${index}`}
                                item={item} 
                                onChange={props.onChange} 
                                onClick={props.onClick} 
                            />
                        </div>              
                    );
                }
            })}
            {props.items.map((item, index) => {
                if (item.checked == false && item.favorite == false) {
                    return (
                        <div key={index}>
                            <Item 
                                index={`${index}`}
                                item={item} 
                                onChange={props.onChange} 
                                onClick={props.onClick} 
                            />
                        </div>              
                    );
                }
            })}
        </div>
    );
}