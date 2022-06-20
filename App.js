import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [campos, setCampos] = useState({
    nome: '',
    email: ''
  });
  function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));
    axios.post('http://localhost:3000/send',
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        }
      })
      .then(response => { console.log(response.data); })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
    send(campos);
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="Digite o email..." onChange={handleInputChange} />

        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Digite o nome..." onChange={handleInputChange} />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}


export default App;