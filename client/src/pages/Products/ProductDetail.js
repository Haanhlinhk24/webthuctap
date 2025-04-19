import { Col, Image, Rate, Row } from "antd";
import product1 from "../../assets/images/product1.jpg";
import product1of1 from "../../assets/images/product1-1.jpg";
import product2of1 from "../../assets/images/product1-2.jpg";
import product3of1 from "../../assets/images/product1-3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetail.scss";
import { useRef, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const inputRef = useRef();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log("Đã thêm vào giỏ hàng", quantity);
    alert("Đã thêm vào giỏ hàng");
  };

  const handleBuyNow = () => {
    navigate("/muahang");
  };

  const product = {
    name: "KỆ TIVI HIỆN ĐẠI PHÒNG KHÁCH GỖ SỒI KTV70",
    image: product1,
    images: [product1of1, product2of1, product3of1],
    price: 4500000,
    oldPrice: 4800000,
    rating: 4,
    stock: true,
  };

  return (
    <div className="container">
      <Row style={{ padding: "16px" }}>
        <Col span={12}>
          <Image
            src={product.image}
            alt="image product"
            preview={false}
            style={{
              width: "100%",
              maxWidth: "565px",
              maxHeight: "565px",
              height: "100%",
            }}
          />
          <Row style={{ paddingTop: "14px" }} gutter={8}>
            {product.images.map((img, index) => (
              <Col span={6} key={index}>
                <Image
                  src={img}
                  alt={`product preview ${index}`}
                  preview={false}
                  className="productDetail__ImageSmall"
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col span={12}>
          <div className="productDetail">
            <div className="productDetail__name">{product.name}</div>
            <div className="productDetail__star">
              <Rate defaultValue={product.rating} disabled /> ({product.rating} sao)
            </div>

            <div className="productDetail__price">
              <div className="productDetail__price-new">
                {product.price.toLocaleString()}đ
              </div>
              <div className="productDetail__price-old">
                {product.oldPrice.toLocaleString()}đ
              </div>
            </div>

            <div className="productDetail__content3">
              <strong>Tiết kiệm:</strong>
              <span> {(product.oldPrice - product.price).toLocaleString()}đ</span>
            </div>

            <div>
              <strong>Tình trạng:</strong>
              <span> {product.stock ? "Còn hàng" : "Hết hàng"}</span>
            </div>

            <div className="productDetail__quantity">
              <strong>Số lượng:</strong>
              <div className="productDetail__quantity--right">
                <button
                  className="no-border-button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <MinusOutlined />
                </button>
                <input
                  ref={inputRef}
                  value={quantity}
                  readOnly
                  className="no-border-input"
                />
                <button
                  className="no-border-button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <PlusOutlined />
                </button>
              </div>
            </div>

            <div className="productDetail__content4">
              <button className="productDetail__addcart" onClick={handleAddToCart}>
                Thêm vào giỏ hàng
              </button>
              <button className="productDetail__buynow" onClick={handleBuyNow}>
                Mua ngay
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
