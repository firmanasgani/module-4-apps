import { useState } from "react";

type statusFormProps = {
    statusForm: string
} 

const CreateCategory = ({statusForm}: statusFormProps) => {
  const [forms, setForms] = useState({
    id: "",
    name: "",
    description: "",
    isActive: false,
  });

  const disable = statusForm === "new" ? true : false;
  const setStatus = forms.isActive ? "Aktif" : "Non-Aktif"

  const handleSubmit = () => {
    try{
    
        console.log("Forms: ", forms)
    }catch(err: any) {
        console.error(`Error handling submit: ${err.message}`)
    }
  }

  return (
    <>
      <div className="mb-4">
        Category Forms:
        <form className="mx-auto w-100">
        <div className="flex justify-between">
            <div className="flex-none w-64">
              <div className="w-[90%] mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Id:
                </label>
                <input
                  type="text"
                  id="categoryId"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={forms.id}
                  readOnly={disable}
                  onChange={(e) => {
                    setForms({
                      ...forms,
                      id: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>
            <div className="flex-1 w-64">
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Nama:
                </label>
                <input
                  type="text"
                  id="description"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={forms.name}
                  onChange={(e) => {
                    setForms({
                      ...forms,
                      name: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex-none w-64">
              <div className="w-[90%] mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Deskripsi:
                </label>
                <input
                  type="text"
                  id="name"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={forms.description}
                  onChange={(e) => {
                    setForms({
                      ...forms,
                      description: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>
            <div className="flex-1 w-64">
              <div className="mb-5">
                <label
                  htmlFor="isActive"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Active:
                </label>
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                    checked={forms.isActive}
                    onChange={(e) => setForms({...forms, isActive: !forms.isActive})}
                    />
                     <label className="ms-2 text-sm font-medium text-gray-900 ">{setStatus}</label>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateCategory;
