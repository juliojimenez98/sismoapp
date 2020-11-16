import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  const urlEndPoint = "https://api.gael.cl/general/public/sismos";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(urlEndPoint);
    const datos = await data.json();
    console.log(datos);
    setData(datos);
  };
  const reload = () => {
    window.location.replace("/");
  };

  const up = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Navbar />
      <div className="flex content-center">
        <button
          onClick={reload}
          class="bg-teal-500 hover:bg-teal-800 mx-auto text-white font-bold py-2 px-4 rounded-full"
        >
          Recargar página
        </button>
      </div>
      <div className="mx-auto m-6">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>

      <div className="flex content-center p-5 mb-5">
        <button
          onClick={up}
          class="bg-teal-500 hover:bg-teal-800 mx-auto text-white font-bold py-2 px-4 rounded-full "
        >
          Subir
        </button>
      </div>
    </>
  );
}

export default App;
