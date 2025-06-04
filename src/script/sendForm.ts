import formDataToObj from "./formDataToObj";

const loginForm = document.querySelector(
  ".login-form, .register-form"
) as HTMLFormElement | null;

loginForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userFormData = new FormData(loginForm);
  const userDataObj = formDataToObj(userFormData);

  const loginRequest = await fetch(loginForm.action, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    body: new URLSearchParams(userDataObj),
  });

  const logInResoult: logInResoult = await loginRequest.json();

  if (logInResoult.status === "fail") {
    alert(logInResoult.message);
  } else if (logInResoult.status === "succes") {
    alert("succes");
  }
});
