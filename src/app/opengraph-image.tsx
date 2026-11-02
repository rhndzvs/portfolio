import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} - ${profile.professionalTitle}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#f7f6f3",
        color: "#171717",
        display: "flex",
        flexDirection: "column",
        fontFamily: "serif",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div style={{ fontSize: 72, lineHeight: 1.1 }}>{profile.name}</div>
      <div style={{ fontFamily: "sans-serif", fontSize: 36, marginTop: 24 }}>
        {profile.professionalTitle}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
