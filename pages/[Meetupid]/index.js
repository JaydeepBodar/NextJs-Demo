import { useRouter } from "next/router";
import Meetupiditem from "../../components/meetups/Meetupiditem";
import DummyData from "../../components/Dummydata";
const meetupId = ({meetnewData}) => {
  const data=meetnewData[0]
  console.log("object",meetnewData)
  return (
    <Meetupiditem
      id={data.id}
      title={data.title}
      address={data.address}
      image={data.image}
    />
  );
};
export default meetupId;
export const getStaticPaths = async () => {
  const path=DummyData.map((data)=>({
    params:{Meetupid:data.id}
  }))
  console.log("id",path)
  return {
    fallback: false,
    paths:path,
  };
};
export const getStaticProps = async (context) => {
  const meetupid = context.params.Meetupid;
  const data=DummyData.filter(p=>p.id === meetupid)
  console.log(data)
  return {
    props: {
      meetnewData: 
        data.map((data)=>{return ({
          id: data.id,
          title: data.title,
          address:data.address,
          image:data.image
        })}
      )},
  };
};
