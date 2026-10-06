"use client";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ArgumentNodes from "./ArgumentNodes";
export default function ArgumentScene() {
  const [ok, setOk] = useState(false);
  useEffect(() => { setOk(matchMedia("(min-width:768px)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches); }, []);
  if (!ok) return <div className="grain absolute inset-0" aria-hidden />;
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 45 }}><ArgumentNodes /></Canvas>;
}
