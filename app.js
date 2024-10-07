/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let signupLink = document.querySelector(".signup-link");
let signinLink = document.querySelector(".signin-link");

signupLink.addEventListener("click", () => {
  wrapper.classList.add("signinAnim");
  wrapper.classList.remove("signupAnim");
});

signinLink.addEventListener("click", () => {
  wrapper.classList.add("signupAnim");
  wrapper.classList.remove("signinAnim");
});
