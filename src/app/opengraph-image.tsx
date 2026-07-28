import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#5B3A29",
          color: "#F4EEE6",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#B8863B",
          }}
        >
          Edmonton, Alberta
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Built right. The first time.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#F4EEE6CC",
          }}
        >
          ENJ Renovations Ltd — kitchens, bathrooms, and cabinetry
        </div>
      </div>
    ),
    { ...size }
  );
}
