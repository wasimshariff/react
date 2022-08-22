function Card(props) {
  const className = props.className;
  return <div class={className}>{props.children}</div>;
}

export default Card;
