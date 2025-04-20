import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { deleteUserById } from "../../services/userService";

function DeleteUser({ record, onReload, notifiapi }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            const response = await deleteUserById(record._id);
            if (response && response==="success") {
                notifiapi.success({
                    message: "Thành công",
                    description: "Xóa người dùng thành công!",
                });
                onReload();
                handleCancel();
            } else {
                notifiapi.error({
                    message: "Lỗi",
                    description: response?.message || "Xóa người dùng thất bại!",
                });
            }
        } catch (error) {
            notifiapi.error({
                message: "Lỗi",
                description: "Xóa người dùng thất bại!",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button
                type="primary"
                danger
                onClick={showModal}
            >
                <DeleteOutlined />
            </Button>
            <Modal
                title="Xác nhận xóa"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <p>Bạn có chắc chắn muốn xóa người dùng "{record.name}" không?</p>
                <div style={{ textAlign: "right", marginTop: "20px" }}>
                    <Button onClick={handleCancel} style={{ marginRight: "10px" }}>
                        Hủy
                    </Button>
                    <Button type="primary" danger onClick={handleDelete} loading={loading}>
                        Xóa
                    </Button>
                </div>
            </Modal>
        </>
    );
}

export default DeleteUser;