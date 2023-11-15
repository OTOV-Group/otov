import { useEffect, MutableRefObject } from "react";

export function useClickOutsideElement<T>(ref: MutableRefObject<HTMLElement>, outsideClick?: () => any, insideClick?: () => any): any {
  useEffect(() => {
    function handleClickOutside(event: any) {
        console.log(!ref.current.contains(event.target))
      if (ref.current && !ref.current.contains(event.target)) {
        if(outsideClick) {
            outsideClick();
        }
      }
      if(insideClick) {
        insideClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}