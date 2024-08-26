import "./nav-bar.css";

export default function navBar() {
  return (
    <>
      <nav className="navBar">
        {/* Drop down for info like classes races and more. */}
        <section className="game-drop-down nav-btn">
          <button button className="nav-btn font-btn">
            Game Info
          </button>
        </section>

        {/* Btn for news, patches and updates */}
        <button className="nav-btn font-btn">News</button>
        {/* Download the game btn */}
        <button button className="nav-btn font-btn">
          Download
        </button>
        {/* section for login and registrations your email */}
        <section className=" flex-row">
          <button button className="nav-btn marg-5 font-btn">
            Sign Up
          </button>
          <button className="nav-btn marg-5 flex-row">
            <img className="icons marg-5" src="/user.png" alt="user img" />
            <p className="font-btn">Login</p>
          </button>
        </section>
      </nav>
    </>
  );
}
