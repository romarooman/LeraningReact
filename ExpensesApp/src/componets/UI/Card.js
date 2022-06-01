import "./Card.css";
//Children props will be content between the opening and closing tags
const Card = (props) => {
    const classes= 'card ' + props.className
  return <div className={classes}>{props.children}</div>;
}

export default Card;
