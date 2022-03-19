import React from 'react';
import {useState} from 'react';

const Count = () => {

const [count, setCount] = useState(0) 
// setCount('Hero hello')

// console.log(count)
const minus =()=>setCount(count -1)



const plus=()=>setCount(count + 1)
    return (
        <div>
            <div className='count mt-5'>
                <h1>{count}</h1>
            </div>
            <a onClick={plus} className=" btn btn-primary ms-3 p-3"> +</a>
            <a onClick={minus} className="btn btn-primary ms-3 p-3">-</a>
        </div>
    );
};

export default Count;