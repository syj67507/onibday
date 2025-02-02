import { OniCountdown } from "./components/OniCountdown";
import oniGif from "./assets/oni.gif";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: `url("${oniGif}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          fontFamily: "Courier",
          paddingLeft: "8px",
          paddingRight: "8px",
          fontSize: "2em",
          textAlign: "center",
        }}
      >
        <OniCountdown />
      </div>
    </div>
  )
}
