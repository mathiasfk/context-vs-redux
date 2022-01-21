import React from 'react';
import { Details } from './Details';

export const DetailsBox = (props:any) => {
    return (
        <div className='details-box'>
            <Details user={props.user} updateField={props.updateField}></Details>
        </div>
    )
}