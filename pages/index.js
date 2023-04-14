import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import DummyData from "../components/Dummydata";
const Homepage = ({meetupdata}) => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <MeetupList meetups={meetupdata} />
    </Fragment>
  );
};

export async function getStaticProps() {
  return { props: { meetupdata: DummyData } };
}
// export async function getServerSideProps(context){
//   const res=context.res
//   const req=context.req
//   return { props: { meetups: DummyData } };

// }
export default Homepage;
