import { useSelector } from "react-redux";
import { MixCard } from "../Cards/MixCard";

function Mixes() {
  const mixes = useSelector((state) => state.price.mixes);

  return (
    <div className="wrapperSection">
      <h4 className="headSection">Готовые Мискы</h4>
      <div className="containerFlex">
        {mixes.map((card) => (
          <MixCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Mixes;
