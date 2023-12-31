import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="d-flex justify-content-center mb-4">
      <div className="col-12 col-lg-10 align-items-center">
        <div className="card bg-peach">
          <h4 className="card-header bg-#00296B text-dark p-2 align-cente mx-auto">
            Sign Up
          </h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="" onSubmit={handleFormSubmit}>
                <div className="signup col-sm-2 col-form-label align-items-center">
                <input
                  className="signInput form-input p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <div className="break"/>
                <input
                  className="signInput form-input p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="signInput form-input p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"
                  placeholder="password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <div className="col-auto">
                  <span id="passwordHelpInline" className="form-text">
                    Password must be at least 8 characters long. 
                  </span>
                </div>
                <button
                  className="content-right bg-dpurple text-light"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
