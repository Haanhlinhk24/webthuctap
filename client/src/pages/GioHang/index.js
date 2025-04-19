import React from 'react';
import { Link } from 'react-router-dom';
import './GioHang.scss'; // bạn có thể tách CSS ra file riêng
import { MdOutlineAddShoppingCart } from "react-icons/md";

function GioHang() {
  return (
    <div className="contact-page-container">
    <header className="header">
      <div className="nav">
        
        <span className="trang-chu">Trang Chủ</span>
        <span className="divider">/</span>
        <span className="lien-he">Giỏ Hàng</span>
      </div>
    </header>
      <h2 className="giohang-title">
      <MdOutlineAddShoppingCart />
        <i className="fas fa-shopping-cart"></i> GIỎ HÀNG
      </h2>

      <table className="giohang-table">
        <thead>
          <tr>
            <th>Sản Phẩm</th>
            <th>Hình Đại Diện</th>
            <th>Số Lượng</th>
            <th>Giá</th>
            <th>Tổng Cộng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kệ Tivi Hiện Đại Phòng Khách Gỗ Hương KTV66</td>
            <td>
              <img
                src="https://noithattrongsang.com/images/ke-tivi-phong-khach-hien-dai_2.jpg" // dùng link thật nếu có
                alt="Kệ tivi KTV70"
                className="giohang-img"
              />
            </td>
            <td>
              <button className="qty-btn">-</button>
              <span className="qty-number">1</span>
              <button className="qty-btn">+</button>
            </td>
            <td>5,300,000 đ</td>
            <td>5,000,000 đ</td>
            <td>
              <button className="delete-btn">✖</button>
            </td>
          </tr>
        </tbody>
        




      </table>

      <div className="giohang-footer">
        <div className="total-price">Tổng Cộng: 5,000,000 đ</div>
        <div className="giohang-actions">
          <Link to="/" className="back-btn">← Tiếp Tục Xem Mẫu</Link>
          <button className="buy-btn">Mua Hàng →</button>
        </div>
      </div>
    </div>
  );
}

export default GioHang;
