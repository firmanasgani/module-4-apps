import "./App.css";
import { useState} from 'react'
import { Layout, Row, Col, Input as InputAnt, Form as FormAntd, Button } from "antd";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const App = () => {
  const { Content } = Layout;
  const [fullname, setFullname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const RegisterForm = Yup.object().shape({
    fullname: Yup.string()
      .min(4, "Too Short!")
      .max(50, "too Long")
      .required("required"),
      email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <div className="App">
      <Layout>
        <Content style={{ padding: "0 48px" }}>
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
                <h1 style={{ textAlign: "center", fontSize: 25 }}>
                  Form Registration
                </h1>
              </Col>
            </Row>
            <FormAntd
              name="formRegister"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  dateOfBirth: "",
                }}
                validationSchema={RegisterForm}
                onSubmit={values => {
                  console.log(values);
                }}
              >
                <Form>
                  <FormAntd.Item
                    label="Fullname"
                    name="fullname"
                    rules={[
                      { required: true, message: "Please Input your fullname" },
                    ]}
                  >
                  <InputAnt onChange={(e) => setFullname(e.target.value)}  />
                  </FormAntd.Item>
                  <FormAntd.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please Input your email" },
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      
                    ]}
                  >
                  <InputAnt onChange={(e) => setEmail(e.target.value)}  />
                  </FormAntd.Item>
                  <FormAntd.Item>
                  <Button type="primary" htmlType="submit">Submit</Button>
                  </FormAntd.Item>
                </Form>
              </Formik>
            </FormAntd>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
