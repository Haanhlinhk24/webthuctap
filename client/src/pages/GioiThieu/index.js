import "./GioiThieu.scss"
import { FiFileText } from "react-icons/fi";

function GioiThieu (){
    return(
        <div className="app-container">
      <header className="header">
        <div className="nav">
          <span className="trang-chu">Trang Chủ</span>
          <span className="divider">|</span>
          <span className="gioi-thieu">Giới Thiệu</span>
        </div>
      </header>

      <div className="content-container">
        <div className="title-section">
          <h1 className="page-title">
          <div className="gioi-thieu">
                <FiFileText  size={35}/>  GIỚI THIỆU
              </div>      
          </h1>
        </div>

        <div className="introduction-content">
          <p className="intro-text">
            <strong>Kính chào quý anh chị ghé thăm:</strong> <span className="company-name">Điệp Ngọc</span> <span className="company-desc">cơ sở chuyên sản xuất đồ nội thất bằng gỗ.</span>
          </p>

          <p>
            Chúng tôi với kinh nghiệm sản xuất lâu năm trong lĩnh vực sản xuất đồ gỗ, sắt, trang trí trong gia đình hoạt động trong lĩnh vực Hà Nội. Ngoài chúng tôi còn có chi nhánh phân phối ở các tỉnh: Lạng Sơn, Hưng Yên, Thanh Hóa, Đà Nẵng, Vũng Tàu nơi những người có nhu cầu mua các sản phẩm đồ gỗ của nhà Điệp Ngọc các quý khách hàng thanh và dịch vụ tốt nhất.
          </p>

          <h2 className="section-title">Các lĩnh vực sản xuất</h2>

          <h3>Nội thất phòng tắm:</h3>
          <p>Lavô inox, Lavô thủy tinh, bàn đá, chỗ kệ treo đồ, xô giấy trong toilet, gương soi đồ …</p>

          <h3>Nội thất phòng khách:</h3>
          <p>giường ngủ, sofa, tivi, tủ quàn áo, tủ giày, tranh treo tường và tủng sản phẩm công nghệ khác trong phòng khách Nội thất thông minh, giá để đồ thông minh, đèn led trang trí trong nhà, đèn tường, đèn chùm, giường đa năng…</p>

          <h3>Nội thất nhà bếp, phòng ăn:</h3>
          <p>tủ bếp, tủ rửa bát, giá phóng ăn…</p>

          <h3>Nguyên vật liệu:</h3>
          <p>Cơ sở đóng sản phẩm gỗ với chất liệu chủ yếu, vật dụng có đảm bảo chất lượng cho hợp với thẩm khoản sự làm đẹp.</p>

          <h3>CÓ MDF:</h3>
          <p>Nguyên liên chính khô hoặc công chế qua từ lý đánh gió, vốn, nước mới mọt. Gỗ có giá phải chăng, với đảm bảo, đẹp mà được ưa chuộng.</p>

          <h3>Gỗ hạ chấm:</h3>
          <p>Các loại gỗ này được đặt vào, đặt hướng hương sạch, dầu, uni, đều, ép đông… Do đám, nước tạp chất như có sắn lợ nhiều đẹp nhất. Gỗ qua quý kinh xứ, tự chuẩn mặt hạng cao không cong mốc và muỗi trùng quá thời vai đáng.</p>

          <h3>Thép kẽ:</h3>
          <p>Thân kẽ cao kỹ dù dùng phương pháp chông tạo cất trong hàm màu nó cho mỗi sản phẩm, để đông lực chân.</p>

          <h3>Cơ sở phong cách:</h3>
          <p>Kinh doanh, cư dân.</p>

          <div className="commitment-list">
            <p>Phong cách hoạt đến thân mây chi được yêu thương , Hoan hỷ hàm lạng, ít hoạt với, không chất kỳ.</p>
            <p>Phong cách có đảm Đương ưu đáng nói, đã, dáng mình đào cư máu cuối guan, sống lưu thức tại lần này, hay đồng.</p>
            <p>Kinh doanh Của chú, sát phẩm dâu được đồ hàng thành ít hơn, với quản cành Điệp Ngọc đối trong kho.</p>
          </div>
          <p className="address">
            <strong>Nội thất Điệp Ngọc</strong> là cơ sở trực tiếp sản xuất nên giá cả rẻ cạnh phận chúng gói là từ 20-40% so với thị trường.
          </p>

          <div className="related-articles">
            <h3 className="related-title">Bài Viết Liên Quan</h3>
            <ul className="related-list">
              <li><i className="fa fa-arrow-circle-right"></i> <a href="#">Chuỗi cách lớn Vật Phẩm</a></li>
              <li><i className="fa fa-arrow-circle-right"></i> <a href="#">Hướng Dân Nhật Hàng</a></li>
              <li><i className="fa fa-arrow-circle-right"></i> <a href="#">Chính Sách Vận Chuyển</a></li>
              <li><i className="fa fa-arrow-circle-right"></i> <a href="#">Chính Sách Bảo Hàng</a></li>
            </ul>
          </div>
        </div>
      </div>

    
     
    </div>
  );
    


}
export default GioiThieu