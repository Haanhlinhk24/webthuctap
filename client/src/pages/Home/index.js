import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../../assets/images/banner1.jpg"
import banner2 from "../../assets/images/banner2.jpg"
import banner3 from "../../assets/images/banner3.jpg"
import anhvideo from "../../assets/images/anhvideo.jpg"
import CartProduct from "../../components/CartProduct";
import { Button, Col, Row } from "antd";
import "./Home.scss"
import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {

  const [dataListProduct, setDataListProduct] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getProductList();
      if (response) {
        setDataListProduct(response);
      }
    };
    fetchAPI();
  }, []);
  console.log(dataListProduct)


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





  return (
    <>


      <div style={{ backgroundImage: 'url("https://dogolegia.vn/wp-content/uploads/2022/09/BG1.jpg")', backgroundSize: 'cover', padding: "60px 180px", backgroundPosition: 'center', display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Row gutter={16} align="middle">
          {/* Left Column: Carousel */}
          <Col xs={24} md={12}>
            <Carousel data-bs-theme="dark" style={{ marginBottom: "20px" }}>
              <Carousel.Item>
                <img src="https://dogolegia.vn/wp-content/uploads/2023/01/z4009586453869_7119fdedafe33125ff17704078751d1b-1024x824.jpg" alt="banner1" width="100%" height="300px" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://dogolegia.vn/wp-content/uploads/2023/01/z4009585425550_12cfb95b4519349819b73da1d145d607.jpg" alt="banner2" width="100%" height="300px" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://dogolegia.vn/wp-content/uploads/2023/01/z4009582924845_8cf5c06ff00da87805959b1149ab66f0.jpg" alt="banner2" width="100%" height="300px" />

              </Carousel.Item>
            </Carousel>
          </Col>

          {/* Right Column: Text and Buttons */}
          <Col xs={24} md={12} style={{ padding: '20px', textAlign: 'left' }}>
            <h3
              style={{
                color: '#d35400',
                fontWeight: 'bold',
                fontSize: '24px',
                marginBottom: '10px',
              }}
            >
              NHÀ LÀ KHỞI NGUỒN CỦA MỌI ĐIỀU HANH PHÚC
            </h3>
            <p style={{ color: '#333', fontSize: '16px', marginBottom: '20px' }}>
              Để mỗi ngày đều sống động và đầy đủ trong tâm hồn. Vì chúng ta hiểu rõ, mỗi dịch vụ của chúng ta không chỉ để giúp bạn thành người phục hồi!
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button
                style={{
                  borderRadius: '20px',
                  borderColor: '#333',
                  color: '#333',
                }}
              >
                Số điện (?)
              </Button>
              <Button
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#8B4513',
                  border: 'none',
                  color: '#fff',
                }}
              >
                ĐĂNG KÝ TƯ VẤN
              </Button>
            </div>
          </Col>
        </Row>
      </div>


      <div className="container" style={{ marginBottom: "20px", marginTop: "50px" }}>
        <div className="chu">

          <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaRegBookmark />
            <span style={{ color: "#B87029" }}>KỆ TIVI PHÒNG KHÁCH</span>
          </h1>
          <hr style={{ color: "#E88697" }} />
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {dataListProduct && (
            <>
              {dataListProduct.map((item) => (
                <Link to={`/chitiet/${item._id}`} style={{ textDecoration: "none" }}>
                  <CartProduct
                    item={{
                      ...item,
                      price: new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price),
                      countInStock: new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.countInStock), // Định dạng countInStock
                    }}
                    key={item._id}
                  />


                </Link>

              ))}
            </>
          )}
        </div>



        {/* === BÀN GHẾ PHÒNG KHÁCH === */}
        <div className="chu" style={{ marginTop: "50px" }}>
          <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaRegBookmark />
            <span style={{ color: "#B87029" }}>BÀN GHẾ PHÒNG KHÁCH</span>
          </h1>
          <hr style={{ color: "#E88697" }} />
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {products?.slice(0, 8).map((item) => (
            <Link to={`/chitiet/${item._id}`} key={item._id} style={{ textDecoration: "none" }}>
              <CartProduct
                item={{
                  ...item,
                  price: new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price),
                  countInStock: new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.countInStock),
                }}
              />
            </Link>
          ))}
        </div>


        {/* === GIƯỜNG NGỦ GỖ TỰ NHIÊN === */}
        <div className="chu" style={{ marginTop: "50px" }}>
          <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaRegBookmark />
            <span style={{ color: "#B87029" }}>GIƯỜNG NGỦ GỖ TỰ NHIÊN</span>
          </h1>
          <hr style={{ color: "#E88697" }} />
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {sanPham?.slice(0, 8).map((item) => (
            <Link to={`/chitiet/${item._id}`} key={item._id} style={{ textDecoration: "none" }}>
              <CartProduct
                item={{
                  ...item,
                  price: new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price),
                  countInStock: new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.countInStock),
                }}
              />
            </Link>
          ))}
     
        
         




      
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "40px 0px" }}>
          <button className="viewmore">Xem thêm</button>
        </div>

        <Row style={{ height: "450px" }}>
          <Col span={16}>
            <iframe width="700px" height="80%" src="https://www.youtube.com/embed/DHLm2_-crjw?si=SFhliG2waBx6X9to" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
          <Col span={8}>
            <img src="https://noithattrongsang.com/images/san_pham/ghe-_14.jpg" alt="anhvideo" width="100%" height="80%" />
          </Col>
        </Row>
      </div>





    </>
  );
}
export default Home;