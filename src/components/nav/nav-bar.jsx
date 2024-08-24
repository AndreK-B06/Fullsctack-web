import "./nav-bar.css";

export default function navBar() {
  return (
    <>
      <nav className="navBar">
        <div className="game-drop-down nav-btn">
          <button button className="nav-btn font-btn">
            Game Info
          </button>
        </div>

        <button className="nav-btn font-btn">News</button>

        <button button className="nav-btn font-btn">
          Download
        </button>

        <section className=" flex-row">
          <button button className="nav-btn marg-5 font-btn">
            Sign Up
          </button>
          <button className="nav-btn marg-5 flex-row">
            <img className="icons marg-5" src="/user.png" alt="user img" />
            <p className="font-btn">Logg in</p>
          </button>
        </section>
      </nav>
    </>
  );
}
