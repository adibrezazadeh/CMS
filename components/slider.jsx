import React, { useEffect, useState } from "react";

const Slider = () => {
  const [businessName, setBusinessName] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.hillzusers.com/api/dealership/single/by/url/localhost:3000`
      );
      const data = await response.json();
      setBusinessName(data);
    };

    fetchData();

    if (typeof window !== "undefined") {
      window.Slider = Slider;
    }
  }, []);

  console.log("bbbbb", businessName);

  return (
    <div>
      <h1>{businessName?.bussiness_name}</h1>
      <button onClick={() => setShowModal(true)}>Click to Show modal</button>
      {showModal && (
        <div className="modal">
          <h2>Hi!</h2>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Slider;