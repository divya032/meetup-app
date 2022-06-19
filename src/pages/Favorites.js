import { useContext } from "react";
import FavoritesContext from "../stores/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if (!favoritesContext.totalFavorites) {
    content = <p>You don't have any favorites yet. Start adding some!! </p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
