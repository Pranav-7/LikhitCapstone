import React, { useState } from "react";
import Example1 from "./Example1";

const App = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit =()=>{
    setMessage(message);
  }
  return (
    <>

      <div class="container mx-auto">
        {/* form section starts here */}

        <form className="px-5">
          <div className="mb-3 mt-5">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="message"
              onChange={handleChange}
              value={message}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>

        {/* form section ends here */}
        <div class="text-center mb-4">
          <strong class="text-center">STAFF WELFARE BALANCE DETAIL</strong>
          <br />
          <br />
          <strong class="text-center ">Month of Nov. {message}</strong>
        </div>

        <Example1 year={message}/>
      </div>
    </>
  );
};

export default App;
