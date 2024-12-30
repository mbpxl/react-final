import classes from "./follow.module.scss";
import photo_user from "../../assets/icons/profile-photo.png";

const Follow = () => {
  return (
    <section className={classes.follow}>
      <div className={`${classes.follow__container} ${classes._container}`}>
        <div className={classes.follow__review}>
          <img src={photo_user} alt="profile" />

          <h5>
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
            <i>a pulvinar purus condimentum</i>“
          </h5>
        </div>

        <div className={classes.follow__subscribe}>
          <h3>SUBSCRIBE</h3>
          <h4>FOR OUR NEWLETTER AND PROMOTION</h4>

          <div className={classes.follow__subscribe_send}>
            <input type="email" placeholder="Enter Your Email" />
            <div className={classes.follow__subscribe_submit}>
              <a href="#">Subscibe</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
