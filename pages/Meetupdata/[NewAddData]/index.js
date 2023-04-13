import Meetupiditem from "../../../components/meetups/Meetupiditem";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
const meetupId = ({ meetData }) => {
  return (
    <Fragment>
      <Head>
        <title>{meetData.title}</title>
      </Head>
      <Meetupiditem
        _id={meetData.id}
        title={meetData.title}
        address={meetData.address}
        image={meetData.image}
        description={meetData.description}
      />
    </Fragment>
  );
};
export const getStaticPaths = async () => {
  const responsedata = await MongoClient.connect(
    "mongodb+srv://Adminuser:Jb246802@cluster0.0rbnmky.mongodb.net/meetuppage?retryWrites=true&w=majority"
  );
  const database = responsedata.db();
  const collection = database.collection("meetsup");
  const datashow = await collection.find({}, { _id: 1 }).toArray();
  responsedata.close();
  const paths = datashow.map((meetup) => ({
    params: { NewAddData: meetup._id.toString() },
  }));
  console.log(paths);
  return {
    fallback: false,
    paths: paths,
  };
};
export const getStaticProps = async (context) => {
  const newid = context.params.NewAddData;
  const responsedata = await MongoClient.connect(
    "mongodb+srv://Adminuser:Jb246802@cluster0.0rbnmky.mongodb.net/meetuppage?retryWrites=true&w=majority"
  );
  console.log(responsedata);
  const database = responsedata.db();
  const collection = database.collection("meetsup");
  const selected = await collection.findOne({ _id: new ObjectId(newid) });
  console.log(selected);
  responsedata.close();
  return {
    props: {
      meetData: {
        id: selected._id.toString(),
        title: selected.title,
        address: selected.address,
        image: selected.image,
        description: selected.description,
      },
    },
    revalidate: 1,
  };
};
export default meetupId;
