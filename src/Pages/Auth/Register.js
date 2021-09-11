import React from "react";
import { useState } from "react";
import useForm from "./useForm";
import ValidateInfo from "./ValidateInfo";
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [visible, setvisible] = useState(false);
  const { handleChange, values } = useForm();
  const [errors, seterrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    seterrors(ValidateInfo(values));
    console.log(e);
    // setName(values.username);
    // setPassword(values.password);
    // setEmail(values.email);
    // setPhonenum(values.number);
    // setGender(values.gender);
    // setDob(values.dob);
    // let formData=new formData();
    // formData.append(name);
    // formData.append(password);
    // formData.append(email);
    // formData.append(phonenum);
    // formData.append(gender);
    // formData.append(dob);
    // console.log(formData);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10rem",
        }}
      >
        <h1 style={{ padding: "1rem" }}>Sign Up</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              name="username"
              placeholder=" "
              id="First_input"
              value={values.username}
              onChange={handleChange}
            />
            <label for="First_input">Enter Name</label>
            <div>{errors.username ? <p>{errors.username}</p> : null}</div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder=" "
              id="Email_input"
              value={values.email}
              onChange={handleChange}
            />
            <label for="Email_input">Enter Email</label>
            <div>{errors.email ? <p>{errors.email}</p> : null}</div>
          </div>
          <div>
            <input
              type="number"
              name="number"
              placeholder=" "
              id="Number_input"
              value={values.number}
              onChange={handleChange}
            />
            <label for="Email_input">Enter Phone Number</label>
            <div>{errors.number ? <p>{errors.number}</p> : null}</div>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="Gender_input"
              value={values.gender}
              onChange={handleChange}
            />
            <label for="Gender_input">Male</label>
            <input
              type="radio"
              name="gender"
              id="Gender_input"
              value={values.gender}
              onChange={handleChange}
            />
            <label for="Gender_input">Female</label>
            <label style={{ paddingLeft: "4.8rem" }} for="Gender_input">
              Gender
            </label>
            <div>{errors.gender ? <p>{errors.gender}</p> : null}</div>
          </div>
          <div>
            <input
              type="date"
              name="dob"
              id="Dob_input"
              value={values.dob}
              onChange={handleChange}
            />
            <label style={{ paddingLeft: "2rem" }} for="Dob_input">DOB</label>
            <div>{errors.dob ? <p>{errors.dob}</p> : null}</div>
          </div>
          <div>
            <input
              type={visible ? "text" : "password"}
              name="password"
              placeholder=" "
              id="Pass_input"
              value={values.password}
              onChange={handleChange}
            />
            <label for="Pass_input">Enter Password</label>
            <label
              onClick={() => setvisible((visibility) => !visibility)}
              style={{
                color: "grey",
                position: "relative",
                left: "170px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              eye
              {/* <PasswordToggle vis={visible} /> */}
            </label>
            <div>{errors.password ? <p>{errors.password}</p> : null}</div>
          </div>
          <div>
            <input
              type="password"
              name="password2"
              placeholder=" "
              id="CPass_input"
              value={values.password2}
              onChange={handleChange}
            />
            <label for="CPass_input">Confirm Password</label>
            <div>{errors.password2 ? <p>{errors.password2}</p> : null}</div>
          </div>
          <br></br>
          <div>
            <button type="submit" onSubmit={handleSubmit}>
              Sign Up
            </button>
          </div>
          <div>
            <button>
              <span
                style={{
                  textAlign: "center",
                  color: "#2774F0",
                  fontWeight: "bold",
                }}
              >
                Existing User? Log in
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
