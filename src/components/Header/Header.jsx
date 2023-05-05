import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <a href="google" className={style.link}>
        <h1 className={style.title}>Emoji Finder</h1>
        <span className={style.subtitle}>Find emoji by keywords</span>
      </a>
    </header>
  );
};
