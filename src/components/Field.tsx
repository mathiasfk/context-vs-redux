import React from 'react';

export const Field = (props:any) => {
    const fieldName: string = props.field;
    const fieldValue: string = props.value;

    return (
        <div className='field-set'>
            <div className='field-name'>{fieldName}:</div>
            <div className='field-value'>{fieldValue}</div>
        </div>
    )
}