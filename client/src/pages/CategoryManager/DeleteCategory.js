import { Button, Popconfirm, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteCategory } from "../../services/CategoryService";

function DeleteCategory(props) {
  const { record, onReload } = props;
  const [notifiapi, contextHolder] = notification.useNotification();
  const handleDelete = async () => {
    const response = await deleteCategory(record._id);
    if (response) {
      onReload();
      notifiapi.success({
        message: "success",
        description: `Bạn đã xóa bản ghi thành công `,
        duration: 6, // hiển thị trong bao lâu thời gian
      });
    } else {
      notifiapi.error({
        message: "error",
        description: "Xin lỗi, vui lòng đặt lại sau",
      });
    }
  };
  return (
    <>
      {" "}
      {contextHolder}
      <Popconfirm title="Bạn có chắc chắn muốn xóa không?" onConfirm={handleDelete}>
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}
export default DeleteCategory;
