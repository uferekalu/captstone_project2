import React from "react";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => setTours(data));
    setLoading(false);
  }, []);

  return (
    <div className="main">
      {!loading && <h1 className="title">Our Tours</h1>}
      <p className="underline"></p>
      {loading
        ? <Loading />
        : tours?.map(tour =>
            <Tours
              key={tour.id}

              name={tour.name}
              info={tour.info}
              image={tour.image}
              price={tour.price}
            />
          )}
    </div>
  );
}

export default App;
