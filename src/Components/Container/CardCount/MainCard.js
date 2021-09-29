import React, { Component } from 'react';
import './card.css';
import ChildCard from './Child/ChildCard';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class MainCard extends Component {
    render() {
        return (
            <>
                
                <Link to="/">
                    <button>home</button>
                </Link>
              
                <div className="main">
                    <div className="cards">
                        <div className="totalCheckOut">{this.props.total}</div>
                        <ChildCard />
                    </div>
                </div>
            </>
        )
    }
}

const mapStateProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateProps) (MainCard)
