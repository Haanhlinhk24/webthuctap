import {
  Button,
  Form,
  Input,
  InputNumber,
  notification,
} from "antd";
import { useState } from "react";
import { createProduct } from "../../services/productService";

function CreateProduct(props) {
  const { onReload, handleCancel } = props;
  const [notifiapi, contextHolder] = notification.useNotification();
  const [file, setFile] = useState();
  const [form] = Form.useForm();

  const rules = [{ required: true, message: "Không được bỏ trống" }];

  const handleSubmit = async (e) => {
    notifiapi.success({
      message: "Thành công",
      description: `Tạo sản phẩm thành công`,
      duration: 2,
    });

    const formData = new FormData();
    formData.append("name", e.name);
    formData.append("image", file); // QUAN TRỌNG: phải dùng FormData cho file
    formData.append("type", e.type);
    formData.append("price", e.price);
    formData.append("countInStock", e.countInStock);
    formData.append("rating", e.rating);
    formData.append("description", e.description);
    
    const response = await createProduct(formData);

    if (response && response.status === "success") {
      handleCancel();
      onReload();
      notifiapi.success({
        message: "Thành công",
        description: `Tạo sản phẩm thành công`,
        duration: 2,
      });

      form.resetFields();
      setFile(null);
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        name="create-product"
        onFinish={handleSubmit}
      >
        <Form.Item label="Tên sản phẩm" name="name" rules={rules}>
          <Input />
        </Form.Item>

        <Form.Item label="Hình ảnh sản phẩm" name="image" rules={rules}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </Form.Item>

        <Form.Item label="Loại sản phẩm" name="type" rules={rules}>
          <Input placeholder="VD: Bàn, Ghế, Tủ..." />
        </Form.Item>

        <Form.Item label="Giá" name="price" rules={rules}>
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Số lượng tồn kho" name="countInStock" rules={rules}>
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Đánh giá (số sao)" name="rating" rules={rules}>
          <InputNumber min={0} max={5} step={0.1} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Mô tả sản phẩm" name="description" rules={rules}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="custom-button-hoverAdmin"
          >
            Tạo mới
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProduct;
