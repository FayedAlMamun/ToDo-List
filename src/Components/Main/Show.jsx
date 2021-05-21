import React from 'react';

const Show = (props) => {
  
    return (
        
            <li>
                {props.read} <button onClick={()=>props.clicked(props.id)}>
                    
                    <span className='btn'>-</span></button>
            </li>
        
    );
};

export default Show;