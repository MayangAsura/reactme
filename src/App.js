import React from "react";
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={nama: 'Budi', umur: 20}
    }
    //added from master
    //added from state
    _ubah = () => this.setState({nama: 'Mayang', umur: '10'})
    _ubahNama2 = (namabaru) => this.setState({nama : namabaru})
    _ubahUmur2 = (umurbaru) => this.setState({umur : parseInt(umurbaru)})

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
                    onClick={this._ubah} 
                    value="Klik untuk mengubah nama dan umur"
                /><br/>
                <input
                    type="type"
                    onBlur={(event) => this._ubahNama2(event.target.value)}
                /><br/>
                <input
                    type="text"
                    onBlur={(event) => this._ubahUmur2(event.target.value)}
                />

            </div>
        )
    }
}

export default App