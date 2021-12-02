import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import styles from "../../styles/Login.module.css";
import Input from "../../component/Input";
import InputPassword from "../../component/InputPassword";
import ButtonComponent from "../../component/ButtonComponent";

function initialState() {
  return { user: "", password: "" };
}

function Login({}) {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          {/*  <img className={styles.image} src="http://www.pmovil.com/en/images/logo.jpg"/> */}
          <AiFillFire color="#F04E23" />
          <h1 className={styles.title}>HotPmovil</h1>
        </div>
        <Input
          onChange={onChange}
          name="user"
          label="Seu usuário"
          value={values.user}
        />
        <InputPassword
          fill={"#fff"}
          name="password"
          onChange={onChange}
          value={values.password}
        />
        <a className={styles.link} href="/Forgot">
          Esqueci minha senha
        </a>
        <ButtonComponent
          variantContent="contained"
          colorContent="success"
          content="Entrar"
        />
      </div>
    </div>
  );
}

export default Login;
