import "./styles.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <a href="#">
          <Logo />
        </a>

        <Navigation>
          <Link href="#homes"> Home </Link>
          <Link href="#about"> About </Link>
          <Link href="impressum"> Impressum </Link>
        </Navigation>

        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Avatar />
        </button>
      </Header>

      <main>content goes here…</main>
    </>
  );
}
