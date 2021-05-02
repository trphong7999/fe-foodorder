import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { BsThreeDots } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import mi1 from "assets/image/dishes/mi1.jpg";
import "./style.scss";
import { validatePrice } from "func";
import axios from "axios";
import merchantApi from "api/merchantApi";
import { useHistory, useLocation, useRouteMatch } from "react-router";

export default function FoodMenu({ categories }) {
  const match = useRouteMatch();
  const history = useHistory();
  const merchantId = sessionStorage.merchantId;
  const [category, setCategory] = useState([]);
  const [menu, setMenu] = useState([]);
  const [showAction, setShowAction] = useState(false);
  const [dataModal, setDataModal] = useState(null);

  const noMenu = !menu || (menu && menu.length === 0);

  const handleChangeShowAction = (value) => {
    setShowAction(!showAction);
    setDataModal(value);
  };
  console.log(dataModal);

  const changeUrlEditFood = () => {
    const location = {
      pathname: `${match.url}/${dataModal.id}`,
      state: { foodDetail: dataModal },
    };
    history.push(location);
    history.replace(location);
  };

  const getDataMenu = (arr) => {
    const list = arr.reduce((acc, curr) => acc.concat(curr.foods), []);
    return list;
  };

  const fetchMerchant = async () => {
    try {
      const res = await merchantApi.get(merchantId);
      if (res.status !== 400) {
        setCategory(res.category);
      }
      const newMenu = getDataMenu(res.category);
      setMenu(newMenu);
    } catch (error) {
      console.log("Failed to fetch merchant info: ", error);
    }
  };

  const handleSelectStatus = (e) => {
    console.log(e.target.value);
  };

  const handleSelectCategories = (e) => {
    let nameCat = e.target.value;
    let dishOfCat = category.find((element) => element.name === nameCat);
    let newList;
    if (nameCat === "all" || nameCat === "") {
      let allList = getDataMenu(category);
      newList = allList;
    } else {
      newList = dishOfCat.foods;
    }

    setMenu(newList);
    console.log(nameCat);
  };

  useEffect(() => {
    fetchMerchant();
  }, []);

  return (
    <div className="grid">
      <NavBar />

      <div className="food-menu">
        <div className="food-menu__head">
          <select
            name="categories"
            className="top-select"
            onChange={(e) => {
              handleSelectCategories(e);
            }}
          >
            <option value="" disabled selected={true}>
              Nhóm
            </option>
            <option value="all">Tất cả</option>
            {category.map((item, index) => (
              <option value={item.name} key={index}>
                {item.name}
              </option>
            ))}
          </select>

          <select
            className="top-select"
            onChange={(e) => {
              handleSelectStatus(e);
            }}
          >
            <option value="" disabled selected={true}>
              Trạng thái
            </option>
            <option value="0">Tất cả</option>
            <option value="1">Còn hàng</option>
            <option value="2">Hết hàng</option>
          </select>
        </div>

        <div className="food-menu__body">
          <div className="body-title">Thực đơn ({menu.length})</div>
          <div className="body-list">
            <h2 style={!noMenu ? { display: "none" } : { display: "block" }}>
              Hiện tại không có món ăn nào
            </h2>
            {menu.map((item, index) => (
              <div className="body-list__item" key={index}>
                <div
                  className="item-img"
                  style={{ backgroundImage: `url(${mi1})` }}
                ></div>
                <div className="item-content">
                  <div className="item-content__name">{item.name}</div>
                  <div className="item-content__price">
                    {validatePrice(item.price)} <span>đ</span>
                  </div>
                  <div className="item-content__status">
                    <GoPrimitiveDot /> Còn hàng
                  </div>
                </div>
                <div
                  className="item-action"
                  onClick={() => handleChangeShowAction(item)}
                >
                  <BsThreeDots className="item-action__icon" />
                </div>
              </div>
            ))}
            <div className="body-list__item">
              <div
                className="item-img"
                style={{ backgroundImage: `url(${mi1})` }}
              ></div>
              <div className="item-content">
                <div className="item-content__name">hihi</div>
                <div className="item-content__price">
                  {validatePrice(10000)} <span>đ</span>
                </div>
                <div className="item-content__status">
                  <GoPrimitiveDot className="item-content__status-icon" /> Còn
                  hàng
                </div>
              </div>
              <div
                className="item-action"
                onClick={() => handleChangeShowAction()}
              >
                <BsThreeDots className="item-action__icon" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal-action"
          style={showAction ? { display: "block" } : { display: "none" }}
        >
          <div
            className="modal-action__overlay"
            style={showAction ? { opacity: 0.4 } : { display: 0 }}
          ></div>
          <div
            className={`modal-action__content ${
              showAction
                ? "modal-action__content--open"
                : ".modal-action__content--close"
            }`}
          >
            <ul className="content-list">
              <li
                className="content-list__item"
                onClick={() => {
                  changeUrlEditFood();
                }}
              >
                Xem chi tiết
              </li>
              <li className="content-list__item">Xóa</li>
            </ul>
            <div className="content-close">
              <div
                className="content-close__click"
                onClick={() => handleChangeShowAction()}
              >
                Hủy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
