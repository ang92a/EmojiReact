import "./Card.css";

export const Card = ({ item }) => {
  return (
    <div className="item">
      <p className="item__emoji">{item.symbol}</p>
      <p className="item__title">{item.title}</p>
      <p className="item__keywords">{item.keywords}</p>
    </div>
  );
};
