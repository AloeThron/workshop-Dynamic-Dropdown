import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";
import Zoom from "./components/Zoom";
import data from "./components/Food";
import DropDown from "./components/DropDown";

function App() {
  const [vis, setVis] = useState("hidden");
  const [img, setImg] = useState("");
  const [select, setSelect] = useState("All");
  const [food, setFood] = useState(data);

  const typeList = [...new Set(data.map((d) => d.Type))];

  useEffect(() => {
    if (select === "All") {
      setFood(data);
    } else {
      const filterList = data.filter((d) => d.Type === select);
      setFood(filterList);
    }
  }, [select]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;
  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentItems = food.slice(indexOfFirstImage, indexOfLastImage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <div>
          <DropDown typeList={typeList} setSelect={setSelect} />
        </div>
        <div className="m-10 flex justify-center box-content">
          <div className="flex flex-wrap md:gap-10 justify-center 2xl:justify-around">
            {currentItems.map((f, index) => (
              <div key={index}>
                <Card
                  type={f.Type}
                  url={f.url}
                  setVis={setVis}
                  setImg={setImg}
                />
              </div>
            ))}
          </div>
        </div>

        <Zoom vis={vis} setVis={setVis} img={img} />
      </div>
      <div>
        <div className="text-center mb-10">
          {Array.from(
            { length: Math.ceil(food.length / itemsPerPage) },
            (_, index) => (
              <button
                className="mx-1 p-2 px-4 bg-gradient-to-br from-slate-50 to-gray-50 border border-gray-200 rounded-lg hover:shadow-sm"
                key={index + 1}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
