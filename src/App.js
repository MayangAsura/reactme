import React from "react";
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={nama: 'Budi', umur: 20}
    }

    _ubahNama = () => this.setState({nama: 'Mayang', umur: '10'})

    render() {
        return (
            <div className="App">
                <div className="Header">
                    State dan Props di Component React.js
                </div>
                <div>
                    Nama : {this.state.nama}
                </div>
                <div>
                    Umur : {this.state.umur}
                </div>
                <input 
                    type="button" 
                    onClick={this._ubahNama} 
                    value="Klik untuk mengubah nama dan umur"
                />
            </div>
        )
    }
}

export default App