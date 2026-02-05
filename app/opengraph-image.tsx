import { ImageResponse } from "next/og";

export const alt = "CurveClear — Digital Transformation & Systems Firm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #f5f5f5 0%, #e5e5e5 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 600, color: "#0a0a0a", letterSpacing: "-0.02em" }}>
          CurveClear
        </div>
        <div style={{ fontSize: 28, color: "#525252", marginTop: 12 }}>
          Digital Transformation & Systems — Dubai, UAE
        </div>
      </div>
    ),
    { ...size }
  );
}
