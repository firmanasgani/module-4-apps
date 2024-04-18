import "./App.css";
import { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Input as InputAnt,
  Form as FormAntd,
  Button,
} from "antd";
import Header from "./components/Header";

const App = () => {
  const { Content } = Layout;
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateForm = () => {
    try {
      if (fullname === "") return false;
      if (email === "") return false;
      if(password === '') return false;
      if (!validateEmail(email)) return false;
      return true
    } catch (err: any) {
      console.error(`Error handling: ${err.message}`);
    }
  };

  const handleSubmit = () => {
    try {
      const validate = validateForm();
      if(validate) {
        alert(`Success Added Data`)
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
              <FormAntd.Item
                label="Fullname"
                name="fullname"
                rules={[
                  { required: true, message: "Please Input your fullname" },
                ]}
              >
                <InputAnt onChange={(e) => setFullname(e.target.value)} />
              </FormAntd.Item>
              <FormAntd.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please Input your email" },
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <InputAnt onChange={(e) => setEmail(e.target.value)} />
              </FormAntd.Item>
            


              <FormAntd.Item
                label="Street Address"
                name="address"
                rules={[
                  { required: true, message: "Please Input your address" },
                ]}
              >
                <InputAnt  />
              </FormAntd.Item>
              <FormAntd.Item
                label="City"
                name="city"
                rules={[
                  { required: true, message: "Please Input your City" },
                ]}
              >
                <InputAnt  />
              </FormAntd.Item>
              <FormAntd.Item
                label="State"
                name="state"
                rules={[
                  { required: true, message: "Please Input your State" },
                ]}
              >
                <InputAnt  />
              </FormAntd.Item>
              <FormAntd.Item
                label="Zipcode"
                name="zipcode"
                rules={[
                  { required: true, message: "Please Input your zipcode" },
                ]}
              >
                <InputAnt  />
              </FormAntd.Item>

              <FormAntd.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <InputAnt />
              </FormAntd.Item>
              <FormAntd.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <InputAnt.Password onChange={(e) => setPassword(e.target.value)} />
              </FormAntd.Item>

              <FormAntd.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </FormAntd.Item>
            </FormAntd>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
