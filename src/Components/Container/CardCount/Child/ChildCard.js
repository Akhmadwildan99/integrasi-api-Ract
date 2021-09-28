import React, { Component } from 'react';
import {connect} from 'react-redux'

export class ChildCard extends Component {
    render() {
        return (
            <div className="input-fragment">
                <button onClick={this.props.handleMinus} className="minus">-</button>
                <input type="text" value={this.props.total} className="input"/>
                <button onClick={this.props.handlePlus} className="plus">+</button>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        total: state.total
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: 'ADD_ORDER'}),
        handleMinus: () => dispatch({type: 'MINUS_ORDER'})
    }
}

export default connect(mapStateProps, mapDispatchProps) (ChildCard)
