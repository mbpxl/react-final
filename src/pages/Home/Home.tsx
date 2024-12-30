import classes from "./Home.module.scss";

import Heading from "../../components/Heading/Heading";
import Intro from "../../components/Intro/Intro";
import Sales from "../../components/Sales/Sales";
import Cart from "../../components/Card/Card";
import { NavLink } from "react-router-dom";
import Feauters from "../../components/Features/Feauters";
import Follow from "../../components/Follow/Follow";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Intro />
      <div className={classes._container}>
        <Sales />
        <Heading title={"Fetured Items"} text={"Shop for items based on what we featured in this week"}/>
        <section className={`${classes.catalog}`}>
          <div
            className={`${classes.catalog__container} ${classes._card_container}`}
          >
            <Cart size={"S"} />
            <Cart size={"S"} />
            <Cart size={"M"} />
            <Cart size={"M"} />
            <Cart size={"M"} />
            <Cart size={"M"} />
          </div>
        </section>
        <section className={classes.see_all}>
          <div
            className={`${classes.see_all__container} ${classes._container}`}
          >
            <NavLink to="/catalog">Browse All Product</NavLink>
          </div>
        </section>
      </div>
      <Feauters />
      <Follow />
      <Footer />
    </main>
  );
};

export default Home;
