import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { deleteProduct } from "../../services/productService";

function DeleteProduct({ record, onReload, notifiapi }) {
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
      const response = await deleteProduct(record._id);
      if (response) {
        notifiapi.success({
          message: "Thành công",
          description: "Xóa sản phẩm thành công!",
        });
        onReload();
        handleCancel();
      }
    } catch (error) {
      notifiapi.error({
        message: "Lỗi",
        description: "Xóa sản phẩm thất bại!",
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
        <p>Bạn có chắc chắn muốn xóa sản phẩm "{record.name}" không?</p>
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

export default DeleteProduct;