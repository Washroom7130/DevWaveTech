"use client";
import React, { useEffect, useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import LoadingOverlay from "@/app/components/loadingOverlay";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, PointElement, LineElement);

type Statistics = {
  active_customer_count: number;
  active_staff_count: number;
  inactive_customer_count: number;
  inactive_staff_count: number;
  non_verified_customer_count: number;
};

type CategoryMarketShare = {
  TenDanhMuc: string;
  TotalQuantity: number;
};

type OrderStatistics = {
  "Chờ xử lí": number;
  "Xác nhận": number;
  "Đang giao": number;
  "Đã giao": number;
  "Đã hủy": number;
};

type EarningData = {
  month: string;
  total_earning: number;
};

export default function Dashboard() {
  const [stats, setStats] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [dataStats, setDataStats] = useState<CategoryMarketShare[]>([]);
  const [chart2_loading, chart2_setLoading] = useState<boolean>(true);
  const [chart2_error, chart2_setError] = useState<string>("");

  const [chart3_stats, chart3_setStats] = useState<OrderStatistics | null>(null);
  const [chart3_loading, chart3_setLoading] = useState<boolean>(true);
  const [chart3_error, chart3_setError] = useState<string>("");

  const [earnings, setEarnings] = useState<EarningData[]>([]);
  const [chart4_loading, chart4_setLoading] = useState<boolean>(true);
  const [chart4_error, chart4_setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://flaskbackendapi.onrender.com/admin/get-account-statistics", {
            credentials: "include"
        });
        if (!res.ok) {
          throw new Error("Failed to fetch statistics");
        }
        const data: Statistics = await res.json();
        setStats(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("https://flaskbackendapi.onrender.com/admin/get-category-marketshare", {
          credentials: "include"
      });
        if (!res.ok) throw new Error("Failed to fetch statistics");
        const data: CategoryMarketShare[] = await res.json();
        setDataStats(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("https://flaskbackendapi.onrender.com/admin/get-order-statistics", {
          credentials: "include"
      });
        if (!res.ok) {
          throw new Error("Failed to fetch order statistics");
        }
        const data: OrderStatistics = await res.json();
        chart3_setStats(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  useEffect(() => {
    async function fetchEarnings() {
      try {
        const res = await fetch("https://flaskbackendapi.onrender.com/admin/get-annual-earning", {
          credentials: "include"
      });
        if (!res.ok) {
          throw new Error("Failed to fetch earnings data");
        }
        const data: EarningData[] = await res.json();
        // Optionally sort data if needed (e.g. by month)
        setEarnings(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchEarnings();
  }, []);

  if (loading) return <LoadingOverlay/>;
  if (error) return <div>Error: {error}</div>;
  if (!stats) return <div>No data available</div>;

  const chartData = {
    labels: [
      "Tài khoản khách đang hoạt động",
      "Tài khoản nhân viên đang hoạt động",
      "Tài khoản khách hàng không hoạt động",
      "Tài khoản nhân viên không hoạt động",
      "Tài khoản khách hàng chưa xác minh email",
    ],
    datasets: [
      {
        label: "Số lượng",
        data: [
          stats.active_customer_count,
          stats.active_staff_count,
          stats.inactive_customer_count,
          stats.inactive_staff_count,
          stats.non_verified_customer_count,
        ],
        backgroundColor: [
          "#4caf50", // Green for active customers
          "#2196f3", // Blue for active staff
          "#f44336", // Red for inactive customers
          "#ff9800", // Orange for inactive staff
          "#9c27b0", // Purple for non-verified customers
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Thống kê tài khoản",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const chartData2 = {
    labels: dataStats.map((d) => d.TenDanhMuc),
    datasets: [
      {
        label: "Số lượng",
        data: dataStats.map((d) => d.TotalQuantity),
        backgroundColor: [
          "#4caf50", // Green
          "#2196f3", // Blue
          "#f44336", // Red
          "#ff9800", // Orange
          "#9c27b0", // Purple
        ],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    responsive: true,
    maintainAspectRatio: false, // Allows fixed dimensions
    plugins: {
      title: {
        display: true,
        text: "Thống kê danh mục theo đơn hàng",
        font: { size: 18 },
      },
      legend: { position: "bottom" as const },
    },
  };

  const chartData3 = {
    labels: Object.keys(chart3_stats),
    datasets: [
      {
        label: "Số đơn hàng",
        data: Object.values(chart3_stats),
        backgroundColor: [
          "#4caf50", // for Chờ xử lí
          "#2196f3", // for Xác nhận
          "#ff9800", // for Đang giao
          "#f44336", // for Đã giao
          "#9c27b0", // for Đã hủy
        ],
        borderWidth: 1,
      },
    ],
  };

  const options3 = {
    responsive: true,
    maintainAspectRatio: false, // we'll set container dimensions manually
    plugins: {
      title: {
        display: true,
        text: "Thống kê đơn hàng",
        font: { size: 18 },
      },
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const reversedEarnings = [...earnings].reverse();

  const chartData4 = {
    labels: reversedEarnings.map((e) => e.month),
    datasets: [
      {
        label: "Doanh thu",
        data: reversedEarnings.map((e) => e.total_earning),
        fill: false,
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
      },
    ],
  };

  const options4 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Thống kê doanh thu",
        font: { size: 18 },
      },
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tháng",
        },
      },
      y: {
        title: {
          display: true,
          text: "Doanh thu",
        },
      },
    },
  };

  return (
    // <div
    //   style={{
    //     width: "calc(100% / 3)",
    //     height: "500px",
    //     margin: "0 auto",
    //   }}
    // >
    //   <Pie data={chartData} options={options} />
    // </div>
    <>
    <title>Thống kê</title>
    <div
    style={{
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
    >
      <div style={{ flex: "0 0 calc(100% / 3.1)", height: "500px" }}>
        <Pie data={chartData} options={options} />
      </div>
      <div style={{ flex: "0 0 calc(100% / 3.1)", height: "500px" }}>
        <Pie data={chartData2} options={options2} />
      </div>
      <div style={{ flex: "0 0 calc(100% / 3.1)", height: "500px" }}>
        <Pie data={chartData3} options={options3} />
      </div>
    </div>
    <div style={{ width: "auto", height: "400px", margin: "0 auto" }}>
      <Line data={chartData4} options={options4} />
    </div>
    </>
  );
}
