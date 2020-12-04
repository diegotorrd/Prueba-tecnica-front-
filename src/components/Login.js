import React, { Component } from 'react'

class LoginComp extends Component {

    constructor() {
        super();
        this.state = {
            username: null,
            password: null
        };
    }
    componentDidMount() {
        this.setState({
            username: "",
            password: ""
        })
    }

    async validaLogin() {
        let obj = {}
        obj.username = this.state.username;
        obj.password = this.state.password;
        const res = await fetch('http://localhost:8091/usuario/login', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        })
        const datos = await res.json();
        console.log(datos)
    }

    //onSubmit = e => {
    //    e.preventDefault();
    //}

    handleUsername(text) {
        console.log("usua: " + text.target.value)
        this.setState({
            username: text.target.value
        })
    }

    handlePassword(text) {
        console.log("passw: " + text.target.value)
        this.setState({
            password: text.target.value
        })
    }

    render() {
        return (
            <div>
                <input name="username" type="text" onChange={(text) => { this.handleUsername(text) }} placeholder="Usuario" />
                <br />
                <input name="password" type="password" onChange={(text) => { this.handlePassword(text) }} placeholder="Contraseña" />
                <br />
                <button type="submit" onClick={this.validaLogin}>
                    Ingresar
                </button>
                <button onClick={() => { this.validaLogin() }}>
                    Registrar
                </button>
            </div>
        )
    }
}


export default LoginComp;
