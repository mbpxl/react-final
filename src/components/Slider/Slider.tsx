import classes from "./slider.module.scss";
import slider_photo from "../../assets/icons/slider-photo.jpg";

const Slider = () => {
  return (
    <section className={classes.slider}>
      <div className={classes.slider__body}>
        <img className={classes.slider__img} src={slider_photo} alt="slider" />

        <div className={`${classes.slider__btn} ${classes.btn}`}>
          <button className={classes.btn__left}>
            <svg
              width="13"
              height="23"
              viewBox="0 0 13 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={classes.btn__fill}
                d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"
                fill="black"
              />
            </svg>
          </button>
          <button className={classes.btn__right}>
            <svg
              width="13"
              height="23"
              viewBox="0 0 13 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={classes.btn__fill}
                d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
