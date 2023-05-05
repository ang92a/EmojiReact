import style from "./Footer.module.css";
import { Button } from "../Button/Button";

export const Footer = ({ setPerPage, perPage, arr, btn, children }) => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.underline}></div>
        <div className={style.container}>
          <div className="btns">
            <Button arr={arr} btn={btn}>
              {children}
            </Button>
          </div>
          <div className={style.PerPage}>
            <label className={style.text}>Per page</label>
            <select
              onChange={(evt) => {
                setPerPage(evt.target.value);
                btn(1);
              }}
              id={style.select}
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={48}>48</option>
            </select>
          </div>
        </div>
      </footer>
    </>
  );
};
