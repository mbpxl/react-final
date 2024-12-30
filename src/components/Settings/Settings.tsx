import React from "react";
import { useDispatch } from "react-redux";
import classes from "./settings.module.scss";
import { setFilter } from "../../data/slices/CardsSlice";

const Settings = () => {
  const dispatch = useDispatch();

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = event.target.value;
    dispatch(setFilter(size));
  };

  return (
    <section className={classes.settings}>
      <div className={`${classes.settings__container} ${classes._container}`}>
        <div className={classes.settings__left}>
          <details className={`${classes.settings__filter} ${classes.filter}`}>
            <summary className={classes.filter__title}>
              <div className={classes.filter__heading}>FILTER</div>
            </summary>

            <div className={classes.filter__content}>
              <details className={classes.filter__sub}>
                <summary>SIZE</summary>
                <ul className={classes.filters__size_list}>
                  {["Все", "XS", "S", "M", "L"].map((size, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="radio"
                          name="size"
                          value={size === "Все" ? "" : size}
                          onChange={handleSizeChange}
                        />
                        {size}
                      </label>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Settings;
