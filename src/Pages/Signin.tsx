import { useState } from "react";
import Footer from "../components/Footer/Index";
import Header from "../components/Header/Index";
import InputForms from "../components/InputForms";
import { Form as FormAntd, Button } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const url = "https://library-crud-sample.vercel.app/api";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleSubmit = (e: any) => {
    try {
      const validate = validateEmail(email);
      if (!validate) {
        return alert("Your email format is incorrect.");
      }

      axios
        .post(`${url}/user/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          alert("Success Login");
          console.log("token", response.data);
          localStorage.setItem("_tkn", response.data.token);
        })
        .catch((error) => console.log("Error: " + error));
    } catch (err: any) {
      console.log(`handling error: ${err.message}`);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center flex-col items-center mb-10">
        <h1>Login untuk melanjutkan:</h1>
        <InputForms
          nameForms="email"
          labelForms="Email"
          placeholder="jhon@doe.com"
          handleChange={setEmail}
          rules={[
            { required: true, message: "Please Input your email" },
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        />
        <InputForms
          nameForms="password"
          labelForms="Password"
          handleChange={setPassword}
          password={true}
          placeholder="Ex: fox jumping on the lazy dog "
          rules={[{ required: true, message: "Please Input your password" }]}
        />
        <FormAntd.Item>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Login
          </Button>
        </FormAntd.Item>
        <FormAntd.Item>
          <Link to="/signup">Belum punya akun? Daftar di sini</Link>
        </FormAntd.Item>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
