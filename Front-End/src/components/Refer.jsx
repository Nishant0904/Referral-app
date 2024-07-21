import { Link } from "react-router-dom";
const Refer = ({ handleclick }) => {
  return (
    <>
      <div className="refer-main flex justify-center align-middle">
        <div className="refer-text flex-col justify-center align-middle">
          <div className="heading">Let's Learn & Earn</div>
          <div className="refer-two flex-col justify-center align-middle">
            <p className="chance">Get a chance to win up-to</p>
            <p className="rs">Rs. 15,000</p>
          </div>
          <div>
            <Link to="/Modal" className="btn btn-primary" onClick={handleclick}>
              Refer
            </Link>
          </div>
        </div>
        <div className="refer-img">
          <img
            className="refer-img"
            src="https://static-perf1.zupee.com/blog-images/uploads/2023/05/refer-and-earn-apps-in-india.webp"
            alt="img not found"
            style={{ height: 350, width: 393 }}
          />
        </div>
      </div>
    </>
  );
};
export default Refer;
