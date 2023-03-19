// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.
function validPass(password){
  return /\d/.test(password) && /[a-z]/i.test(password) && /^[a-z\d]{4,19}$/i.test(password) ? "VALID" : "INVALID";
}