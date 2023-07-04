import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { config } from 'dotenv';
function Layout(props) {
  config()
  console.log(props)
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
