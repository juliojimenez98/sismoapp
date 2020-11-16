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
      <div className="mx-auto m-6">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
