

type categories = {
  index: number;
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  editButton: any;
  deleteButton: any;
};

const Categories: React.FC<categories> = ({
  index,
  id,
  name,
  description,
  editButton,
  deleteButton,
  isActive,
}) => {
  const isActiveText = isActive ? "Active" : "Non-active";
  return (
    <>
  
      <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{isActiveText}</td>
        <td>
          <button 
            onClick={editButton}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >Edit</button>
        </td>
        <td>
          <button  onClick={deleteButton}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Hapus</button>
        </td>
      </tr>
    </>
  );
};

export default Categories;
