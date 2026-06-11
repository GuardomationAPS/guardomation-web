import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon — circular charcoal disc with the same red-laser + yellow-cap
// treatment as the full Guardomation wordmark, slicing through a bold G.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #25282A 0%, #1a1c1e 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Yellow safety cap, left edge — same as the wordmark */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "44%",
            width: "4px",
            height: "8px",
            background: "#FFB500",
            display: "flex",
          }}
        />
        {/* Yellow safety cap, right edge */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "44%",
            width: "4px",
            height: "8px",
            background: "#FFB500",
            display: "flex",
          }}
        />
        {/* Red laser line spans between the yellow caps, cutting through the G */}
        <div
          style={{
            position: "absolute",
            top: "47%",
            left: "4px",
            right: "4px",
            height: "3px",
            background: "#BA0C2F",
            boxShadow: "0 0 4px rgba(186,12,47,0.8)",
            display: "flex",
          }}
        />
        <span
          style={{
            color: "white",
            fontSize: "26px",
            fontWeight: 900,
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1,
            letterSpacing: "-0.06em",
            position: "relative",
            zIndex: 1,
            textShadow: "0 0 2px rgba(0,0,0,0.5)",
          }}
        >
          G
        </span>
      </div>
    ),
    { ...size },
  );
}
