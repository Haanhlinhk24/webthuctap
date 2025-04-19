import "./LienHe.scss"
import { IoDocumentOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaRoad } from "react-icons/fa";


function LienHe (){
    return(
        <div className="contact-page-container">
      <header className="header">
        <div className="nav">
          <span className="trang-chu">Trang Chủ</span>
          <span className="divider">/</span>
          <span className="lien-he">Liên Hệ</span>
        </div>
      </header>

      <div className="content-container">
        <div className="contact-form-container">
          <h2 className="contact-title">
            <i className="fa fa-envelope"></i> LIÊN HỆ VỚI CHÚNG TÔI
          </h2>

          <form className="contact-form">
            <div className="form-group">
                <IoDocumentOutline size={25}/>       
                <input type="text" placeholder="Vui lòng nhập tiêu đề" className="form-input" />
            </div>
            
            <div className="form-group">
            <FaRegUser size={25}/>
              <input type="text" placeholder="Vui lòng nhập họ tên" className="form-input" />
            </div>
            
            <div className="form-group">
            <MdOutlineMail size={25}/>
              <input type="email" placeholder="Vui lòng nhập email" className="form-input" />
            </div>
            
            <div className="form-group">
            <FaRoad size={25}/>
              <input type="text" placeholder="Vui lòng nhập địa chỉ" className="form-input" />
            </div>
            
            <div className="form-group">
            <MdOutlinePhoneAndroid size={25}/>
              <input type="tel" placeholder="Vui lòng nhập số điện thoại" className="form-input" />
            </div>
            
            <div className="form-group">
              <textarea placeholder="Vui lòng nhập nội dung" className="form-textarea"></textarea>
            </div>
            
            <div className="captcha-group">
              <div className="checkbox-container">
                <input type="checkbox" id="robot-check" />
                <label htmlFor="robot-check">Tôi không phải là người máy</label>
              </div>
              <div className="captcha-image">
               
                <div className="captcha-info">
                 
                  <span className="captcha-terms">Bảo mật - Điều khoản</span>
                </div>
              </div>
            </div>
            
            <button type="submit" className="submit-button">
              <i className="fa fa-paper-plane"></i> Gửi Liên Hệ
            </button>
          </form>
        </div>

        <div className="company-info-container">
          <h2 className="company-title">XƯỞNG SX ĐỒ GỖ ĐIỆP NGỌC</h2>
          
          <div className="info-text">
            <p><strong>Showroom:</strong> 21 Nguyễn Chí Thanh, P. Hàm Rồng, TP Thanh Hoá</p>
            <p><strong>Xưởng sản xuất:</strong> Thọ Dân, Triệu Sơn, Thanh Hóa.</p>
            <p><strong>Hotline:</strong> 0369645220 ( zalo ) - 097.393.1357</p>
            <p><strong>Giờ làm việc:</strong> Từ 8h - 20h các ngày trong tuần</p>
            <p><strong>Website:</strong> noithatdiepngoc.com</p>
          </div>
          
       
        
        </div>
      </div>
    </div>
  );
    

}
export default LienHe