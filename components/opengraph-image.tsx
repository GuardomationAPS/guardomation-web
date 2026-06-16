import { ImageResponse } from "next/og";

export type Props = {
  title?: string;
};

const DEFAULT_TITLE = "Authorized distribution. Application expertise. On-site installation.";

export default async function OpengraphImage(
  props?: Props,
): Promise<ImageResponse> {
  const title = props?.title || DEFAULT_TITLE;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #25282A 0%, #1a1c1e 60%, #25282A 100%)",
          padding: "80px",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Yellow safety cap, far left */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "188px",
            width: "32px",
            height: "60px",
            background: "#FFB500",
            display: "flex",
          }}
        />
        {/* Yellow safety cap, far right */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "188px",
            width: "32px",
            height: "60px",
            background: "#FFB500",
            display: "flex",
          }}
        />
        {/* Red laser stripe across the entire width */}
        <div
          style={{
            position: "absolute",
            top: "205px",
            left: "32px",
            right: "32px",
            height: "26px",
            background: "linear-gradient(90deg, #BA0C2F 0%, #ff1f4d 50%, #BA0C2F 100%)",
            display: "flex",
          }}
        />

        {/* Top section: brand mark + master distributor badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "78px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "white",
              lineHeight: 1,
              display: "flex",
            }}
          >
            GUARDOMATION
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#FFB500",
              display: "flex",
            }}
          >
            U.S. Master Distributor
          </div>
        </div>

        {/* Subhead (under wordmark, above the laser line) */}
        <div
          style={{
            fontSize: "24px",
            fontStyle: "italic",
            color: "#A7A8AA",
            marginTop: "8px",
            display: "flex",
          }}
        >
          Machine Guarding Solutions
        </div>

        {/* Spacer — pushes title below the laser line */}
        <div style={{ height: "120px", display: "flex" }} />

        {/* Title — main message */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "white",
            maxWidth: "100%",
            display: "flex",
          }}
        >
          {title}
        </div>

        {/* Bottom line: location + tagline */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "20px",
            color: "#A7A8AA",
          }}
        >
          <div style={{ display: "flex" }}>guardomation.com</div>
          <div style={{ color: "#BA0C2F", display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>Three decades of guarding service</div>
          <div style={{ color: "#BA0C2F", display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>(281) 265-2832</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
