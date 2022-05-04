import React, {useState} from "react";
import Header from "../components/Header";
import Cat from "../components/Cat";
import Dog from "../components/Dog";

export default 
function Home({ history }) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    history.push(`/cat/${input}`);
  };

  return (
    <div>
      <Header />
      <div className="home">
        <input
          placeholder="Insert a greeting"
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div className="home">
        <div className="content">
          <div className="cat">
            <Cat />
          </div>
          <div className="dog">
            <Dog />
          </div>
        </div>
      </div>
    </div>
  );
}