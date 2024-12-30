import { NavLink } from "react-router-dom";
import classes from "./news.module.scss";

const News = (props: {isBreadCrumbVisible: boolean, title: string}) => {
  return (
    <section className={classes.news}>
      <div className={`${classes.news__container} ${classes._container}`}>
        <div className={classes.news__title}>
          <h1>{props.title}</h1>
        </div>
        {
          props.isBreadCrumbVisible ? (
            <div className={classes.news__bread_crumb}>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <a href="#">MEN</a>
            </li>
            <li>
              <a href="product.html">NEW ARRIVALS</a>
            </li>
          </ul>
        </div>
          ) : (null)
        }
      </div>
    </section>
  );
};

export default News;
