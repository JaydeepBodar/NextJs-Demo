import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const [input, Setinput] = useState({
    title: "",
    image: "",
    address: "",
    description: "",
  });
  const { title, image, address, description } = input;
  const DataHandler = (event) => {
    const { name, value } = event.target;
    Setinput({ ...input, [name]: value });
  };
  function submitHandler(event) {
    event.preventDefault();

    // const enteredTitle = titleInputRef.current.value;
    // const enteredImage = imageInputRef.current.value;
    // const enteredAddress = addressInputRef.current.value;
    // const enteredDescription = descriptionInputRef.current.value;

    // const meetupData = {
    //   title: enteredTitle,
    //   image: enteredImage,
    //   address: enteredAddress,
    //   description: enteredDescription,
    // };
    const data=[{ ...input }]
    props.onAddMeetup(data);
    Setinput({ title: "", image: "", address: "", description: "" });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            name="title"
            value={title}
            onChange={DataHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            name="image"
            value={image}
            onChange={DataHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            name="address"
            value={address}
            onChange={DataHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            required
            rows="5"
            value={description}
            onChange={DataHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
