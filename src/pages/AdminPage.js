import React from 'react'
import {Redirect, Route} from "react-router";


class AdminPage extends React.Component {
    state = {
        permission: false
    };

    handleChangePerm = () => {
      this.setState({
          permission: true,
      })
    };

    render() {
        return (
            <div>
                <label htmlFor="">Enter login<input type="text"/></label>
                <br/>
                <label htmlFor="">Enter password<input type="password"/></label>
                <br/>
                <button onClick={this.handleChangePerm} style={{
                    display: 'block',
                    marginTop: 20,
                    border: '2px solid black',
                    backgroundColor: '#fff',
                    padding: '5px 20px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    }}>Login</button>
                <Route render={() => (
                    this.state.permission ? <Redirect to='/login'/> : null
                )}/>
            </div>
        );
    };
}

export default AdminPage