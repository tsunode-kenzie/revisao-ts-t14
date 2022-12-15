import { useRef, useEffect } from "react";

export const useOutClick = () => {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      /* montagem */
      function modalOutClick(event: MouseEvent) {
         const target = event.target as HTMLDivElement;
         const element = ref.current;

         if(!element) {
            return null;
         }

         if (!element.contains(target)) {
            // callback aqui
         }
      }
      window.addEventListener("mousedown", modalOutClick);

      return () => {
         window.removeEventListener("mousedown", modalOutClick);
      };
   }, []);

   return ref;
};