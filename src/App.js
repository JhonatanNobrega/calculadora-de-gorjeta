import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000;
`;

const Title = styled.h1`
  color: #CCC
`;

function App() {

  const [ conta, setConta ] = useState('');
  const [ porcentagem, setPorcentagem ] = useState('');

  let subTotal = parseFloat( conta.replace(",", '.') );
  let gorjeta = parseFloat( porcentagem.replace(",", ".") );
  return (
    <>
      <Title>Calculadora de Gorjeta</Title>
      <p>Quanto deu a conta?</p>
      <Input type="text" placeholder="0,00" value={conta} onChange={ (e)=>setConta( e.target.value ) } ></Input>
      <p>Qual a porcentagem de gorjeta?</p>
      <Input type="text" placeholder="0" value={porcentagem} onChange={ (e)=>setPorcentagem( e.target.value ) } ></Input>
      
      { ( subTotal * gorjeta ) > 0 &&
        <>
          <hr/>
          <p>Sub-total: { subTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</p>
          <p>Gorjeta ({gorjeta}%): { (( subTotal * gorjeta ) / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</p>
          <p><strong>Total: { ((( subTotal * gorjeta ) / 100) + subTotal).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</strong></p>
        </>
      }
    </>
  );
}

export default App;