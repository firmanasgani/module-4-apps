import { useMemo, useState } from "react";
import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import Categories from "../components/Category/Index";
import CreateCategory from "../components/Category/Create";
const Home = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [categories, setCategories] = useState();

  useMemo(() => {
    const token = localStorage.getItem("_tkn");
    const url = "https://library-crud-sample.vercel.app/api";
    const getProfile = async () => {
      const getProfile = await fetch(url + "/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        return res.json();
      });
      const data = getProfile;
      setData(data);
      // return token ? <Home /> : <NotLoginYet />;
    };

    const getAllCategory = async () => {
      const getCategory = await fetch(url + "/category", {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        return res.json();
      });
      const data = getCategory;
      setCategories(data);
    };
    setTimeout(() => {
      getProfile();
      getAllCategory();
    }, 500);
  }, []);

  const handleSubmit = () => {
    return alert("submit");
  };

  return (
    <>
      <Header />
     
      <div className="flex justify-center flex-col items-center mb-10">
        Welcome back, {data.name}!
        <CreateCategory statusForm="new"/>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-[400px] text-sm text-left mb-[50px]">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Deskripsi
                </th>
                <th scope="col" className="px-6 py-3">
                  Active
                </th>
                <th colSpan={2} scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <Categories
                index={1}
                id="esxfdfd"
                name="Categories satu"
                description="description"
                isActive={true}
                editButton={handleSubmit}
                deleteButton={handleSubmit}
              />
               <Categories
                index={2}
                id="esxfdfd"
                name="Categories dua"
                description="description"
                isActive={true}
                editButton={handleSubmit}
                deleteButton={handleSubmit}
              />
               <Categories
                index={2}
                id="esxfdfd"
                name="Categories dua"
                description="description"
                isActive={true}
                editButton={handleSubmit}
                deleteButton={handleSubmit}
              />
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
