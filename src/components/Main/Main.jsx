import style from "./Main.module.css";
import { Card } from "../Card/Card";

export const Main = ({ arr, Istr, Iend }) => {
  console.log(arr);

  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.grid}>
          {arr
            .map((item) => <Card key={item.title} item={item} />)
            .slice(Istr, Iend)}
        </div>
      </div>
    </main>
  );
};
