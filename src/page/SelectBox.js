import React from 'react';
import SelectComponents from '../components/SelectBox'

function selectBox() {
    return (
        <div className="mx-5 mt-5">
            <SelectComponents />
            <hr className="my-8" />
            <SelectComponents />
        </div>
    )
}

export default selectBox;
