import React from "react";
import { useState } from "react";
import useForm from "./useForm";
import ValidateInfo from "./ValidateInfo";
import cssclassses from "./Register.module.scss";
import PasswordToggle from "./Passwordtoggle";
import { Link } from "react-router-dom";
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
    <>
      <div className={cssclassses.container}>
        <div className={cssclassses.pageleft}>
          <h1 className={cssclassses.header1}>Sign Up</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <input
                type="text"
                name="username"
                className={!errors.username ? cssclassses.username : cssclassses.errusername}
                placeholder="Enter Name"
                id="First_input"
                value={values.username}
                onChange={handleChange}
              />
              {/* <div>{errors.username ? <p>{errors.username}</p> : null}</div> */}
            </div>
            <div>
              <input
                type="email"
                name="email"
                className={!errors.email ? cssclassses.emailadd : cssclassses.erremailadd}
                placeholder="Enter Email"
                id="Email_input"
                value={values.email}
                onChange={handleChange}
              />
              {/* <div>{errors.email ? <p>{errors.email}</p> : null}</div> */}
            </div>
            <div>
              <input
                type="number"
                name="number"
                className={!errors.number ? cssclassses.number : cssclassses.errnumber}
                placeholder="Enter Phonenumber "
                id="Number_input"
                value={values.number}
                onChange={handleChange}
              />
                {/* <label for="Gender_input">hvjhvjhvjhFemale</label> */}
              {/* <div>{errors.number ? <p>{errors.number}</p> : null}</div> */}
            </div>
            <div className={cssclassses.gender}>
              <input
                type="radio"
                name="gender"
                className={cssclassses.inp}
                id="Gender_input"
                value={values.gender}
                onChange={handleChange}
              />
              <label className={cssclassses.gen}  for="Gender_input">Male</label>
              <input
                type="radio"
                name="gender"
                className={cssclassses.inp}
                id="Gender_input"
                value={values.gender}
                onChange={handleChange}
              />
              <label className={cssclassses.gen} for="Gender_input">Female</label>
              {/* <div>{errors.gender ? <p>{errors.gender}</p> : null}</div> */}
            </div>
            <div>
              <input
                type="date"
                name="dob"
                className={!errors.dob ? cssclassses.dob : cssclassses.errdob}
                id="Dob_input"
                value={values.dob}
                onChange={handleChange}
              />
              {/* <div>{errors.dob ? <p>{errors.dob}</p> : null}</div> */}
            </div>
            <div>
              <input
                type={visible ? "text" : "password"}
                name="password"
                className={!errors.password ? cssclassses.pswd : cssclassses.errpswd}
                placeholder="Enter Password"
                id="Pass_input"
                value={values.password}
                onChange={handleChange}
              />
              <label
                className={cssclassses.header2}
                onClick={() => setvisible((visibility) => !visibility)}
                style={{
                  color: "grey",
                  position: "relative",
                  top:"5px",
                  left: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <PasswordToggle vis={visible} />
              </label>
              {/* <div>{errors.password ? <p>{errors.password}</p> : null}</div> */}
            </div>
            <div>
              <input
                type="password"
                name="password2"
                className={!errors.password2 ? cssclassses.pswd : cssclassses.errpswd}
                placeholder="Confirm Password"
                id="CPass_input"
                value={values.password2}
                onChange={handleChange}
              />
              {/* <div>{errors.password2 ? <p>{errors.password2}</p> : null}</div> */}
            </div>
            <br></br>
            <div>
              <button className={cssclassses.register} type="submit" onSubmit={handleSubmit}>
                Sign Up
              </button>
            </div>
            <div>
              <Link to="/login">
              <button className={cssclassses.login}>
                <span>                
                  Existing User? Log in
                </span>
              </button>
              </Link>
            </div>
          </form>
        </div>
        <div className={cssclassses.pageright}></div>
      </div>
    </>
  );
};

export default Register;
