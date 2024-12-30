import classes from "./heading.module.scss";

const Heading = (props: {title: string, text: string}) => {
  return (
    <div className={classes.heading}>
      <div className={`${classes.heading__container} ${classes._container}`}>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Heading;
