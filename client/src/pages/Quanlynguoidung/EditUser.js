import {Button, Form, Input, Modal, notification, Radio} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { updateUserById } from "../../services/userService";

function EditUser(props) {
    const { userRow, onReload } = props;
    const [notifiapi, contextHolder] = notification.useNotification();
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [form] = Form.useForm();
    const rules = [{ required: true, message: "Không được bỏ trống" }];

    const showModal = () => {
        setIsModalEditOpen(true);
        form.setFieldsValue({
            _id: userRow._id,
            name: userRow.name,
            email: userRow.email,
            phone: userRow.phone,
            // Không đưa mật khẩu vào form để tránh hiển thị mật khẩu
        });
    };

    const handleCancelEdit = () => {
        setIsModalEditOpen(false);
    };

    const handleSubmit = async (values) => {
        try {
            // Chỉ gửi mật khẩu nếu người dùng nhập mới
            const userData = {
                name: values.name,
                email: values.email,
                phone: values.phone
            };

            if (values.password) {
                userData.password = values.password;
            }

            const response = await updateUserById(userRow._id, userData);

            if (response && response==="success") {
                handleCancelEdit();
                onReload();
                notifiapi.success({
                    message: "Thành công",
                    description: `Cập nhật người dùng thành công`,
                    duration: 2,
                });

                form.resetFields();
            } else {
                notifiapi.error({
                    message: "Thất bại",
                    description: response?.message || "Cập nhật người dùng thất bại",
                    duration: 2,
                });
            }
        } catch (error) {
            notifiapi.error({
                message: "Lỗi",
                description: "Đã có lỗi xảy ra khi cập nhật người dùng",
                duration: 2,
            });
        }
    };

    return (
        <>
            {contextHolder}
            <Modal
                title="Cập nhật thông tin người dùng"
                open={isModalEditOpen}
                onCancel={handleCancelEdit}
                footer={null}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="edit-user"
                    onFinish={handleSubmit}
                >
                    <Form.Item label="ID người dùng" name="_id">
                        <Input disabled={true} readOnly={true} />
                    </Form.Item>

                    <Form.Item label="Tên người dùng" name="name" rules={rules}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            ...rules,
                            { type: "email", message: "Email không hợp lệ" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label=" La admin" name="isAdmin" >
                        <Radio.Group>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu mới"
                        name="password"
                        tooltip="Để trống nếu không muốn thay đổi mật khẩu"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Xác nhận mật khẩu mới"
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!getFieldValue('password') || !value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            ...rules,
                            { pattern: /^[0-9]{10}$/, message: "Số điện thoại phải có 10 chữ số" }
                        ]}
                    >
                        <Input />
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
    );
}

export default EditUser;