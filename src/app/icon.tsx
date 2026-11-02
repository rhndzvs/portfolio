import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#0f0f0e",
        borderRadius: 8,
        color: "#ededea",
        display: "flex",
        fontFamily: "serif",
        fontSize: 24,
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
