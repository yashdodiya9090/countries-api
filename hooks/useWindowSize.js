import { useState } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ windth: window.innerWidth, height: window.innerHeight })

    window.addEventListener('resize', () => {
        setWindowSize({ windth: window.innerWidth, height: window.innerHeight });
    })

    return [windowSize, setWindowSize]
}
