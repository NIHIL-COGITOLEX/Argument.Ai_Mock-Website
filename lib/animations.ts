import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
export const reduced = () => typeof window !== "undefined" && matchMedia("(prefers-reduced-motion:reduce)").matches;
