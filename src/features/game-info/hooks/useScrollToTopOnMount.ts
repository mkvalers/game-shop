import { useLayoutEffect } from "react";

const useScrollToTopOnMount = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
};

export default useScrollToTopOnMount;
