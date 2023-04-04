import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  // const router=useRouter();
  // const Meetupid=router.query.Meetupid
  // First Option
  const router=useRouter();
  const showdetailhandler=()=>{
    const data=router.push('/' + props.id)
    return data;
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
            <button onClick={showdetailhandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
