// import { Link } from "react-router-dom";
import { RiArrowUpDoubleLine } from "react-icons/ri";

export default function BackToHomeArrow() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed right-2 bottom-5 z-50">
      <RiArrowUpDoubleLine
        onClick={scrollToTop}
        className="text-4xl text-gold-600 hover:text-gold-800 transition cursor-pointer"
      />
    </div>
  );
}
