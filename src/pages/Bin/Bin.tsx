import News from "../../components/News/News";
import classes from "./bin.module.scss";
import photo_cart1 from "../../assets/icons/photo-cart1.jpg";
import close from "../../assets/icons/close.svg";
import Follow from "../../components/Follow/Follow";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { clearBin, removeFromBin } from "../../data/slices/BinSlice";

const Bin = () => {
  const bin = useSelector((state: RootState) => state.binList.bin);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromBin(id));
  };

  const handleClearCart = () => {
    dispatch(clearBin());
  };

  const total = bin.reduce((sum, item) => {
    const itemPrice = Number(item.price);
    if (isNaN(itemPrice)) return sum;
    return sum + itemPrice * item.quantity;
  }, 0);

  return (
    <main>
      <News isBreadCrumbVisible={false} title={"SHOPPING CART"} />
      <section className={classes.order}>
        <div className={`${classes.order__container} ${classes._container}`}>
          <div className={`${classes.order__cart} ${classes.cart}`}>
            <div className={classes.cart__buy}>
              {bin.map((good: any) => (
                <div className={classes.cart__upper} key={good.id}>
                  <img
                    src={photo_cart1}
                    className={classes.cart__photo}
                    alt="cart"
                  />
                  <div className={classes.cart__description}>
                    <div className={classes.cart__title}>
                      <h2>{good.name}</h2>
                      <button onClick={() => handleRemove(good.id)}>
                        <img src={close} alt="close" />
                      </button>
                    </div>

                    <h3 className={classes.cart__price}>
                      Price: <span>{good.price}</span>
                    </h3>
                    <h3 className={classes.cart__color}>
                      Color: <span>{good.color}</span>
                    </h3>
                    <h3 className={classes.cart__size}>
                      Size: <span>{good.size}</span>
                    </h3>
                    <div className={classes.cart__quantity}>
                      <h3>Quantity</h3>
                      <input
                        type="text"
                        className={classes.cart__form}
                        value="2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${classes.cart__function} ${classes.function}`}>
              <button className={classes.function__btn} onClick={handleClearCart}>
                CLEAR SHOPPING CART
              </button>
              <button className={classes.function__btn}>
                CONTINUE SHOPPING
              </button>
            </div>
          </div>

          <div className={`${classes.order__data} ${classes.data}`}>
            <h2 className={classes.data__title}>SHIPPING ADDRESS</h2>
            <input type="text" placeholder="City" />
            <input
              type="text"
              className={classes.data__config}
              placeholder="State"
            />
            <input type="text" placeholder="Postcode / Zip" />

            <button className={classes.data__confirm}>GET A QUOTE</button>

            <div className={classes.data__global}>
              <h3>
                sub total <span>{total}</span>
              </h3>
              <h4>
                GRAND TOTAL <span>{total}</span>
              </h4>
              <div className={classes.data__bd}>
                <div className={classes.data__border}></div>
              </div>
              <button className={classes.data__global_ok}>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </section>
      <Follow />
      <Footer />
    </main>
  );
};

export default Bin;
