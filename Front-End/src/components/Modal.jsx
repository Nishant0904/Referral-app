import { X } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Modal = () => {
  const [ref, setref] = useState({
    Username: "",
    Refereename: "",
    Useremail: "",
    Refereeemail: "",
  });
  const handleinput = (event) => {
    setref({ ...ref, [event.target.name]: event.target.value });
  };

  function handlesubmit(event) {
    event.preventDefault();
    console.log(ref);
    axios
      .post("http://localhost:3000/api/user", { ref })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.response.data));
  }
  return (
    <>
      <div className="modal-main fixed inset-8  bg-opacity-30 backdrop-blur-sm">
        <div className="mt-10 flex flex-col gap-5 text-white">
          <Link to="/" className="place-self-end text-black">
            <X size={30} />
          </Link>
          <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
            <h1 className="text-3xl font-extrabold">Refer Now!</h1>
            <p className="text-3xl font-bold max-w-md text-center">
              Refer and earn upto Rs 15000
            </p>
            <form onSubmit={handlesubmit}>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                name="Username"
                onChange={handleinput}
              />
              <input
                type="text"
                placeholder="Enter referee's name"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                name="Refereename"
                onChange={handleinput}
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                name="Useremail"
                onChange={handleinput}
              />
              <input
                type="email"
                placeholder="Enter referee's email"
                required
                className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                name="Refereeemail"
                onChange={handleinput}
              />
              <button className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black">
                Send referral
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
