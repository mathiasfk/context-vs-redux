import React from 'react';
import { useDispatch } from 'react-redux';

export const Details = () => {

    const dispatch = useDispatch();

    return (
        <div className='details'>
            <div>
                <input type="button" onClick={() => dispatch({type: 'counter/incremented'})} value="+"></input>
                <input type="button" onClick={() => dispatch({type: 'counter/decremented'})} value="-"></input>
            </div>
        </div>
    )
}