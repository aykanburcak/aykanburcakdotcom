import styles from "./gradient-animation.module.scss"
import { Gradient } from "../../utils";
import {useEffect} from "react";

export default function GradientAnimation() {
  useEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient("#gradient-canvas")
  }, [])

  return (
    <canvas id="gradient-canvas" className={styles.gradientAnimation}></canvas>
  )
}
