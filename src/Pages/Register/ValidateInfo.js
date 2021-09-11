export default function ValidateInfo(values) {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is Invalid";
  }
  if (!values.number) {
    errors.number = "Phonenumber required";
  } else if (values.number.length !== 10) {
    errors.number = "Phonenumber needs to be of 10 digits";
  }
  if(!values.gender){
      errors.gender="Gender required";
  }
  if(!values.dob){
      errors.dob="DOB required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 9) {
    errors.password = "Password needs to be 8 characterss or more";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password do not match";
  }
  return errors;
}
