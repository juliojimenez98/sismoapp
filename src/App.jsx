import { useEffect, useState } from "react";
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
      <div className="-m-2 text-center p-5">
        <div className="p-2">
          <div className="inline-flex items-center bg-white leading-none text-teal-800 rounded-full p-2 shadow-xl text-teal text-sm">
            <span className="inline-flex bg-teal-700 text-white rounded-full h-6 px-3 justify-center items-center">
              SismoApp
            </span>
            <span className="inline-flex px-2">
              <p>
                Las cifras que son de color rojo significan que la magnitud del
                sismo es mayor a 3.9 Ml/Mw
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex content-center">
        <button
          onClick={reload}
          className="bg-teal-500 hover:bg-teal-800 mx-auto text-white font-bold py-2 px-4 rounded-full"
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
          className="bg-teal-500 hover:bg-teal-800 mx-auto text-white font-bold py-2 px-4 rounded-full "
        >
          Subir
        </button>
      </div>
    </>
  );
}

export default App;
