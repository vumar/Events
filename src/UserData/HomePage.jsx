import React, { useEffect, useState } from "react";
import Card2 from "./Card2";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL;
    axios
      .get(`${url}/event/all`)
      .then((res) => {
        console.log("Event data", res.data.events);
        setLoading(false);
        setData(res.data.events);
      })
      .catch((err) => {
        console.log("Failed", err);
      });
  }, []);
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="row">
          {data.map((event, index) => {
            return (
              <Card2
                eventName={event.eventName}
                eventCategory={event.eventCategory}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
