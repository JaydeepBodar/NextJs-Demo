import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DummyData = [
  {
    id: "1",
    title: "new1",
    address: "dduiwuuwuhwdowdwoioihwdoiwodhwoidowiiodwohidw",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Red_Fuji_southern_wind_clear_morning.jpg/800px-Red_Fuji_southern_wind_clear_morning.jpg",
  },
  {
    id: "2",
    title: "new2",
    address: "jdwowdoidowiwiodwodwdowoddouwodwuoduwduowdwdhodwdiowff",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Metropolitan_Museum_1_%284675714481%29.jpg",
  },
  {
    id: "3",
    title: "new3",
    address: "fefgfwffggggge4t5y546j6jjyfklgmpo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg",
  },
];
const Homepage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <MeetupList meetups={props.meetup} />
    </Fragment>
  );
};

export async function getStaticProps() {
  return { props: { meetup: DummyData } };
}
// export async function getServerSideProps(context){
//   const res=context.res
//   const req=context.req
//   return { props: { meetups: DummyData } };

// }
export default Homepage;
