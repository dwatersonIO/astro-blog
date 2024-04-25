import { createSignal } from "solid-js";
import Counter from "./Counter.jsx"

export default function Solidhome() {
  return (
    <>
        <h2>Learning Solid Details</h2>
        <Counter client:load />
    </>
    )
  }
