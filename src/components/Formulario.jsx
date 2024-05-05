/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BaseColaboradores } from '../BaseColaboradores';
import Listado from './Listado';

export default function Formulario() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [charge, setCharge] = useState('');
  const [phone, setPhone] = useState('');
  const [id_c, setId_c] = useState(3);
  const enviarFormulario = (e) => {
    e.preventDefault();
    setColaboradores([
      ...colaboradores,
      {
        id: id_c,
        nombre: name,
        correo: email,
        edad: age,
        cargo: charge,
        telefono: phone,
      },
    ]);
    setId_c(id_c + 1);
    console.log(colaboradores);
  };

  const capturaName = (e) => {
    setName(e.target.value);
  };

  const capturaEmail = (e) => {
    setEmail(e.target.value);
  };

  const capturaAge = (e) => {
    setAge(e.target.value);
  };

  const capturaCharge = (e) => {
    setCharge(e.target.value);
  };

  const capturaPhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <Listado Base={colaboradores}></Listado>
      <Form onSubmit={enviarFormulario}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="Name"
            placeholder="Nombre del colaborador"
            onChange={capturaName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCharge">
          <Form.Control
            type="Email"
            placeholder="Email del colaborador"
            onChange={capturaEmail}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            type="Number"
            placeholder="Edad del colaborador"
            onChange={capturaAge}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCharge">
          <Form.Control
            type="Name"
            placeholder="Cargo del colaborador"
            onChange={capturaCharge}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control
            type="Number"
            placeholder="Telefono del colaborador"
            onChange={capturaPhone}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
