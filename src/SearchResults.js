import Users from "./Users";
import Favorites from "./Favorites";
import Tweets from "./Tweets";

const SearchResults = ({
  userReturned,
  addFavorite,
  removeFavorite,
  favoriteUsers,
  tweetsReturned,
  getUserTweets,
}) => {
  return (
    <div className="container mt-4 ms-4">
      <div className="row">
        <Favorites
          favoriteUsers={favoriteUsers}
          removeFavorite={removeFavorite}
          getUserTweets={getUserTweets}
        />
        <div className="col-auto">
          {userReturned && (
            <Users userReturned={userReturned} addFavorite={addFavorite} />
          )}
          {tweetsReturned && <Tweets tweetsReturned={tweetsReturned} />}
        </div>
      </div>
    </div>
  );
};
export default SearchResults;
