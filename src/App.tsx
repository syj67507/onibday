// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { OniCountdown } from "./components/OniCountdown";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OniCountdown />
    </div>
  )
}
