// src/services/dashboardService.js

// Lấy tổng quan số liệu
export const getDashboardStats = async () => {
    try {
        const response = await fetch('http://localhost:3002/api/dashboard/stats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Thêm token xác thực nếu cần
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        return null;
    }
};

// Lấy danh sách đơn hàng gần đây
export const getRecentOrders = async (limit = 5) => {
    try {
        const response = await fetch(`http://localhost:3002/api/orders/recent?limit=${limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error("Error fetching recent orders:", error);
        return [];
    }
};

// Lấy danh sách sản phẩm bán chạy
export const getTopProducts = async (limit = 5) => {
    try {
        const response = await fetch(`http://localhost:3002/api/products/top?limit=${limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error("Error fetching top products:", error);
        return [];
    }
};