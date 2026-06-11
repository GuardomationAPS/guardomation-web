import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — rounded square with the full wordmark treatment:
// charcoal field, red laser stripe with yellow safety caps, bold G centered.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #25282A 0%, #1a1c1e 100%)",
          borderRadius: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Yellow safety cap, left edge */}
        <div
          style={{
            position: "absolute",
            left: "8px",
            top: "44%",
            width: "16px",
            height: "32px",
            background: "#FFB500",
            display: "flex",
            boxShadow: "0 0 4px rgba(255,181,0,0.4)",
          }}
        />
        {/* Yellow safety cap, right edge */}
        <div
          style={{
            position: "absolute",
            right: "8px",
            top: "44%",
            width: "16px",
            height: "32px",
            background: "#FFB500",
            display: "flex",
            boxShadow: "0 0 4px rgba(255,181,0,0.4)",
          }}
        />
        {/* Red laser line spans between caps, cutting through the G */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "24px",
            right: "24px",
            height: "12px",
            background: "linear-gradient(90deg, #BA0C2F 0%, #ff1f4d 50%, #BA0C2F 100%)",
            boxShadow: "0 0 12px rgba(186,12,47,0.9), 0 0 4px rgba(255,31,77,0.8)",
            transform: "translateY(-50%)",
            display: "flex",
          }}
        />
        <span
          style={{
            color: "white",
            fontSize: "132px",
            fontWeight: 900,
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1,
            letterSpacing: "-0.06em",
            position: "relative",
            zIndex: 1,
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          G
        </span>
      </div>
    ),
    { ...size },
  );
}
