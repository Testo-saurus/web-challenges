export default function Link(props) {
  return (
    <a className="navigation__link" href={props.href}>
      {props.children}
    </a>
  );
}
