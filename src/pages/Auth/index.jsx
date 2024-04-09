import React from "react";
import $ from "jquery";
import "./Auth.scss";
const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const emailAnnotationEl = document.getElementById("emailAnnotation");
  const passwordAnnotationEl = document.getElementById("passwordAnnotation");
  const host = "http://artemhome4.ddns.net:89/";
  const loginUrl = host + "api/auth/login";
  function onChangeEmail(value) {
    setEmail(value);
  }
  function onChangePassword(value) {
    setPassword(value);
  }
  React.useEffect(() => {
    //Отправка формы
    document.getElementById("submitBtn").addEventListener("click", (e) => {
      e.preventDefault();
      let loginEmail = document.getElementById("loginEmail").value;
      let loginPassword = document.getElementById("loginPassword").value;

      if (loginEmail == "" || loginPassword == "") {
        emailAnnotationEl.innerText = "заполни поле";
        emailAnnotationEl.style.display = "block";
        passwordAnnotationEl.innerText = "заполни поле";
        passwordAnnotationEl.style.display = "block";
      } else {
        let loginData = {
          email: loginEmail,
          password: loginPassword,
        };
        $.ajax({
          url: loginUrl,
          type: "POST",
          data: JSON.stringify(loginData),
          contentType: "application/json;charset=utf-8",

          success: function (data) {
            localStorage.setItem("tokenInfo", data.message);
            localStorage.setItem("userName", data.userName);
            alert(
              `Вы вошли, авторизационные данные установлены \n\n${data.message}`
            );
          },
          error: function (data) {
            alert(data.responseJSON.message);
          },
        });
      }
    });
    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("tokenInfo");
      localStorage.removeItem("userName");
      alert("Авторизационные данные удалены");
    });
    //Проверить
    document.getElementById("checkBtn").addEventListener("click", (e) => {
      getUsers(e);
    });
  }, []);

  function getUsers(/*evt*/) {
    // let url = host+'api/users/getusers';
    let token = localStorage.getItem("tokenInfo");
    // let insertionElem = evt.target.parentNode;
    $.ajax({
      url: host + "api/users/getusers",
      type: "GET",
      dataType: "json",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: function (data) {
        console.dir(data);
        let userEmails = "";
        data.forEach((element) => {
          userEmails += `\n${element.email} ${element.userName}`;
        });
        alert(
          `Вот список всех пользователей(Доступ разрешён):\n ${userEmails}`
        );
      },
      error: function (err) {
        console.log(err);
        alert(`Вы не авторизованы(Доступ запрещён). Подробности в консоли`);
      },
    });
  }

  return (
    <div className="auth">
      <div className="container auth__container">
        <form>
          <div>
            <label htmlFor="loginEmail" className="form__label">
              Ваш Email:
            </label>
            <p id="emailAnnotation"></p>
            <input
              value={email}
              onChange={(e) => onChangeEmail(e.target.value)}
              type="email"
              id="loginEmail"
              placeholder=" "
            />
          </div>
          <div>
            <label htmlFor="loginPassword">Ваш пароль: </label>
            <p id="passwordAnnotation"></p>
            <input
              value={password}
              onChange={(e) => onChangePassword(e.target.value)}
              type="password"
              id="loginPassword"
              placeholder=" "
            />
          </div>
          <div>
            <button id="submitBtn">Войти</button>
          </div>
        </form>
        <button id="logoutBtn">Выйти</button>
        <button id="checkBtn">Проверка</button>
      </div>
    </div>
  );
};

export default Auth;
