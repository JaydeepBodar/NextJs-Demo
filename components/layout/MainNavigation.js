import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { Fragment } from "react";
function MainNavigation(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>NextJs Demo</div>
        <nav>
          <ul>
            <li>
              <Link href="/">All Meetups</Link>
            </li>
            <li>
              <Link href="/Meetup">Add New Meetup</Link>
            </li>
            <li>
              <Link href="/Meetupdata">Meetup data</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}

export default MainNavigation;
