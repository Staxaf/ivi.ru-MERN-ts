import React, {useState, useEffect} from 'react'
import css from './Slider.module.scss'

type PropsType = {
    slidesCount: number
    items: Array<React.ReactNode>
    children: React.ReactNode,
    title: string
}

const Slider: React.FC<PropsType> = ({slidesCount, items, children, title}) => {
    const [currentLastSlide, setCurrentLastSlide] = useState<number>(slidesCount)
    console.log(((currentLastSlide - 1) - (slidesCount - 1)) / (slidesCount - 1), currentLastSlide - 1, slidesCount - 1)
    return <div className={`${css.slider} text-white`}>
        <div className={`${css.slider__title}`}>
            <h2 className={`text-white`}>Persons</h2>
            <div className={css.slider__buttons}>
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
            </div>
        </div>
        <div className={`${css.slider__content} d-flex`} style={{
            'transform': `translateX(-${((currentLastSlide - 1) - (slidesCount - 1)) / (slidesCount - 1) * 85}%)`
        }}>
            {items}
            {currentLastSlide > items.length && children}

        </div>
    </div>
}

export default Slider

/*

const Slider: React.FC<PropsType> = ({slidesCount, items, children}: PropsType) => {
    const setCustomShownSlides = () => items.filter((item, i) => i <= currentLastSlide - 1 && i > currentLastSlide - slidesCount - 1)
    const [currentLastSlide, setCurrentLastSlide] = useState(slidesCount)
    const [shownSlides, setShownSlides] = useState(setCustomShownSlides())
    useEffect(() => {
        setShownSlides(setCustomShownSlides())
    }, [currentLastSlide])
    return <div className={`${css.slider} text-white`}>
        {currentLastSlide !== slidesCount &&
        <button onClick={() => setCurrentLastSlide(currentLastSlide - slidesCount + 1)} className={css.slider__leftBtn}>
            <i className="fas fa-chevron-left"/>
        </button>}
        <div className={`${css.slider__content} d-flex`}>
            {shownSlides}
            {currentLastSlide > items.length && children}
        </div>
        {currentLastSlide < items.length + 1 &&
        <button onClick={() => setCurrentLastSlide(currentLastSlide + slidesCount - 1)}
                className={css.slider__rightBtn}>
            <i className="fas fa-chevron-right"/>
        </button>}
    </div>
}
 */