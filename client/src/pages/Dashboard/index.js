import { Col, Row, Card, Statistic, Table, Typography, Space } from "antd";
import { UserOutlined, ShoppingCartOutlined, DollarOutlined, TagOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        userCount: 0,
        productCount: 0,
        orderCount: 0,
        revenue: 0
    });

    const [recentOrders, setRecentOrders] = useState([]);
    const [topProducts, setTopProducts] = useState([]);

    // Mô phỏng việc tải dữ liệu từ API
    useEffect(() => {
        // Trong thực tế, đây sẽ là các API call để lấy dữ liệu
        setTimeout(() => {
            setStats({
                userCount: 156,
                productCount: 243,
                orderCount: 87,
                revenue: 45678000
            });

            setRecentOrders([
                { id: "ORD-001", customer: "Nguyễn Văn A", date: "20/04/2025", total: 1250000, status: "Đã giao" },
                { id: "ORD-002", customer: "Trần Thị B", date: "19/04/2025", total: 750000, status: "Đang xử lý" },
                { id: "ORD-003", customer: "Lê Văn C", date: "18/04/2025", total: 2100000, status: "Đã giao" },
                { id: "ORD-004", customer: "Phạm Thị D", date: "17/04/2025", total: 850000, status: "Đang giao" },
                { id: "ORD-005", customer: "Hoàng Văn E", date: "16/04/2025", total: 1600000, status: "Đã giao" }
            ]);

            setTopProducts([
                { id: "SP-001", name: "Ghế sofa", sold: 45, revenue: 18000000 },
                { id: "SP-002", name: "Bàn ăn", sold: 32, revenue: 12800000 },
                { id: "SP-003", name: "Tủ quần áo", sold: 28, revenue: 9800000 },
                { id: "SP-004", name: "Giường ngủ", sold: 24, revenue: 14400000 },
                { id: "SP-005", name: "Kệ tivi", sold: 22, revenue: 5500000 }
            ]);

            setLoading(false);
        }, 1000);
    }, []);

    const orderColumns = [
        {
            title: "Mã đơn hàng",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Khách hàng",
            dataIndex: "customer",
            key: "customer"
        },
        {
            title: "Ngày đặt",
            dataIndex: "date",
            key: "date"
        },
        {
            title: "Tổng tiền",
            dataIndex: "total",
            key: "total",
            render: (value) => `${value.toLocaleString('vi-VN')} đ`
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                let color = status === "Đã giao" ? "green" : status === "Đang giao" ? "blue" : "orange";
                return <span style={{ color }}>{status}</span>;
            }
        }
    ];

    const productColumns = [
        {
            title: "Mã SP",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Đã bán",
            dataIndex: "sold",
            key: "sold"
        },
        {
            title: "Doanh thu",
            dataIndex: "revenue",
            key: "revenue",
            render: (value) => `${value.toLocaleString('vi-VN')} đ`
        }
    ];

    return (
        <>
            <div style={{ padding: "16px 0" }}>
                <Typography.Title level={2}>Tổng quan</Typography.Title>
            </div>

            {/* Các thẻ thống kê */}
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={6}>
                    <Card bordered={false} loading={loading}>
                        <Statistic
                            title="Tổng người dùng"
                            value={stats.userCount}
                            prefix={<UserOutlined />}
                            valueStyle={{ color: "#1890ff" }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card bordered={false} loading={loading}>
                        <Statistic
                            title="Tổng sản phẩm"
                            value={stats.productCount}
                            prefix={<TagOutlined />}
                            valueStyle={{ color: "#52c41a" }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card bordered={false} loading={loading}>
                        <Statistic
                            title="Đơn hàng"
                            value={stats.orderCount}
                            prefix={<ShoppingCartOutlined />}
                            valueStyle={{ color: "#fa8c16" }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card bordered={false} loading={loading}>
                        <Statistic
                            title="Doanh thu"
                            value={stats.revenue}
                            prefix={<DollarOutlined />}
                            suffix="đ"
                            valueStyle={{ color: "#f5222d" }}
                        />
                    </Card>
                </Col>
            </Row>

            {/* Đơn hàng gần đây và sản phẩm bán chạy */}
            <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
                <Col xs={24} lg={12}>
                    <Card
                        title="Đơn hàng gần đây"
                        bordered={false}
                        loading={loading}
                        extra={<a href="#">Xem tất cả</a>}
                    >
                        <Table
                            columns={orderColumns}
                            dataSource={recentOrders}
                            pagination={false}
                            rowKey="id"
                            size="small"
                        />
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card
                        title="Sản phẩm bán chạy"
                        bordered={false}
                        loading={loading}
                        extra={<a href="#">Xem tất cả</a>}
                    >
                        <Table
                            columns={productColumns}
                            dataSource={topProducts}
                            pagination={false}
                            rowKey="id"
                            size="small"
                        />
                    </Card>
                </Col>
            </Row>

            {/* Thống kê theo thời gian */}
            <Row style={{ marginTop: "16px" }}>
                <Col span={24}>
                    <Card title="Doanh thu theo thời gian" bordered={false} loading={loading}>
                        <div style={{ padding: "20px", textAlign: "center", background: "#fafafa", height: "300px" }}>
                            <Space direction="vertical">
                                <Typography.Text type="secondary">

                                </Typography.Text>
                                <Typography.Text type="secondary">

                                </Typography.Text>
                            </Space>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;