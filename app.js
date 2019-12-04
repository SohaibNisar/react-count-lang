import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    count = () => {
        let count = this.state.count;
        count++;
        this.setState({
            count: count,
        });
    }

    render() {
        return (
            <div className='col-sm-9 mx-auto px-0 py-2 d-sm-flex'>
                <div className='col-sm-9 d-sm-flex px-0'>
                    <div className='col-sm-6 order-2 px-0 py-1 text-sm-left'>{this.props.lang}</div>
                    <div className='col-sm-6 py-1 px-0 text-sm-left'>{this.state.count}</div>
                </div>
                <div className='col-sm-3 px-0 text-sm-right'>
                    <button className='btn btn-outline-warning' onClick={this.count}>Click</button>
                </div>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className='container-fluid text-center py-5 px-sm-3 col-sm-8 col-md-7 col-lg-5 col-xl-4'>
                <h2 className='mb-3 text-center'>Vote For Your Language</h2>
                <Vote lang='PHP' />
                <Vote lang='Javascript' />
                <Vote lang='C++' />
                <Vote lang='Java' />
                <Vote lang='Python' />

            </div>
        )
    }
}

export default App;