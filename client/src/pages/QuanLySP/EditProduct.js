import {Button, Form, Input, InputNumber, Modal, notification} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {useState} from "react";
import {updateProduct} from "../../services/productService";


function EditProduct(props) {
    const { productRow, onReload, handleCancel } = props;
    const [notifiapi, contextHolder] = notification.useNotification();
    const [file, setFile] = useState();
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [form] = Form.useForm();
    const rules = [{ required: true, message: "Không được bỏ trống" }];

    const showModal = () => {
        setIsModalEditOpen(true);
        form.setFieldsValue(productRow); // gán dữ liệu vào form

    };
    const handleCancelEdit = () => {
        setIsModalEditOpen(false);
    };
    const handleSubmit = async (e) => {
        const formData = new FormData();
        formData.append("name", e.name);
        formData.append("type", e.type);
        formData.append("price", e.price);
        formData.append("countInStock", e.countInStock);
        formData.append("rating", e.rating);
        formData.append("description", e.description);
        if (file) {
            formData.append("image", file); // nếu có file mới
        }
        const response = await updateProduct(productRow._id, formData);

        if (response && response === "success") {
            handleCancelEdit();
            onReload();
            notifiapi.success({
                message: "Thành công",
                description: `Cập nhật sản phẩm thành công`,
                duration: 2,
            });

            form.resetFields();
            setFile(null);
        }

    }
    return (
        <>
            {contextHolder}
            <Modal
                title="Cập nhật sản phẩm"
                open={isModalEditOpen}
                onCancel={handleCancelEdit}
                footer={null}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="edit-product"
                    onFinish={handleSubmit}
                >
                    <Form.Item label="ID sản phẩm" name="_id" >
                        <Input disabled={true} readonly={true} />
                    </Form.Item>

                    <Form.Item label="Tên sản phẩm" name="name" rules={rules}>
                        <Input  />
                    </Form.Item>

                    <Form.Item label="Hình ảnh sản phẩm">
                        <img
                            src={`http://localhost:3002${productRow.image}`}
                            alt="Ảnh sản phẩm cũ"
                            style={{ width: "100px", marginBottom: 8 }}
                        />
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
                            Cập nhật
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Button
                type="primary"
                info
                onClick={showModal}
            >
                <EditOutlined />
            </Button>
        </>

    )
}

export default EditProduct;