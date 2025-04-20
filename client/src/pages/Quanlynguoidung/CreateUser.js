import {
    Button,
    Form,
    Input,
    notification, Radio,
} from "antd";
import { useState } from "react";
import { createUser } from "../../services/userService";

function CreateUser(props) {
    const { onReload, handleCancel } = props;
    const [notifiapi, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();

    const rules = [{ required: true, message: "Không được bỏ trống" }];

    const handleSubmit = async (values) => {
        try {
            const response = await createUser(values);

            if (response && response=="success") {
                handleCancel();
                onReload();
                notifiapi.success({
                    message: "Thành công",
                    description: `Tạo người dùng thành công`,
                    duration: 2,
                });

                form.resetFields();
            } else {
                notifiapi.error({
                    message: "Thất bại",
                    description: response?.message || "Tạo người dùng thất bại",
                    duration: 2,
                });
            }
        } catch (error) {
            notifiapi.error({
                message: "Lỗi",
                description: "Đã có lỗi xảy ra khi tạo người dùng",
                duration: 2,
            });
        }
    };

    return (
        <>
            {contextHolder}
            <Form
                form={form}
                layout="vertical"
                name="create-user"
                onFinish={handleSubmit}
            >
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

                <Form.Item label="Mật khẩu" name="password" rules={rules}>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Xác nhận mật khẩu"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        ...rules,
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
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
                        Tạo mới
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default CreateUser;