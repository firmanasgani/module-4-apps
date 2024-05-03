import { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Input as InputAnt,
  Form as FormAntd,
  Button,
  DatePicker,
} from "antd";
import Header from "../components/Header/Index";
import InputForms from "./../components/InputForms";

const Register = () => {
  const { Content } = Layout;
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pages, setPages] = useState(0)

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipcode] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [error, setError] = useState(false);
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // const checkPassword = () => {
  //   try {
  //     if (password !== confirmPassword) {
  //       setError(true);
  //       return false;
  //     }
  //     return true;
  //   } catch (err: any) {
  //     console.error(`Error handling: ${err.message}`);
  //   }
  // };

  const FormsPageOne = () => {
    return (
      <>
        <InputForms
          nameForms="Fullname"
          labelForms="Fullname"
          placeholder="Ex: Jhon Doe"
          password={false}
          handleChange={setFullname}
          rules={[
            {
              required: true,
              message: "Fullname cannot be empty",
            },
          ]}
        />
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
        <FormAntd.Item
          label="Date of Birth"
          name="date"
          rules={[{ required: true, message: "Please Input your Birthdate" }]}
        >
          <DatePicker value={Date()} style={{ width: "100%" }} />
        </FormAntd.Item>
      
      </>
    );
  };

  const FormsPageTwo = () => {
    return (
      <>

        <InputForms
          nameForms="address"
          labelForms="Street Address"
          handleChange={setStreet}
          password={false}
          placeholder="Ex: Jl. in aja dulu"
          rules={[{ required: true, message: "Please Input your Address" }]}
        />
        <InputForms
          nameForms="city"
          labelForms="City"
          handleChange={setCity}
          password={false}
          placeholder="Ex: South Jakarta "
          rules={[{ required: true, message: "Please Input your city" }]}
        />

        <InputForms
          nameForms="state"
          labelForms="State"
          handleChange={setState}
          password={false}
          placeholder="Ex: Indonesia "
          rules={[{ required: true, message: "Please Input your state" }]}
        />

        <FormAntd.Item
          label="Zipcode"
          name="zipcode"
          rules={[{ required: true, message: "Please Input your zipcode" }]}
        >
          <InputAnt
            onChange={(e) => setZipcode(e.target.value)}
            count={{
              show: true,
              max: 5,
            }}
          />
        </FormAntd.Item>
      </>
    );
  };

  const FormsPageThree = () => {
    return (
      <>
        <InputForms
          nameForms="username"
          labelForms="Username"
          handleChange={setUsername}
          password={false}
          placeholder="Ex: jhon.doe "
          rules={[{ required: true, message: "Please Input your username" }]}
        />

        <InputForms
          nameForms="password"
          labelForms="Password"
          handleChange={setPassword}
          password={true}
          placeholder="Ex: fox jumping on the lazy dog "
          rules={[{ required: true, message: "Please Input your password" }]}
        />

        <InputForms
          nameForms="confirmPassword"
          labelForms="Confirm Password"
          handleChange={setConfirmPassword}
          password={true}
          placeholder="Ex: fox jumping on the lazy dog "
          rules={[
            {
              required: true,
              message: "Please Repeat your Confirm Password",
            },
          ]}
        />
        {/* {error ? <p>Password dan konfirmasi password harus sama!</p> : ""} */}
        <FormAntd.Item>
                <Button
                  style={{ maxWidth: "20%" }}
                  type="primary"
                  htmlType="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </FormAntd.Item>
      </>
    );
  };

  const handlePrev = () => {
    try{
      setPages(pages-1)
      if(pages <= 0) {
        setPages(0)
      }
    }catch(err: any) {
      console.error(`Error handling: ${err.message}`)
    }
  }

  const handleNext = () => {
    try{
      setPages(pages+1)
      if(pages >= 3) {
        setPages(3)
      }
    }catch(err: any) {
      console.error(`Error handling: ${err.message}`)
    }
  }

  const RenderingPages = () => {
    switch(pages) {
      case 1: 
        return <FormsPageOne />
      case 2:
        return <FormsPageTwo />
      case 3: 
      return <FormsPageThree />
      default: 
      return <FormsPageOne />
    }
  }

  const validateForm = () => {
    try {
      if (fullname === "") return false;
      if (email === "") return false;
      if (street === "") return false;
      if (city === "") return false;
      if (state === "") return false;
      if (zipCode === "") return false;
      if (zipCode.length > 6) return false;
      if (username === "") return false;
      if (password === "") return false;
      if (!validateEmail(email)) return false;
      return true;
    } catch (err: any) {
      console.error(`Error handling: ${err.message}`);
    }
  };

  const handleSubmit = () => {
    try {
      const validate = validateForm();
      if (validate) {
        alert(`Success Added Data`);
      }
    } catch (err: any) {
      console.error(`Error: handling ${err.message}`);
    }
  };
  return (
    <div className="App">
      <Layout>
        <Content style={{ padding: "50px 48px" }}>
          <div
            style={{
              background: "white",
              minHeight: 600,
              padding: 24,
              marginTop: 50,
              borderRadius: 12,
            }}
          >
            <Row>
              <Col span={24}>
                <Header />
              </Col>
            </Row>

            <FormAntd
              name="formRegister"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
            
              <RenderingPages />
              <FormAntd.Item>
                <Button
                  style={{ maxWidth: "20%" }}
                  type="primary"
                  htmlType="button"
                  onClick={handlePrev}
                >
                  Prev
                </Button>
                <Button
                  style={{ maxWidth: "20%", marginLeft: 20 }}
                  type="primary"
                  htmlType="button"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </FormAntd.Item>

            </FormAntd>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Register;
