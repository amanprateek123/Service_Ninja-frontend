// import React from "react";
// import "./Login.css";

// const Login = () => {
//   return (
//     <>
//       <div class="container">
//         <div class="page-left">
//           <div class="header">
//             <div class="header1">Welcome Back</div>
//             <div class="header2">
//               Log in to your account using Phone Number and password
//             </div>
//           </div>
//           <div class="form-page">
//             <input
//               class="email-add"
//               type="tel"
//               placeholder="Phone Number"
//               required
//             />
//             <input
//               class="pswd"
//               type="password"
//               placeholder="Password"
//               required
//             />
//             <p>
//               <a className="a" href="#">
//                 {" "}
//                 Forgot Password ?
//               </a>
//             </p>
//             <button class="login"> LOGIN </button>
//           </div>
//         </div>
//         <div class="page-right"></div>
//       </div>
//     </>
//   );
// };

// export default Login;

// import React from "react";
// import "./Login.css";

// const Login = () => {
//   return (
//     <>
//       <div class="container">
//         <div class="pageleft">
//           <div class="header">
//             <div class="header1">Welcome Back</div>
//             <div class="header2">
//               Log in to your account using Phone Number and password
//             </div>
//           </div>
//           <div class="formpage">
//             <input
//               class="emailadd"
//               type="tel"
//               placeholder="Phone Number"
//               required
//             />
//             <input
//               class="pswd"
//               type="password"
//               placeholder="Password"
//               required
//             />
//             <p>
//               <a className="a" href="#">
//                 {" "}
//                 Forgot Password ?
//               </a>
//             </p>
//             <button class="login"> LOGIN </button>
//           </div>
//         </div>
//         <div class="pageright"></div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React from "react";
import cssclasses from "./Login.module.scss";

const Login = () => {
  return (
    <>
      <div className={cssclasses.container}>
        <div className={cssclasses.pageleft}>
          <div className={cssclasses.header}>
            <div className={cssclasses.header1}>Welcome Back</div>
            <div className={cssclasses.header2}>
              Log in to your account using Phone Number and password
            </div>
          </div>
          <div className={cssclasses.formpage}>
            <input
              className={cssclasses.emailadd}
              type="tel"
              placeholder="Phone Number"
              required
            />
            <input
              className={cssclasses.pswd}
              type="password"
              placeholder="Password"
              required
            />
            <p>
              <a className={cssclasses.a} href="#">
                {" "}
                Forgot Password ?
              </a>
            </p>
            <button className={cssclasses.login}> LOGIN </button>
          </div>
        </div>
        <div className={cssclasses.pageright}></div>
      </div>
    </>
  );
};

export default Login;
