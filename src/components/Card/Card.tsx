import classes from "./Card.module.scss";
import binCart from "../../assets/icons/bin-card.svg";
import { NavLink } from "react-router-dom";
import cartImg1 from "../../assets/icons/card-1.jpg";
import cartImg2 from "../../assets/icons/card-3.jpg";
import { useDispatch } from "react-redux";
import { addToBin } from "../../data/slices/BinSlice";

const Cart = ({ id, name, size, price }: { id: string; name: string; size: string; price: number }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToBin({ id, name, price, color: "default", size, quantity: 1 }));
  };

  return (
    <>
      <NavLink className={classes.catalog__card} to={"/product"}>
        <div className={classes.catalog__img}>
          <img src={size == "S" ? cartImg1 : cartImg2} alt="card-photo" />
          <div className={classes.catalog__overlay}>
            <button onClick={handleAddToCart}>
              <img src={binCart} alt="bin" />
              <p>Add to Cart</p>
            </button>
          </div>
        </div>

        <h4>ELLERY X M'O CAPSULE</h4>
        <p>
          Known for her sculptural takes on traditional tailoring, Australian
          arbiter of cool Kym Ellery teams up with Moda Operandi.
        </p>
        <h3>$52.00</h3>
      </NavLink>
    </>
  );
};

export default Cart;
