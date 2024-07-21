import { Link } from "react-router-dom";
const Buttons = () => {
  return (
    <>
      <div className="flex justify-center align-middle buttons-cont">
        <div className="buttons-sec flex gap-6 justify-center align-middle items-center bg-slate-300">
          <div>
            <Link to="/" className="btn colorbtn">
              Refer
            </Link>
          </div>
          <div>
            <Link to="/Benefits" className="btn colorbtn">
              Benefits
            </Link>
          </div>
          <div>
            <Link to="/FAQs" className="btn colorbtn">
              FAQ's
            </Link>
          </div>
          <div>
            <Link to="/Support" className="btn colorbtn">
              Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Buttons;
