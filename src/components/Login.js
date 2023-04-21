import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useParams, NavLink, Routes, Route } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  function validation(e) {
    e.preventDefault()
    if (email === null || email === "") {
      window.alert("please fill your Email!")
    }
    if (password === null || password === "") {
      window.alert("please fill your Password!")
    }
  }

  return (
    <div className="dma-login text-black text-center  w-100 ">
      <h3>Please Login</h3>
      <form className="dma-login-form">
        <div className="dma-form-group mt-4 d-flex">
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="dma-form-group mt-4 d-flex">
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={validation} className="mt-4 dma-btn dma-btn__bg-yellow">
          Login
        </button>
      </form>
      <p className="mt-4">
        Dont have an account?{" "}
        <NavLink className="dma-sec-color-link dma-link" to={"/blog/register"}>
          Create one
        </NavLink>{" "}
      </p>
    </div>
  )
}
export default Login
