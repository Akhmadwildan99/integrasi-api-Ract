import React, { Component } from 'react';
import {connect} from 'react-redux';
import variable from '../../../Redux/dispatchVariable';

export class ChildCard extends Component {
    render() {
        return (
            <div className="input-fragment">
                <button onClick={this.props.handleMinus} className="minus">-</button>
                <input type="text" value={this.props.totalOrder} className="input"/>
                <button onClick={this.props.handlePlus} className="plus">+</button>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        totalOrder: state.total
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: variable.plus}),
        handleMinus: () => dispatch({type: variable.minus})
    }
}

export default connect(mapStateProps, mapDispatchProps) (ChildCard)
