import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textFieldChange } from '../redux/actions';

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    inputChange = (e) => {
        this.props.textFieldChange(e.target.value);
    }
    render() {
        return (
            <>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" >First Name</label>
                    <input className="border py-2 px-3 text-grey-darkest"
                        value={this.props.textfield}
                        onChange={this.inputChange}
                        type="text" name="first_name" id="first_name" />
                </div>

            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        textfield: state.textfield,
    }
}

const mapDispatchToProps = {
    textFieldChange
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBox);