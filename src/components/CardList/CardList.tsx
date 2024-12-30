import React from "react";
import { useSelector } from "react-redux";
import Cart from "../Card/Card";
import classes from "./CardList.module.scss";
import { RootState } from "../../data/store";

interface CardListProps {
  cards?: { id: string; heading: string; size: string; price: number }[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  const reduxCards = useSelector((state: RootState) => state.cardList.cards);
  const displayCards = cards || reduxCards;

  return (
    <div className={`${classes.catalog__container} ${classes._card_container}`}>
      {displayCards.map((card) => (
        <Cart key={card.id} size={card.size} id={""} name={""} price={card.price} />
      ))}
    </div>
  );
};

export default CardList;
