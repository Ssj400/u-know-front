import React from "react";


export default function AddPostButton() {

    return (
        <button
            onClick={() => window.location.href =  "/main/posts/create"}
            style={{
                position: "fixed",
                right: "2rem",
                bottom: "2rem",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#1976d2",
                color: "#fff",
                border: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 1000,
            }}
            aria-label="Add Post"
        >
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
        </button>
    );
}