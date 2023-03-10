import React from "react";
import { useHistory } from 'react-router-dom'
import NewMeetupForm from "../Components/meetups/NewMeetupForm";

export default function NewMeetups() {
  const history = useHistory()

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-510cd-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
