import React, { useState } from 'react';
import Show from './Show';
import './main.css'

const Todo = () => {
    const [list, setList] = useState("");
    const [items, setItems] = useState([]);
    const readItem = (e) => {
        setList(e.target.value);
    }
    const clicked = () => {
        if (list !== "") {
            const item = [...items, list];
            setItems(item);
            console.log(items)
            setList("")
        }
    }
    const deleted = (i) => {
        const newitem = items.filter((e, id) => {
            return id !== i;
        })
        console.log(newitem, i)
        setItems(newitem)
    };
    return (
        <div className="div">
            <div className="todo">
                <h3>ToDo List!</h3>
                <input type="text" value={list} onChange={readItem} />
                <button  onClick={clicked}><span className='btn'>+</span></button>
                <ol>
                    {
                        items.map((item, i) => {
                            return <Show
                                key={i}
                                read={item}
                                id={i}
                                clicked={deleted}
                            />;
                        })
                    }
                </ol>
            </div>
        </div>
    );
};

export default Todo;