/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Listado(Base) {
  const [colaboradores1, setColaboradores1] = useState(Base);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Charge</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        {colaboradores1.Base.map((colabordor) => (
          <tbody>
            <td key={colabordor.id}>{colabordor.id}</td>
            <td key={colabordor.nombre}>{colabordor.nombre}</td>
            <td key={colabordor.correo}>{colabordor.correo}</td>
            <td key={colabordor.edad}>{colabordor.edad}</td>
            <td key={colabordor.cargo}>{colabordor.cargo}</td>
            <td key={colabordor.telefono}>{colabordor.telefono}</td>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
