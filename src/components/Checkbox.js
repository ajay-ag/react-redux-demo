import React, { Component } from "react";
import { connect } from 'react-redux'
import { checkboxChange } from '../redux/actions';

class Checkbox extends Component {

    onChangeCheckBox(event, id) {

        if (event.target.checked) {
            this.props.checkboxChange(this.props.checkedValue.concat(id));
        } else {
            let index = this.props.checkedValue.indexOf(id);
            let options = this.props.checkedValue.slice(0, index).concat(this.props.checkedValue.slice(index + 1));
            this.props.checkboxChange(options);
        }

    }

    render() {
        return (
            <>
                <label className="inline-flex items-center mt-3 px-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" value="1" onChange={(e) => this.onChangeCheckBox(e, '1')} checked={this.props.checkedValue.indexOf('1') !== -1} /><span className="ml-2 text-gray-700">label 1</span>
                </label>
                <label className="inline-flex items-center mt-3 px-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" value="2" onChange={(e) => this.onChangeCheckBox(e, '2')} checked={this.props.checkedValue.indexOf('2') !== -1} /><span className="ml-2 text-gray-700">label 2</span>
                </label>
                <label className="inline-flex items-center mt-3 px-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" value="3" onChange={(e) => this.onChangeCheckBox(e, '3')} checked={this.props.checkedValue.indexOf('3') !== -1} /><span className="ml-2 text-gray-700">label 3</span>
                </label>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        checkedValue: state.checkedValue,
    }
}

const mapDispatchToProps = {
    checkboxChange
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkbox);


