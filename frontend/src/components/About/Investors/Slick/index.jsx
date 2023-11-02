import React,{useMemo} from "react";
import Slider from "react-slick";
import useBreakPoint from "@/hooks/useBreakPoint";
import useWinWidth from "@/hooks/useWinWidth";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const baseSettings = {
  className: "center",
  // centerMode: true,
  infinite: true,
  // centerPadding: "100px",
  slidesToShow: 6,
  speed: 500,
  autoplay: true,
  pauseOnHover: true,
  variableWidth: true,
};
export default function CenterMode({descList}) {
  const breakPoint = useBreakPoint()
  const size = useWinWidth();
  
  
  return (
    <div className={breakPoint === "s" ? "pSlick2" : "pSlick2 pc"}>
      <Slider {...baseSettings} slidesToShow={5}>
        {descList.map((i) => {
          return ( 
            <img className={`mySlickItem img${i.id}`} key={i.id} src={i.imgL} alt="" />
          );
        })}
      </Slider>
    </div>
  );
}
