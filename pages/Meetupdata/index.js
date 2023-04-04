import Meetupdata from '../../components/meetupdata/Meetupdata'
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
const meetupData=(props)=>{
    return (<Fragment>
      <Head>
        <title>Meetup Details</title>
      </Head>
      <Meetupdata meetups={props.data} />
    </Fragment>)
}
export default meetupData;
export async function getStaticProps(){
    const responsedata=await MongoClient.connect(
        "mongodb+srv://Adminuser:Jb246802@cluster0.0rbnmky.mongodb.net/meetuppage?retryWrites=true&w=majority"
      );
      console.log(responsedata)
      const database=responsedata.db();
      const collection=database.collection('meetsup');
      const datashow=await collection.find().toArray();
      responsedata.close();
      return {
        props:{
            data:datashow.map((value)=>({
                title:value.title,
                address:value.address,
                image:value.image,
                id:value._id.toString()
          }))
        },revalidate:1
      }
} 