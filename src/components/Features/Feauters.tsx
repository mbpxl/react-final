import classes from "./feaures.module.scss";

import delivery from "../../assets/icons/delivery.svg";
import sales from "../../assets/icons/sales.svg";
import crown from "../../assets/icons/crown.svg";

const Feauters = () => {
  return (
    <section className={classes.advantage}>
      <div className={`${classes.advantage__container} ${classes._container}`}>
        <div className={`${classes.advantage__delivery} ${classes.delivery}`}>
          <div className={classes.advantage__img}>
            <img src={delivery} alt="delivery" />
          </div>
          <div className={classes.advantage__title}>
            <h4>Free Delivery</h4>
          </div>
          <div className={classes.advantage__text}>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>

        <div className={`${classes.advantage__sales} ${classes.sales}`}>
          <div className={classes.advantage__img}>
            <img src={sales} alt="sales" />
          </div>
          <div className={classes.advantage__title}>
            <h4>Sales & discounts</h4>
          </div>
          <div className={classes.advantage__text}>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>

        <div className={`${classes.advantage__quality} ${classes.quality}`}>
          <div className={classes.advantage__img}>
            <img src={crown} alt="quality" />
          </div>
          <div className={classes.advantage__title}>
            <h4>Quality assurance</h4>
          </div>
          <div className={classes.advantage__text}>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feauters;
