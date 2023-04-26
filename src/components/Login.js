import { useState, useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import { Container, Row, Col } from "react-bootstrap"
import LoginForm from "./LoginForm"
import { Link } from "react-router-dom"
import FadeInWhenVisible from "./FadeInWhenVisible"

function Login() {
  const appDispatch = useContext(DispatchContext)
  useEffect(() => {
    appDispatch({ type: "title", value: "Login" })
  }, [])

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
    <section>
      <Container>
        <Row>
          <Col lg={6} md={7} xs={12} className="mx-auto">
            <FadeInWhenVisible>
              <LoginForm />
            </FadeInWhenVisible>
            <FadeInWhenVisible transitionDelay={0.1}>
              <p className="mt-4 text-center ">
                Don't have an account?
                <Link to={"/register"} className="dma-sec-color-link dma-link d-inline-block">
                  &nbsp;Create one
                </Link>
              </p>
            </FadeInWhenVisible>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Login
