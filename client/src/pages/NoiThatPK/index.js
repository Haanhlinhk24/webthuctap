import React, { useState } from "react";
import CartProduct from "../../components/CartProduct";
import "./NoiThat.scss";
import { FaRegBookmark } from "react-icons/fa";

function PhongKhach() {
  const categories = [
    "Tất Cả",
    "Bàn Ghế Phòng Khách",
    "Kệ Tivi Phòng Khách",
    "Đồ Gỗ Mỹ Nghệ Phòng Khách",
    "Tủ Rượu - Tủ Trang Trí",
    "Đồng Hồ Cây Gỗ"
  ];
  const [selectedCategory, setSelectedCategory] = useState("Tất Cả");

  const products = [
    {
      name: "KỆ TI VI HIỆN ĐẠI PHÒNG KHÁCH GỖ SỒI KTV70",
      price: 4500000,
      oldPrice: 5000000,
      image: "https://noithattrongsang.com/images/Ke_ti_vi/z6500288929684_2131aacfb7ff84db85597f87dfb76439.jpg",
      category: "Kệ Tivi Phòng Khách"
    },
    {
      name: "KỆ TIVI GỖ HƯƠNG XÁM HIỆN ĐẠI KTV69",
      price: 4500000,
      oldPrice: 4700000,
      image: "https://noithattrongsang.com/images/ke-tivi-hien-dai_19.jpg",
      category: "Kệ Tivi Phòng Khách"
    },
    {
      name: "TỦ RƯỢU - TỦ LY VUÔNG GỖ SỒI MÀU HƯƠNG TR35",
      price: 5900000,
      oldPrice: 6000000,
      image: "https://noithattrongsang.com/images/tu-ruou-phong-khach_4.jpg",
      category: "Tủ Rượu - Tủ Trang Trí"
    },
    {
      name: "TỦ RƯỢU - TỦ LY PHÒNG KHÁCH GỖ SỒI TR34",
      price: 7100000,
      oldPrice: 7200000,
      image: "https://noithattrongsang.com/images/tu-ruou-hien-dai_2.jpg",
      category: "Tủ Rượu - Tủ Trang Trí"
    },
  
    
      {
        "name": "BÀN TRÀ KẸP PHÒNG NGỦ KHÁCH SẠN BTK05",
        "price": 3000000,
        "oldPrice": 3500000,
        "image": "https://noithattrongsang.com/images/ban-tra-nha-nghi.jpg",
        "category": "Bàn Trà - Bàn Sofa"
      },
      {
        "name": "BỘ BÀN GHẾ PHÒNG KHÁCH CHUNG CƯ GỖ GÕ ĐỎ BG3",
        "price": 30000000,
        "oldPrice": null,
        "image": "https://noithattrongsang.com/images/san_pham/ban-ghe-phong-khach-go-gu_1.jpg",
        "category": "Bàn Ghế Phòng Khách"
      },
      {
        "name": "NHỮNG MẪU TỦ RƯỢU GÓC HIỆN ĐẠI PHÒNG KHÁCH TR26",
        "price": 5900000,
        "oldPrice": 6000000,
        "image": "https://noithattrongsang.com/images/tu-ruou-go82898292_10.jpg",
        "category": "Tủ Rượu - Tủ Trang Trí"
      },
      {
        "name": "TỦ TRANG TRÍ - TỦ BÀY ĐỒ - TỦ RƯỢU PHÒNG KHÁCH TR23",
        "price": 9500000,
        "oldPrice": 9600000,
        "image": "https://noithattrongsang.com/images/10-4.jpg",
        "category": "Tủ Rượu - Tủ Trang Trí"
      },
      {
        "name": "TỦ RƯỢU GÓC - TỦ TRANG TRÍ PHÒNG KHÁCH GỖ XOAN ĐÀO TR25",
        "price": 5800000,
        "oldPrice": 5900000,
        "image": "https://noithattrongsang.com/images/tu-ruou-go82898292_4.jpg",
        "category": "Tủ Rượu - Tủ Trang Trí"
      },
      {
        "name": "TỦ RƯỢU - TỦ LY - TỦ BÀY ĐỒ PHÒNG KHÁCH TR22",
        "price": 7500000,
        "oldPrice": 8000000,
        "image": "https://noithattrongsang.com/images/9-4.jpg",
        "category": "Tủ Rượu - Tủ Trang Trí"
      },
      {
        "name": "KỆ TIVI GỖ HƯƠNG ĐÁ KIỂU NHẬT HIỆN ĐẠI KTV9",
        "price": 5100000,
        "oldPrice": 5300000,
        "image": "https://noithattrongsang.com/images/ke-tivi-hien-dai_14.jpg",
        "category": "Kệ Tivi"
      },
      {
        "name": "KỆ TIVI GỖ HƯƠNG MẪU NHỎ GIỮA HOA DÂY KTV6",
        "price": 7600000,
        "oldPrice": 7800000,
        "image": "https://noithattrongsang.com/images/ke-tivi-hien-dai_17.jpg",
        "category": "Kệ Tivi"
      },
    









  ];

  const filteredProducts =
    selectedCategory === "Tất Cả"
      ? products
      : products.filter((sp) => sp.category === selectedCategory);

  return (
    <div className="contact-page-container">
      <header className="header">
        <div className="nav">
          <span className="trang-chu">Trang Chủ</span>
          <span className="divider">/</span>
          <span className="lien-he">Nội Thất Phòng Khách</span>
        </div>
      </header>

      <div className="phongngu-container">
        <h2 className="phongngu-title">
          <FaRegBookmark size={20} /> NỘI THẤT PHÒNG KHÁCH
        </h2>

        <div className="category-buttons">
          {categories.map((cate, idx) => (
            <button
              key={idx}
              className={`category-button ${
                selectedCategory === cate ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cate)}
            >
              {cate}
            </button>
          ))}
        </div>

        <p style={{ marginTop: 10, marginBottom: 30 }}>
          Các dòng sản phẩm nội thất phòng khách nội thất Điệp Ngọc, với
          chất lượng cao và giá cả hợp lý
        </p>

        <div className="product-list">
          {filteredProducts.map((item, index) => (
            <CartProduct
              item={{
                ...item,
                price: new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND"
                }).format(item.price),
                countInStock: new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND"
                }).format(item.oldPrice)
              }}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhongKhach;
