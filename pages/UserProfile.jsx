import React, { useState, useContext } from "react"
import "../src/index.css"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context/AuthContext"

const Register = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [pizza, setPizza] = useState({
    titulo: "",
    descripcion: "",
    valor: "",
    img: "",
    ingredients: "",
  })

  const handleTituloChange = (e) => {
    setPizza({ ...pizza, titulo: e.target.value })
  }

  const handleDescripcionChange = (e) => {
    setPizza({ ...pizza, descripcion: e.target.value })
  }

  const handleValorChange = (e) => {
    setPizza({ ...pizza, valor: e.target.value })
  }

  const handleImgChange = (e) => {
    setPizza({ ...pizza, img: e.target.value })
  }

  const handleIngredientsChange = (e) => {
    setPizza({ ...pizza, ingredients: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
const pizzaData = {
  titulo: pizza.titulo,
  descripcion: pizza.descripcion,
  valor: pizza.valor,
  img: pizza.img,
  ingredients: pizza.ingredients,
}

try {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pizzaData),
  }

  try {
    const response = await fetch(
      "https://pizzaapi-p5jw.onrender.com/crear_pizza",
      requestOptions
    )
    if (!response.ok) {
      throw new Error(
        `Error en la solicitud: ${response.status} ${response.statusText}`
      )
    }

    const responseData = await response.json()
    console.log(responseData)
  } catch (error) {
    console.error(error)
  }
  navigate("/")
  alert("Pizza registrada con éxito")
} catch (error) {
  alert("Algo salió mal ...")
  console.log(error)
}
  }
  console.log()
  return (
    <div className="Register sticky-bottom">
      <form className="form_container" onSubmit={handleSubmit}>
        {user && user.email ? (
          <p>{user.email}</p>
        ) : (
          <p>No hay un usuario autenticado</p>
        )}
        <div className="title_container">
          <span className="subtitle">Registra una nueva pizza.</span>
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="titulo">
            Título:
          </label>
          <input
            placeholder="Título de la pizza"
            type="text"
            value={pizza.titulo}
            onChange={handleTituloChange}
            required
            className="input_field"
            id="titulo"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="descripcion">
            Descripción:
          </label>
          <input
            placeholder="Descripción de la pizza"
            type="text"
            value={pizza.descripcion}
            onChange={handleDescripcionChange}
            required
            className="input_field"
            id="descripcion"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="valor">
            Valor:
          </label>
          <input
            placeholder="Valor de la pizza"
            type="text"
            value={pizza.valor}
            onChange={handleValorChange}
            required
            className="input_field"
            id="valor"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="img">
            URL de la imagen:
          </label>
          <input
            placeholder="URL de la imagen de la pizza"
            type="text"
            value={pizza.img}
            onChange={handleImgChange}
            required
            className="input_field"
            id="img"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="ingredients">
            Ingredientes:
          </label>
          <input
            placeholder="Ingredientes de la pizza"
            type="text"
            value={pizza.ingredients}
            onChange={handleIngredientsChange}
            required
            className="input_field"
            id="ingredients"
          />
        </div>
        <button type="submit" className="sign-in_btn">
          Registrar Pizza
        </button>
      </form>
    </div>
  )
}

export default Register
