import React, { Component } from 'react';
import TextBox from '../components/TextBox';
class Textfield extends Component {
    render() {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex mb-4">
                    <div className="w-full">
                        <TextBox />
                        <hr className="my-8" />
                        <TextBox />
                    </div>
                </div>
            </div>

        );
    }
}

export default Textfield;