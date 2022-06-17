import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch("https://react-meetup-app-8fc86-default-rtdb.firebaseio.com/.json", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <div>
      <h2>NewMeetUp Page</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
