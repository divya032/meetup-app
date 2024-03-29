import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../stores/favorites-context";

function MainNavigation() {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All MeetUps</Link>
          </li>
          <li>
            <Link to="/new-meetup">New MeetUp</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
