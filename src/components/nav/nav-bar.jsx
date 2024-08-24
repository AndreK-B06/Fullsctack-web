import "./nav-bar.css";

export default function navBar() {
  return (
    <>
      <nav className="navBar">
        <div className="game-drop-down nav-btn">
          <button button className="nav-btn">
            Game Info
          </button>
        </div>

        <button className="nav-btn">News</button>

        <button button className="nav-btn">
          Download
        </button>

        <section className="nav-btn flex-row">
          <button button className="nav-btn marg-5">
            Sign Up
          </button>
          <img className="icons marg-5" src="/logo.png" alt="user img" />
          <button className="nav-btn marg-5">Log in</button>
        </section>
      </nav>
    </>
  );
}
