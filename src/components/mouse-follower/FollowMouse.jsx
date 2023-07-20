/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
const FollowMouse = () => {
  const [enabled, setEnabled] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({
        x: clientX,
        y: clientY,
      })
    }

    if (enabled) {
      window.addEventListener("pointermove", handleMove)
    }

    return () => {
      window.removeEventListener("pointermove", handleMove)
    }
  }, [enabled, position.x, position.y])

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled)

    return () => {
      document.body.classList.remove("no-cursor")
    }
  }, [enabled])
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderRadius: "50%",
        border: "2px solid white",
        pointerEvents: "none",
        left: -5,
        top: -5,
        width: 10,
        height: 10,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s",
        zIndex: 90,
      }}
    />
  )
}

export default FollowMouse
