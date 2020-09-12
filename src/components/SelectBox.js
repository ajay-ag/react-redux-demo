import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectChange } from '../redux/actions';

class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    inputChange = (e) => {
        this.props.selectChange(e.target.value);
    }
    render() {

        const selectBox = this.props.selectBox;

        return (
            <>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        State
                    </label>
                    <div className="relative">
                        <select
                            value={selectBox}
                            onChange={this.inputChange}
                            className="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="state">
                            <option>Select State</option>
                            <option value="1">New Mexico</option>
                            <option value="2">Missouri</option>
                            <option value="3">Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectBox: state.slectbox,
    }
}

const mapDispatchToProps = {
    selectChange
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectBox);