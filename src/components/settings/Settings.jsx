import React, { useState } from "react";
import LockIcon from "../../img/lock.png";
import ThreadsIcon from "../../img/threadslogo.svg";
import Hidden from "../../img/hidden.png";
import PostIcon from "../../img/edit.png";
import Block from "../../img/blockicon.png";
import Dislike from "../../img/nolove.png";
import "./Settings.css";

const Settings = () => {
  const [isActivePrivacy, setIsActivePrivacy] = useState(true);
  const [isActiveAccount, setIsActiveAccount] = useState(false);

  const handleToggle = (type) => {
    if (type === "privacy") {
      setIsActivePrivacy(true);
      setIsActiveAccount(false);
    } else if (type === "account") {
      setIsActivePrivacy(false);
      setIsActiveAccount(true);
    }
  };

  return (
    <div className="privacy-settings-threads">
    <div className="header">
      <div
        className={`button ${isActivePrivacy ? "active" : ""}`}
        onClick={() => handleToggle("privacy")}
      >
        Конфиденциальность
      </div>
      <div
        className={`button ${isActiveAccount ? "active" : ""}`}
        onClick={() => handleToggle("account")}
      >
        Аккаунт
      </div>
      <div className="button">Справка</div>
    </div>

    <div className="content">
      {isActivePrivacy && (
        <div>
          {/* Контент для Конфиденциальности */}
          <div className="section">
            <div>
              <div className="icon">
                <img src={LockIcon} alt="" />
              </div>
              <div className="text"><p>Закрытый профиль</p></div>
            </div>
            <div>
              <div
                className={`slider-container ${
                  isActivePrivacy ? "active" : ""
                }`}
              >
                <div
                  className="slider-button"
                  onClick={() => handleToggle("privacy")}
                ></div>
              </div>
            </div>
          </div>

            <div className="section">
              <div>
                <div className="icon">
                  <img src={ThreadsIcon} alt="" />
                </div>
                <div className="text">Упоминания</div>
              </div>
              <div>
                <div className="link3">Профили, на которые вы подписаны</div>
              </div>
            </div>

            <div className="section">
              <div>
                <div className="icon">
                  <img src={Hidden} alt="" />
                </div>
              </div>
              <div>
                <div className="text">Скрытые слова</div>
              </div>
            </div>

            <hr />

            <div className="other-settings">
              <div className="text">Другие настройки конфиденциальности</div>
              <p className="textP">
                Некоторые настройки, например установленные ограничения,
                применяются и к Threads, и к Instagram. Управлять ими можно в
                Instagram.
              </p>
            </div>
            <hr />
            <div className="section">
              <div>
                <div className="icon">
                  <img src={Block} alt="" />
                </div>
                <div className="text">Заблокированные профили</div>
              </div>
              <div>
                <div className="posticon">
                  <img className="posticon" src={PostIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="section">
              <div>
                <div className="icon">
                  <img id="dislikeimg" src={Dislike} alt="" />
                </div>
                <div className="text">
                  Скрыть число отметок "Нравится" и поделившийся
                </div>
              </div>
              <div>
                <div className="posticon">
                  <img className="posticon" src={PostIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}

        {isActiveAccount && (
          <div>
            {/* Контент для Аккаунта */}
            <div>
              <div>
                <div className="text">Использовать без профиля</div>
              </div>
            </div>

            <div>
              <div>
                <div className="text">
                  Деактивировать или удалить профиль
                </div>
              </div>
              <hr />
            </div>

            <div className="other-settings">
              <div className="text">Другие настройки аккаунта</div>
              <p className="textP">
                Некоторые настройки, например пользователь или пароль,
                применяются к Threads и к Instagram. Управлять ими можно в
                Instagram.
              </p>
            </div>
            <hr />

            <div className="section">
              <div>
                <div className="icon">
                </div>
                <div className="text">Личная информация</div>
              </div>
              <div>
                <div className="posticon">
                  <img className="posticon" src={PostIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="section">
              <div>
                <div className="icon">
                </div>
                <div className="text">Родительский контроль</div>
              </div>
              <div>
                <div className="posticon">
                  <img className="posticon" src={PostIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="section">
              <div>
                <div className="icon">
                </div>
                <div className="text">Безопасность</div>
              </div>
              <div>
                <div className="posticon">
                  <img className="posticon" src={PostIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="section">
              <div>
                <div className="icon">
                </div>
                <div className="text">Статус аккаунта</div>
              </div>
              <div>
                <div className="posticon">
                  <img className="posticon" src={PostIcon} alt="" />
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
