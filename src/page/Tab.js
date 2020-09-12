import React from 'react';
import Tab from '../components/Tab'
import TabSecond from '../components/Tab'

function TabPage() {
    return (

        <div className="mx-5 mt-5">
            <Tab color="green" />
            <hr className="my-8" />
            <TabSecond color="orange" />
        </div>
    )
}

export default TabPage;
