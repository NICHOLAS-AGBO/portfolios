const SIZE:number = 900;

/** 
 * 
@description ANIMATION BREAKPOINTS
*
* Breakpoints for GSAP ScrollTrigger, MatchMedia
* ```
const ANIME_BREAKPOINTS = {
*    isDesktop: string,
*   isMobile: string,
*   reduceMotion: string
}
* ```
@author NICHOLAS AGBO
@see https://greensock.com/docs/v3/GSAP
*/ 

const ANIME_BREAKPOINTS:{[type:string]: string} = {
    isDesktop: `(min-width: ${SIZE}px)`,
    isMobile: `(max-width: ${SIZE - 1}px)`,
    reduceMotion: "(prefers-reduced-motion: reduce)"
}


export default ANIME_BREAKPOINTS;