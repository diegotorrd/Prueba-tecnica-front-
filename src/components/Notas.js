import React, { Component } from 'react'

export default class Notas extends Component {

    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch('http://localhost:8091/nota', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
            .then(json => this.setState({ data: json }));
    }


    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map(el => (
                        <li>
                            <b>Titulo: </b>{el.titulo} <br /> {el.contenido} <br />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
