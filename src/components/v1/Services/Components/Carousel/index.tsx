

import * as React from "react";
import Carousel from "react-elastic-carousel";
import Pagination from "./Pagination";
import Arrow from "./Arrow";
import useStyles from "../../style" 

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2},
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4},
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
];

type Props = {
    children: any;
};

let resetTimeout: any;
let time: any = 3000;

const ValidCarousel = ({ children }: Props) => {
    const carouselRef: any = React.useRef(null);
    const classes = useStyles();
    
    return (
        //@ts-ignore
        <Carousel
            className={classes.carousel}
            ref={carouselRef}
            isRTL={false}
            pagination={true}
            onNextEnd={({ index }) => {
                clearTimeout(resetTimeout);
                resetTimeout = setTimeout(() => {
                    carouselRef?.current?.goTo(0);
                }, time); // same time
            }}
            breakPoints={breakPoints}
            renderPagination={Pagination}
            enableAutoPlay
            autoPlaySpeed={time}
            renderArrow={Arrow}>
            {children}
        </Carousel>
    )}

export default ValidCarousel;

