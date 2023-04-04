import { useRouter } from "next/router";
import Meetupiditem from "../../components/meetups/Meetupiditem";
const meetupId = ({meetData}) => {
  console.log(meetData)
  return (
    <Meetupiditem
      id={meetData.id}
      title={meetData.title}
      address={meetData.address}
      image={meetData.image}
    />
  );
};
export default meetupId;
export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [{ params: { Meetupid: "1" } }, { params: { Meetupid: "2" } }],
  };
};
export const getStaticProps = async (context) => {
  const meetupid = context.params.Meetupid;
  return {
    props: {
      meetData: {
        id: meetupid,
        title: "new1",
        address: "dduiwuuwuhwdowdwoioihwdoiwodhwoidowiiodwohidw",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Red_Fuji_southern_wind_clear_morning.jpg/800px-Red_Fuji_southern_wind_clear_morning.jpg",
      },
    },
  };
};
