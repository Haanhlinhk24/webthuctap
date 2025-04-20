


import React from "react";



function QuanLydonHang() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Quản lý đơn hàng</h1>
            <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                <tr>
                    <th className="py-2 px-4 border">Mã đơn</th>
                    <th className="py-2 px-4 border">Khách hàng</th>
                    <th className="py-2 px-4 border">Ngày đặt</th>
                    <th className="py-2 px-4 border">Trạng thái</th>
                    <th className="py-2 px-4 border">Hành động</th>
                </tr>
                </thead>

            </table>
        </div>
    );
}

export default QuanLydonHang;
