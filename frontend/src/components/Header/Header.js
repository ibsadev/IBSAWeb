import {useState, useEffect} from 'react'
import DefaultHeader from './DefaultHeader'
import MobileHeader from './MobileHeader'

export default function Header() {
   const size = useWindowSize();
   let renderedHeader = size.width <= 700 ? <MobileHeader /> : <DefaultHeader />
   return renderedHeader;
}

// Hook to handle window size resizing for conditional header rendering
function useWindowSize() {
   const [windowSize, setWindowSize] = useState({
     width: 0,
     height: 0,
   });
 
   useEffect(() => {
     function handleResize() {
       setWindowSize({
         width: window.innerWidth,
         height: window.innerHeight,
       });
     }
     
     window.addEventListener("resize", handleResize);
     
     handleResize();
     
     return () => window.removeEventListener("resize", handleResize);
   }, []); 
 
   return windowSize;
 }
