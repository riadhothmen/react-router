import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import StarRating from "../StarRating/StarRating";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddMovie = ({ handleAdd }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    clearForm();
  }, [modalIsOpen]);

  const [form, setForm] = useState({
    name: "",
    image: "",
    date: "",
    rating: 0,
  });
  function clearForm() {
    setForm({
      name: "",
      image: "",
      date: "",
      rating: 1,
    });
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRate = (rate) => setForm({ ...form, rating: rate });

  return (
    <div>
      <button className="btn add-movie-btn" onClick={openModal}>
        Add Movie
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            let newMovie = {
              ...form,
              id: Math.random(),
            };
            handleAdd(newMovie);
            closeModal();
          }}
        >
          <h2>Add your best Movie here </h2>
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
            required
          />
          <label>Date </label>
          <input
            onChange={handleChange}
            type="text"
            value={form.date}
            name="date"
            required
          />
          <label>Rate </label>
          <StarRating rate={form.rating} handleRate={handleRate} />
          <label>  Image link </label>
          <input
            onChange={handleChange}
            type="url"
            name="image"
            value={form.image}
            required
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Add 
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              {" "}
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;