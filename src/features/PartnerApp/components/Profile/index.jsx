import React, { useState } from "react";
import {
  FaPlusCircle,
  FaTimesCircle,
  FaPortrait,
  FaHeartbeat,
  FaPowerOff,
  FaLock,
  FaUserLock,
  FaAngleLeft,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoSettings, IoLocation } from "react-icons/io5";
import avtDefault from "assets/image/avartar/slide1.jpg";
import "./style.scss";

export default function Profile() {
  const [showSetting, setShowSetting] = useState({
    bonusProgram: false,
    takeCare: false,
    support: false,
    setting: false,
    quit: false,
    term: false,
  });

  const handleOpenFunction = (string) => {
    let newSetting = showSetting;
    switch (string) {
      case "bonusProgram":
        setShowSetting({
          ...newSetting,
          bonusProgram: !newSetting.bonusProgram,
        });
        break;
      case "takeCare":
        setShowSetting({ ...newSetting, takeCare: !newSetting.takeCare });
        break;
      case "support":
        setShowSetting({ ...newSetting, support: !newSetting.support });
        break;
      case "setting":
        setShowSetting({ ...newSetting, setting: !newSetting.setting });
        break;
      case "quit":
        setShowSetting({ ...newSetting, quit: !newSetting.quit });
        break;
      case "term":
        setShowSetting({ ...newSetting, term: !newSetting.term });
        break;
      default:
        return;
    }
    // if (string === "setting") {
    //   setShowSetting(!showSetting);
    // } else {
    //   return;
    // }
  };
  return (
    <div className="profile">
      <div className="profile-head">
        <div className="profile-head__avt">
          <img src={avtDefault} alt="avatar" />
        </div>
        <div className="profile-head__info">
          <div>Phùng Hoàng Đại</div>
          <div>ID: 1254356466</div>
        </div>
      </div>

      <div className="profile-content">
        <ul className="profile-content__list">
          <li>
            <div
              className="profile-content__list-item"
              onClick={() => {
                handleOpenFunction("bonusProgram");
              }}
            >
              <FaPlusCircle className="list-item__icon" />
              <span>Chương trình thưởng đơn</span>
            </div>
          </li>
          <li>
            <div
              className="profile-content__list-item"
              onClick={() => {
                handleOpenFunction("takeCare");
              }}
            >
              <FaHeartbeat className="list-item__icon" />
              <span>Chăm sóc tài xế</span>
            </div>
          </li>
          <li>
            <div
              className="profile-content__list-item"
              onClick={() => {
                handleOpenFunction("support");
              }}
            >
              <BiSupport className="list-item__icon" />
              <span>Hỗ trợ</span>
            </div>
          </li>
          <li>
            <div
              className="profile-content__list-item"
              onClick={() => {
                handleOpenFunction("setting");
              }}
            >
              <IoSettings className="list-item__icon" />
              <span>Cài đặt</span>
            </div>
          </li>
          <li>
            <div
              className="profile-content__list-item"
              onClick={() => {
                handleOpenFunction("quit");
              }}
            >
              <FaTimesCircle className="list-item__icon" />
              <span>Nghỉ việc</span>
            </div>
          </li>
          <li>
            <div
              className="profile-content__list-item"
              onClick={() => {
                handleOpenFunction("term");
              }}
            >
              <FaPortrait className="list-item__icon" />
              <span>Điều khoản sử dụng</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="profile-logout">
        <FaPowerOff />
        <span>Đăng xuất</span>
      </div>

      {showSetting.setting ? (
        <Setting callBackCloseSetting={handleOpenFunction} />
      ) : showSetting.bonusProgram ? (
        <BonusProgram callBackCloseSetting={handleOpenFunction} />
      ) : showSetting.takeCare ? (
        <TakeCareOfDriver callBackCloseSetting={handleOpenFunction} />
      ) : showSetting.support ? (
        <Support callBackCloseSetting={handleOpenFunction} />
      ) : showSetting.quit ? (
        <QuitJob callBackCloseSetting={handleOpenFunction} />
      ) : showSetting.term ? (
        <TermOfUse callBackCloseSetting={handleOpenFunction} />
      ) : (
        ""
      )}
    </div>
  );
}

function Setting({ callBackCloseSetting }) {
  const sendDataCallBackClose = (data) => {
    callBackCloseSetting(data);
  };
  return (
    <div className="setting">
      <div className="setting-head">
        <FaAngleLeft
          className="setting-head__icon"
          onClick={() => sendDataCallBackClose("setting")}
        />
        <span>Cài đặt</span>
      </div>
      <div className="setting-content">
        <ul className="setting-content__list">
          <li>
            <div className="setting-list__item">
              <FaLock className="list__item-icon" />
              <span>Đổi mật khẩu</span>
            </div>
          </li>

          <li>
            <div className="setting-list__item">
              <FaUserLock className="list__item-icon" />
              <span>Thay đổi thông tin</span>
            </div>
          </li>
          <li>
            <div className="setting-list__item">
              <IoLocation className="list__item-icon" />
              <span>Cập nhật vị trí</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function BonusProgram({ callBackCloseSetting }) {
  const sendDataCallBackClose = (data) => {
    callBackCloseSetting(data);
  };
  return (
    <div className="setting">
      <div className="setting-head">
        <FaAngleLeft
          className="setting-head__icon"
          onClick={() => sendDataCallBackClose("bonusProgram")}
        />
        <span>Chương trình thưởng đơn</span>
      </div>
      <div className="setting-content"></div>
    </div>
  );
}

function TakeCareOfDriver({ callBackCloseSetting }) {
  const sendDataCallBackClose = (data) => {
    callBackCloseSetting(data);
  };
  return (
    <div className="setting">
      <div className="setting-head">
        <FaAngleLeft
          className="setting-head__icon"
          onClick={() => sendDataCallBackClose("takeCare")}
        />
        <span>Chăm sóc tài xế</span>
      </div>
      <div className="setting-content"></div>
    </div>
  );
}

function Support({ callBackCloseSetting }) {
  const sendDataCallBackClose = (data) => {
    callBackCloseSetting(data);
  };
  return (
    <div className="setting">
      <div className="setting-head">
        <FaAngleLeft
          className="setting-head__icon"
          onClick={() => sendDataCallBackClose("support")}
        />
        <span>Hỗ trợ</span>
      </div>
      <div className="setting-content"></div>
    </div>
  );
}

function QuitJob({ callBackCloseSetting }) {
  const sendDataCallBackClose = (data) => {
    callBackCloseSetting(data);
  };
  return (
    <div className="setting">
      <div className="setting-head">
        <FaAngleLeft
          className="setting-head__icon"
          onClick={() => sendDataCallBackClose("quit")}
        />
        <span>Nghỉ việc</span>
      </div>
      <div className="setting-content"></div>
    </div>
  );
}

function TermOfUse({ callBackCloseSetting }) {
  const sendDataCallBackClose = (data) => {
    callBackCloseSetting(data);
  };
  return (
    <div className="setting">
      <div className="setting-head">
        <FaAngleLeft
          className="setting-head__icon"
          onClick={() => sendDataCallBackClose("term")}
        />
        <span>Điều khoản sử dụng</span>
      </div>
      <div className="setting-content"></div>
    </div>
  );
}