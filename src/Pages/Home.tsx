import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
const Home = () => {
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    const [categories, setCategories] = useState()
   
    useMemo(() => {
        const token = localStorage.getItem("_tkn");
        const url = 'https://library-crud-sample.vercel.app/api'
        const getProfile = async() => {
            const getProfile = await fetch(url+'/user/profile', {headers: {Authorization: `Bearer ${token}`}}).then((res) => {return res.json()})
            const data = getProfile
            setData(data)
            // return token ? <Home /> : <NotLoginYet />;
          };
        

        const getAllCategory = async() => {
            const getCategory = await fetch(url+'/user/category', {headers: {Authorization: `Bearer ${token}`}}).then((res) => {return res.json()})
            const data = getCategory
            setCategories(data)
        }
        setTimeout(() => {
            getProfile()
            getAllCategory()
        }, 500)
    }, [])

    return (
        <>
            <Header />
            <div className="flex justify-center flex-col items-center mb-10">
                Welcome back, {data.name}! 

                
            </div>
            <Footer />
        </>
    )
}

export default Home