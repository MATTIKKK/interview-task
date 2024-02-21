import { useEffect, useState } from "react";
import "./page5.css";
import axios from "axios";

const Page5 = () => {
  const [priceTags, setPriceTags] = useState([]); 
  //! Если что я могу перевести на редакс в будущем, если это потребуется :)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/priceTags");
        console.log(response.data);
        setPriceTags(response.data.priceTags);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page five">
      <p className="mainTitle">Реальные результаты:</p>
      <div className="cards">
        {priceTags &&
          priceTags.map((priceTag: any) => {
            return (
              <div className="card">
                <div className="header">
                  <p>ДО</p>
                </div>
                <div className="content">
                  {priceTag.before.map((priceItems: any) => {
                    return <div className="price-tag">
                      <p className="price">${priceItems.price}</p>
                      <p className="priceDescription">${priceItems.description}</p>
                    </div>;
                  })}
                </div>
                <div className="header after">
                  <p>ПОСЛЕ</p>
                </div>
                <div className="content">
                {priceTag.after.map((priceItems: any) => {
                    return <div className="price-tag">
                      <p className="price">${priceItems.price}</p>
                      <p className="priceDescription">${priceItems.description}</p>
                    </div>;
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Page5;
