import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function DashBoard({ onHomePage }) {
  const [category, setCategory] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  useEffect(() => {
    console.log(startDate);
    console.log(endDate);
  }, [startDate, endDate]);

  const submitEvent = () => {
    const url = process.env.REACT_APP_BACKEND_URL;

    axios
      .post(
        `${url}/event`,
        {
          category: category,
          eventName: eventName,
          eventLocation: eventLocation,
          startDate: startDate,
          endDate: endDate,
          eventDesc: eventDesc,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        toast.success("SuccessFully ");
        console.log("login Sucess", res);
        onHomePage();
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
        console.log("Failed", JSON.stringify(err.response.data.msg));
      });
  };

  return (
    <div className="App">
      <div className="maindiv">
        <div className="header">
          <h2>Create Event</h2>
        </div>
        <form>
          {/* <input
            type="text"
            placeholder="category"
            className="input"
            onInput={(e) => setCategory(e.target.value)}
          /> */}
          <select onChange={(e) => console.log(e.target.value)}>
            <option value="Seminor">Seminor</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Workshop">Workshop</option>
          </select>

          <br />
          <input
            type="text"
            placeholder="Event Name"
            className="input"
            onInput={(e) => setEventName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Event Location"
            className="input"
            onInput={(e) => setEventLocation(e.target.value)}
          />
          <input
            type="date"
            className="input"
            onInput={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="input"
            onInput={(e) => setEndDate(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Event Description"
            className="input"
            onInput={(e) => setEventDesc(e.target.value)}
          />
        </form>
        <button
          type="button btn"
          className="btn btn-primary"
          onClick={() => submitEvent()}
        >
          Create Event
        </button>
      </div>
    </div>
  );
}

export default DashBoard;
