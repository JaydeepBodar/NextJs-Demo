import React from 'react'
import MeetupItems from './MeetupItems';
import classes from './MeetupItems.module.css'
const Meetupdata = ({meetups}) => {
  return (
    <div>
      <h2>New Added Data</h2>
      <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItems
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
    </div>
  )
}

export default Meetupdata;
