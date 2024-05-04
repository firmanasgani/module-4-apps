
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'

const Signup = () => {
  const url = 'https://library-crud-sample.vercel.app/api'
  const [forms, setForms] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [confirmPassword, setConfirmPassword] = useState("")

  const validateEmail = (email:string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleConfirmPassword = (pass: string, conPass: string) => {
    if(pass === conPass) return true
    return false
  }

  const HandleSubmit = (e: any) => {
    try {

      e.preventDefault()
      const email = validateEmail(forms.email)
      if(!email) {
        return alert("Your email format is incorrect.")
      }
      const checkPassword = handleConfirmPassword(forms.password, confirmPassword)
      
      if(forms.password.length < 8) return alert("Password must  be at least 8 characters")
      if(forms.password.search(/[a-z]/)<0) return alert("Password must be at least one lowercase letter")
      if(forms.password.search(/[A-Z]/)<0) return alert("Password must be at least one uppercase letter")
      if(forms.password.search(/[0-9]/)<0) return alert("Password must be at least one number")
      if(!checkPassword) return alert("Your password and confirm password not matches")
      
      axios.post(`${url}/user/register`, forms).then((response) => {
        alert('Success add users')
        const form = {
          name: '',
          email: '',
          password: ''
        }
        setForms(form)
        setConfirmPassword('')
      }).catch((error) => console.log("Error: "+error));

    }catch(err: any) {
      console.error(`Error handling submit: ${err.message}`)
    }
  }
  
   

  return (
    <>
      <Header />
      <div className="flex justify-center items-center mb-10">
        <div>
          <h1 className="text-xl font-medium text-center text-gray-900">
            Daftar untuk masuk
          </h1>
          <div className="w-full max-w-xl">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={HandleSubmit}>
            <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullname"
                >
                  Nama Lengkap:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline"
                  type="text"
                  onChange={(e) => setForms({...forms, name: e.target.value})}
                  value={forms.name}
                  placeholder="Nama lengkap"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline"
                  type="email"
                  value={forms.email}
                  onChange={(e) => setForms({...forms, email: e.target.value})}
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 mb-3"
                  type="password"
                  value={forms.password}
                  onChange={(e) => setForms({...forms, password: e.target.value})}
                  placeholder="******************"
                />
               
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 mb-3"
                  type="password"
                  placeholder="******************"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Daftar
                </button>
              </div>
              <div className="mb-6">
                <Link to="/signin" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                  Sudah punya akun? klik ini
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
