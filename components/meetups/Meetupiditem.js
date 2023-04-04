import React from "react";
import Link from "next/link";
import styles from './Meetupiditem.module.css'
const Meetupiditem = (props) => {
  return (
    <div className="meetupid">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.address}</p>
      <Link href="/">
        <button className={styles.button}>Back</button>
      </Link>
    </div>
  );
};

export default Meetupiditem;