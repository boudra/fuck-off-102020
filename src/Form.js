import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchGreeting} from "./actions";

export default function () {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const apiGreeting = useSelector(state => state.greeting);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(fetchGreeting(name));
  }

  return (
    <div className="form-container">
      <form className="form-box" action="" onSubmit={onSubmit}>
        <h1>What's your name?</h1>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <button>Submit</button>
        </div>
        <h1 className="greeting">{apiGreeting}</h1>
      </form>
    </div>
  );
}
