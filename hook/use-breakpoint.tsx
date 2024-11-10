/**
 * @desc The 'useBreakpoint()' hook is used to get the current 
 *       screen breakpoint based on the TailwindCSS config.
 *
 * @usage
 *    import { useBreakpoint } from "@/hooks/useBreakpoint";
 *
 *    const { isAboveSm, isBelowSm, sm } = useBreakpoint("sm");
 *    console.log({ isAboveSm, isBelowSm, sm });
 *
 *    const { isAboveMd } = useBreakpoint("md");
 *    const { isAboveLg } = useBreakpoint("lg");
 *    const { isAbove2Xl } = useBreakpoint("2xl");
 *    console.log({ isAboveMd, isAboveLg, isAbove2Xl });
 *
 * @see https://stackoverflow.com/a/76630444/6543935
 * @requirements npm install react-responsive
 */
import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";
import { Config, ScreensConfig } from "tailwindcss/types/config";

import tailwindConfig from "@/tailwind.config"; // Your tailwind config
import { useEffect, useState } from "react";

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

const breakpoints = fullConfig?.theme?.screens || {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
};

export function useBreakpoint<K extends string>(breakpointKey: K) {
    const breakpointValue = breakpoints[breakpointKey as keyof typeof breakpoints];
    const bool = useMediaQuery({
        query: `(max-width: ${breakpointValue})`,
    });
    const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);

    type KeyAbove = `isAbove${Capitalize<K>}`;
    type KeyBelow = `isBelow${Capitalize<K>}`;

    return {
        [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, "")),
        [`isAbove${capitalizedKey}`]: !bool,
        [`isBelow${capitalizedKey}`]: bool,
    } as Record<K, number> & Record<KeyAbove | KeyBelow, boolean>;
}

export function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }