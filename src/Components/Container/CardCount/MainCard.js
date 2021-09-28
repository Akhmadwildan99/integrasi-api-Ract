import React, { Component } from 'react';
import './card.css';
import ChildCard from './Child/ChildCard';
import {connect} from 'react-redux'

class MainCard extends Component {
    render() {
        return (
            <div className="main">
                <div className="cards">
                    <div className="totalCheckOut">{this.props.total}</div>
                    <ChildCard />
                </div>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateProps) (MainCard)
