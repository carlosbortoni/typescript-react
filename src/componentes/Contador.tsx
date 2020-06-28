import React, { Component } from 'react';
import ContadorValor from './ContadorValor';
import './Contador.scss';

interface IContadorProps {
  valorInicial?: number
}

interface IContadorState {
  valor: number
}

export default class Contador extends Component<IContadorProps> {

  public state = {
    valor: this.props.valorInicial || 0
  }

  private setValor = (delta: number) => {
    this.setState({
      valor: this.state.valor + delta
    })
  }

  render() {
    return (
      <div className="Contador">
        <ContadorValor contador={this.state.valor} />
        <button onClick={() => this.setValor(1)}>+</button>
        <button onClick={() => this.setValor(-1)}>-</button>
      </div>
    )
  }
}

