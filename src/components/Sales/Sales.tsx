import classes from "./sales.module.scss";

const Sales = () => {
  return (
    <div className={classes.sales}>
      <div className={`${classes.sales__container} ${classes._container}`}>
        <div className={classes.sales__wrap}>
          <div className={classes.sales__women}>
            <h3>30% OFF</h3>
            <h2>FOR WOMEN</h2>
          </div>
          <div className={classes.sales__men}>
            <h3>HOT DEAL</h3>
            <h2>FOR MEN</h2>
          </div>
          <div className={classes.sales__kids}>
            <h3>NEW ARRIVALS</h3>
            <h2>FOR KIDS</h2>
          </div>
        </div>

        <div className={classes.sales__acs}>
          <h3>LUXERIOUS & TRENDY</h3>
          <h2>ACCESORIES</h2>
        </div>
      </div>
    </div>
  );
};

export default Sales;
