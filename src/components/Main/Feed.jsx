import { useSelector } from "react-redux";
import { FeedCard } from "../Cards/FeedCard";

export const Feed = () => {
  const feed = useSelector(state => state.price.feed)
  return (
    <div className="wrapperSection">
      <h4 className="headSection">Зерна</h4>
      <div className="containerFlex">
      {feed.map(card => (
          <FeedCard key={card.id} {...card}/>
        )) }
      </div>
    </div>
  );
};
