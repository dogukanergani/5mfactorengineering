import { ImageResponse } from "next/og";

export const alt =
  "5M Factor Mühendislik | Ankara HVAC, Doğal Gaz, Yangın ve Tesisat Mühendisliği";
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
          padding: "72px",
          background: "#101828",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span style={{ fontSize: 120, fontWeight: 800, color: "#f97316" }}>
            5M
          </span>
          <span
            style={{
              marginLeft: 24,
              fontSize: 56,
              fontWeight: 700,
              color: "#d1d5db",
            }}
          >
            FACTOR
          </span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, marginTop: 8 }}>
          Mühendislik
        </div>
        <div
          style={{
            width: 120,
            height: 8,
            background: "#f97316",
            borderRadius: 4,
            marginTop: 32,
          }}
        />
        <div style={{ fontSize: 34, color: "#d1d5db", marginTop: 32 }}>
          Ankara HVAC, Doğal Gaz, Yangın Söndürme ve Tesisat Çözümleri
        </div>
        <div style={{ fontSize: 28, color: "#9ca3af", marginTop: 16 }}>
          Sincan Başkent OSB • www.5mfactormuhendislik.com.tr
        </div>
      </div>
    ),
    size
  );
}
