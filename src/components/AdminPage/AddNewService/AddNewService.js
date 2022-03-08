import React, { useRef } from "react";

const AddNewService = () => {
  const serviceRef = useRef();
  const imageUrlRef = useRef();
  const descriptionRef = useRef();
  const costRef = useRef();
  const handleAddData = (e) => {
    const service = serviceRef.current.value;
    const imageUrl = imageUrlRef.current.value;
    const description = descriptionRef.current.value;
    const cost = costRef.current.value;
    const status = "pending";

    const newServices = { service, imageUrl, description, cost, status };

    fetch("https://hidden-shore-76699.herokuapp.com/addServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newServices),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added A new services.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="m-3">Add a new Product</h1>
      <form onSubmit={handleAddData}>
        <input
          type="text"
          ref={serviceRef}
          name=""
          id=""
          placeholder="service name"
        />
        <br />
        <br />
        <input
          type="text"
          ref={imageUrlRef}
          name=""
          id=""
          placeholder="imageUrl"
        />
        <br />
        <br />
        <textarea
          rows="7"
          cols="80"
          ref={descriptionRef}
          name=""
          id=""
          placeholder="description"
        />
        <br />
        <br />
        <input
          type="text"
          ref={costRef}
          name=""
          id=""
          placeholder="service cost BDT"
        />
        <br />
        <br />
        <input type="submit" value="Add New services" className="bg-success" />
      </form>
    </div>
  );
};
export default AddNewService;
