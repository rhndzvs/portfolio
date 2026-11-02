import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#0f0f0e",
        borderRadius: 8,
        color: "#ededea",
        display: "flex",
        fontFamily: "serif",
        fontSize: 132,
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      R
    </div>,
    {
      ...size,
    },
  );
}
