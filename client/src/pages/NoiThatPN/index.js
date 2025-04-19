import React, { useState } from "react";
import CartProduct from "../../components/CartProduct";
import "./PhongNgu.scss";
import { FaRegBookmark } from "react-icons/fa"; 

function PhongNgu() {
  const sanPham = [
    {
      name: 'GIƯỜNG NGỦ CHÂN THUYỀN 1M8 GỖ HƯƠNG',
      price: 12500000,
      oldPrice: 13000000,
      image: "https://noithattrongsang.com/images/Giuong_ngu_tu_nhien/z6500393495100_07f9c1cc3e0848e32da01395fbddf0c4.jpg",
      category: "Giường Ngủ Gỗ Tự Nhiên"
    },
    {
      name: "GIƯỜNG NGỦ 1M6 GỖ MUN DÁT PHẨN GN101",
      price: 8500000,
      oldPrice: 9000000,
      image: "https://noithattrongsang.com/images/Giuong_ngu_tu_nhien/z6500288924380_4b36b449785c155dfe90d899f46ca6ed_1.jpg",
      category: "Giường Ngủ Gỗ Tự Nhiên"
    },
    {
      name: "TỦ QUẦN ÁO GỖ HƯƠNG 3 BUỒNG 4 CÁNH TA69",
      price: 10600000,
      oldPrice: 11000000,
      image: "https://noithattrongsang.com/images/tu-quan-ao-go-huong_13.jpg",
      category: "Tủ Quần Áo Gỗ Tự Nhiên"
    },
    {
      name: "BỘ GIƯỜNG TỦ PHÒNG HIỆN ĐẠI CƯỚI GỖ HƯƠNG GN47",
      price: 25500000,
      oldPrice: 26000000,
      image: "https://noithattrongsang.com/images/giuong-ngu-hien-dai_4.jpg",
      category: "Combo Nội Thất Phòng Ngủ"
    },
    {
        name: "GIƯỜNG NGỦ GỖ XOAN GIÁ RẺ SINH VIÊN GN03",
        price: 1800000,
        image: "https://noithattrongsang.com/images/san_pham/giuong-ngu-gia-re.jpg  ",
        category: "Giường Ngủ Gỗ Tự Nhiên"
      },
      {
        name: "GIƯỜNG GẤP ĐA NĂNG GỖ SỒI PG06",
        price: 3000000,
        oldPrice: 3200000,
        image: "https://noithattrongsang.com/images/san_pham/giuong-ghe-gap_3.jpg",
        category: "Giường tủ gỗ MDF"
      },
      {
        name: "TỦ ÁO 3 BUỒNG 4 CÁNH XOAN ĐÀO GIA LAI TA68",
        price: 8800000,
        oldPrice: 9000000,
        image: "https://noithattrongsang.com/images/tu-ao-go-tu-nhien_8.jpg",
        category: "Tủ Quần Áo Gỗ Tự Nhiên"
      },
      {
        name: "BÀN TRANG ĐIỂM GỖ HƯƠNG ĐÁ HIỆN ĐẠI BTD54",
        price: 4500000,
        oldPrice: 4600000,
        image: "https://noithattrongsang.com/images/ban-trang-diem-go-thit.jpg",
        category: "Bàn trang điểm, Táp"
      },
      {
        name: "GIƯỜNG NGỦ GỖ HƯƠNG ĐÁ CHÂN THUYỀN HIỆN ĐẠI GN18",
        price: 13800000,
        oldPrice: 14000000,
        image: "https://noithattrongsang.com/images/giuong-ngu-go-huong-hien-dai_3.jpg",
        category: "Giường Ngủ Gỗ Tự Nhiên"
      },

    
  ];

  const categories = [
    "Tất cả",
    "Tủ Quần Áo Gỗ Tự Nhiên",
    "Giường Ngủ Gỗ Tự Nhiên",
    "Bàn trang điểm, Táp",
    "Giường tủ gỗ MDF",
    "Combo Nội Thất Phòng Ngủ",
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
          <span className="lien-he">Nội Thất Phòng Ngủ</span>
        </div>
      </header>

      <div className="phongngu-container">
        <h2 className="phongngu-title"> <FaRegBookmark size={20}/> NỘI THẤT PHÒNG NGỦ</h2>

        <div className="category-buttons">
          {categories.map((cate, idx) => (
            <button 
              key={idx} 
              className={selectedCategory === cate ? "active" : ""}
              onClick={() => setSelectedCategory(cate)}>
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
                countInStock: new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(item.oldPrice),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhongNgu;
