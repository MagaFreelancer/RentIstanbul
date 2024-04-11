import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";
import "./Auth.scss";
const Auth = () => {
  // const navigate = useNavigate();
  // const location = useLocation()

  // const fromPage = location.state?.from?.pathname || '/'
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const host = "https://artemwebsites.ru/";
  const loginUrl = host + "api/auth/login";
  function onChangeEmail(value) {
    setEmail(value);
  }
  function onChangePassword(value) {
    setPassword(value);
  }
  function onClickSubmit(e) {
    e.preventDefault();
    if (email == "" || password == "") {
      return console.log("неправильные данные");
    } else {
      let loginData = {
        email,
        password,
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
  }
  function onClickLogout() {
    localStorage.removeItem("tokenInfo");
    localStorage.removeItem("userName");
    alert("Авторизационные данные удалены");
  }
  React.useEffect(() => {
    //Отправка формы

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
        <form onSubmit={onClickSubmit}>
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
            <button type="submit" id="submitBtn">
              Войти
            </button>
          </div>
        </form>
        <button id="logoutBtn" onClick={onClickLogout}>
          Выйти
        </button>
        <button id="checkBtn">Проверка</button>
      </div>
    </div>
  );
};

export default Auth;
