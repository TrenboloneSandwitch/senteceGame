import React from "react";

function Cloud({ style, result, onClick, desc }) {
  return (
    <div
      style={{
        ...style,
        backgroundImage: "url(./cloud.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "0 0 .5em 0", padding: 0 }}>{result}</h1>
        {desc && (
          <p
            style={{
              padding: 0,
              color: "#567d00",
              fontSize: "1.5em",
            }}
          >
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

export default Cloud;
