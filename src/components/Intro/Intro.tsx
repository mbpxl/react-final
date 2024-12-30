import classes from "./intro.module.scss";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <div className={`${classes.intro__container} ${classes._container}`}>
        <div className={classes.intro__text}>
          <h1>
            <span className={classes.intro__text_heading}>THE BRAND</span>
            <br /> OF LUXERIOUS{" "}
            <span className={classes.intro__text_red}>FASHION</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
