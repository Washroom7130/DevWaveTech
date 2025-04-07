"use client";
import React from "react";

const LoadingOverlay: React.FC = () => {
  return (
    <div
      id="loadingOverlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(255,255,255,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        opacity: 1,
        transition: "opacity 0.3s ease-out",
      }}
    >
      <div>
        <div
          className="spinner"
          style={{
            border: "8px solid #f3f3f3",
            borderTop: "8px solid #B19361",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            animation: "spin 1s linear infinite",
            margin: "0 auto",
          }}
        />
        <div
          className="loading-text"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "20px",
            color: "#333",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Đang tải
        </div>
      </div>

      {/* Inline keyframes for animation */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;
