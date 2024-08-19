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

        <button button className="nav-btn">
          Sign Up
        </button>

        <section className="nav-btn">
          <img src="" alt="user img" />
          <p>Log in</p>
        </section>
      </nav>
    </>
  );
}
