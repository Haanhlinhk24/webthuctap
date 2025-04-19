import React, { useState } from "react";
import CartProduct from "../../components/CartProduct";
import "./PhongNgu.scss";
import { FaRegBookmark } from "react-icons/fa";

function PhongTho() {
  const sanPham = [
   
        {
          name: "TỦ CƠM CÚNG - BÀN CƠM GỖ HƯƠNG TC1",
          price: 3300000,
          oldPrice: 3500000,
          image: "https://noithattrongsang.com/images/tu-com-ban-tho_3.jpg",
          category: "Tủ Cơm, Bàn Cơm"
        },
        {
          name: "BÀN THỜ CẶP GIA TIÊN GỖ SỒI HIỆN ĐẠI BT44",
          price: 7800000,
          oldPrice: 8000000,
          image: "https://noithattrongsang.com/images/ban-tho-hien-dai-chung-cu_8.jpg",
          category: "Bàn Thờ Gia Tiên"
        },
        {
          name: "CẶP BAN THỜ CHUNG CƯ GỖ SỒI HIỆN ĐẠI BT52",
          price: 7400000,
          oldPrice: 7600000,
          image: "https://noithattrongsang.com/images/ban-tho-an-tho-hien-dai_10.jpg",
          category: "Bàn Thờ Chung Cư"
        },
        {
          name: "BÀN THỜ CẶP GỖ SỒI CHUNG CƯ NHỎ GỌN BT53",
          price: 7300000,
          oldPrice: 7600000,
          image: "https://noithattrongsang.com/images/ban-tho-an-tho-hien-dai_4.jpg",
          category: "Bàn Thờ Chung Cư"
        },
        {
          name: "BÀN THỜ GIA TIÊN GỖ SỒI CHUNG CƯ CÓ TỦ CƠM BT50",
          price: 8300000,
          oldPrice: 8500000,
          image: "https://noithattrongsang.com/images/ban-tho-an-tho-hien-dai_6.jpg",
          category: "Bàn Thờ Gia Tiên"
        },
        {
          name: "CẶP BÀN THỜ GỖ SỒI CHUNG CƯ HIỆN ĐẠI BT51",
          price: 8100000,
          oldPrice: 8500000,
          image: "https://noithattrongsang.com/images/ban-tho-an-tho-hien-dai_7.jpg",
          category: "Bàn Thờ Chung Cư"
        },
        {
          name: "TỦ THỜ CHUNG CƯ HIỆN ĐẠI CHỮ PHÚC GỖ SỒI BT49",
          price: 6000000,
          oldPrice: 6500000,
          image: "https://noithattrongsang.com/images/ban-tho-hien-dai-chung-cu_4.jpg",
          category: "Tủ Thờ"
        },
  ];

  const categories = [
    "Tất cả",
    "Bàn Thờ Treo Tường",
    "Tủ Thờ, Bàn Thờ Đại Lộc",
    "Bàn Thờ Thần Tài Ông Địa",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredProducts = selectedCategory === "Tất cả"
    ? sanPham
    : sanPham.filter(sp => sp.category === selectedCategory);

  return (
    <div className="contact-page-container">
      <header className="header">
        <div className="nav">
          <span className="trang-chu">Trang Chủ</span>
          <span className="divider">/</span>
          <span className="lien-he">Nội Thất Phòng Thờ</span>
        </div>
      </header>

      <div className="phongngu-container">
        <h2 className="phongngu-title">
          <FaRegBookmark size={20} /> NỘI THẤT PHÒNG THỜ
        </h2>

        <div className="category-buttons">
          {categories.map((cate, idx) => (
            <button
              key={idx}
              className={selectedCategory === cate ? "active" : ""}
              onClick={() => setSelectedCategory(cate)}
            >
              {cate}
            </button>
          ))}
        </div>

        <div className="sanpham-grid">
          {filteredProducts.map((item, idx) => (
            <CartProduct
              key={idx}
              item={{
                ...item,
                price: new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(item.price),
                countInStock: item.oldPrice
                  ? new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.oldPrice)
                  : "",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhongTho;
