"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Float } from "@react-three/drei";
import * as THREE from "three";
type LineLike = { material: THREE.Material };
const N = 26, BLUE = "#1b3dff";
export default function ArgumentNodes() {
  const g = useRef<THREE.Group>(null), lines = useRef<(LineLike | null)[]>([]);
  const { pts, edges } = useMemo(() => {
    let s = 7; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    const pts = Array.from({ length: N }, (_, i) => { const p = Math.acos(1 - (2 * (i + 0.5)) / N), t = Math.PI * (1 + Math.sqrt(5)) * i, R = 2.2 + (r() - 0.5) * 0.6; return new THREE.Vector3(R * Math.cos(t) * Math.sin(p), R * Math.sin(t) * Math.sin(p), R * Math.cos(p)); });
    const edges: [number, number][] = []; pts.forEach((a, i) => pts.forEach((b, j) => { if (j > i && a.distanceTo(b) < 1.9) edges.push([i, j]); }));
    return { pts, edges };
  }, []);
  useFrame(({ pointer, clock }) => {
    const sc = Math.min(1, scrollY / (innerHeight * 4)), gr = g.current!;
    gr.rotation.y = clock.elapsedTime * 0.1 + pointer.x * 0.5 + sc * 3;
    gr.rotation.x += (-pointer.y * 0.3 - gr.rotation.x) * 0.05;
    // every 4th edge "breaks" mid-scroll (the attack) and reconnects at the end (the rebuild)
    lines.current.forEach((l, i) => { if (l) l.material.opacity = i % 4 === 0 ? 1 - 0.92 * Math.sin(sc * Math.PI) : 0.45; });
  });
  return (<group ref={g} position={[2, 0, 0]}>
    <Float speed={1.5}><mesh><icosahedronGeometry args={[0.55, 1]} /><meshBasicMaterial color={BLUE} wireframe /></mesh></Float>
    {pts.map((p, i) => <mesh key={i} position={p}><sphereGeometry args={[i % 4 === 0 ? 0.1 : 0.06, 12, 12]} /><meshBasicMaterial color={i % 4 === 0 ? BLUE : "#0a0a0a"} /></mesh>)}
    {edges.map(([a, b], i) => <Line key={i} ref={(el) => { lines.current[i] = el as unknown as LineLike | null; }}
      points={[pts[a], pts[b]]} color={i % 4 === 0 ? BLUE : "#0a0a0a"} lineWidth={1} transparent opacity={0.45} />)}</group>);
}
