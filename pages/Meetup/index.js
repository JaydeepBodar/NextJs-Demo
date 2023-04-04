import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const MeetupForm = () => {
  const DataHandler = async (entry) => {
    const responsedata = await fetch("/api/meetupdata", {
      method: "POST",
      body:JSON.stringify(entry),
      header: { "Content-type": "application/json" },
    });
    console.log(responsedata)
    const datasend=await responsedata.json();
    console.log(datasend)
  };
  return <NewMeetupForm onAddMeetup={DataHandler} />;
};
export default MeetupForm;
