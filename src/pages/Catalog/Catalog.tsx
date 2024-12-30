import CardList from "../../components/CardList/CardList";
import Feauters from "../../components/Features/Feauters";
import Follow from "../../components/Follow/Follow";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
import Settings from "../../components/Settings/Settings";
import classes from "../../pages/Home/Home.module.scss";

const Catalog = () => {
  return (
    <main>
      <News isBreadCrumbVisible={true} title={"MEN"} />
      <div className={classes._container}>
        <Settings />
        <section className={`${classes.catalog}`}>
          <CardList />
        </section>
      </div>
      <Feauters />
      <Follow />
      <Footer />
    </main>
  );
};

export default Catalog;
