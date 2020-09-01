import React, {useState} from 'react'
import css from './Slider.module.scss'
import ShowMore from "../ShowMore/ShowMore";
import Loader from "../Loader/Loader";

type PropsType = {
    slidesCount: number
    items: Array<React.ReactNode> | null
    title: string
    link?: string
    textColor?: string
    height?: string
}

const Slider: React.FC<PropsType> = ({slidesCount, items, title, link,textColor,height}) => {
    const [currentLastSlide, setCurrentLastSlide] = useState<number>(slidesCount)
    return <div style={{'minHeight': height ? height : '249px'}} className={`${css.slider} text-white`}>
        <div className={`${css.slider__title}`}>
            <h2 style={{'color': textColor ? textColor : 'white', 'fontWeight': 400}}>{title}</h2>
            {items && <div className={css.slider__buttons}>
                <button disabled={currentLastSlide === slidesCount}
                        onClick={() => setCurrentLastSlide(currentLastSlide - slidesCount + 1)}
                        className={css.slider__leftBtn} style={{
                    'opacity': currentLastSlide !== slidesCount ? 1 : 0
                }}>
                    <i className="fas fa-chevron-left"/>
                </button>
                <button disabled={currentLastSlide > items.length}
                        onClick={() => setCurrentLastSlide(currentLastSlide + slidesCount - 1)}
                        className={css.slider__rightBtn} style={{
                    'opacity': currentLastSlide < items.length + 1 ? 1 : 0
                }}>
                    <i className="fas fa-chevron-right"/>
                </button>
            </div>}
        </div>
        {items ? <div className={`${css.slider__content} d-flex`} style={{
            'transform': `translateX(-${
                ((currentLastSlide - 1) - (slidesCount - 1)) / (slidesCount - 1) * 180 * (slidesCount - 1)
            }px)`
        }}>
            {items}
            {currentLastSlide > items.length && link && <ShowMore link={link}/>}
        </div> : <Loader/>}
    </div>
}

export default Slider