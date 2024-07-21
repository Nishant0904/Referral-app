import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header-main flex flex-col justify-center align-middle">
        <div className="nav flex justify-center align-middle">
          Navigate your ideal career path with tailored expert advice
          <div className="contact-button">
            <button>Contact Expert</button>
          </div>
        </div>
        <div className="header-sec flex justify-around align-middle">
          <div className="left flex justify-center align-middle">
            <img
              class="w-full"
              alt="logo"
              src="https://accredian.com/Rcimages/logo.png"
              style={{ height: 36.66, width: 125 }}
            ></img>
            <div>
              <div class="dropdown">
                <button
                  class="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right flex justify-center align-middle">
            <button className="btn">Refer & Earn</button>
            <button className="btn">Resources</button>
            <button className="btn">About Us</button>
            <Link to="/Login" className="btn login">
              Login
            </Link>
            <button className="btn btn-primary">Try for free</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
