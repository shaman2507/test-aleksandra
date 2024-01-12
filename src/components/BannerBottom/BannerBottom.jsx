import { useState } from 'react';
import css from './BannerBottom.module.css';

const BannerBottom = ({className }) => {
    const [isBannerClosed, setIsBannerClosed] = useState(
        sessionStorage.getItem("isBannerClosed") === "true"
    );

    const handleBannerClose = () => {
        sessionStorage.setItem("isBannerClosed", "true");
        setIsBannerClosed(true);
    };

    if (isBannerClosed) {
        return null;
    }

    return (
        <div className={className}>
            <div className={css.bannerBtmContainer}>
                <button className={css.bannerBtmCloseBtn} type="button" onClick={handleBannerClose}>
                    <img className={css.bannerBtmCloseBtnImg} alt='Menu button' ></img>
                </button>
                <div className={css.bannerBtmWrapper}>
                    <div className={css.bannerBtmContent}>
                        <h2 className={css.bannerBtmTitle}>Black Friday</h2>
                        <h3 className={css.bannerBtmSubtitle}>10%OFF</h3>
                        <p className={css.bannerBtmText}>
                            Use code <span className={css.bannerBtmPart}>10FRIDAY</span> at checkout
                        </p>
                        <button className={css.bannerBtmBtn} type="button" >
                            <p className={css.bannerBtmBtnText}>Shop now</p>
                            <p className={css.bannerBtmBtnTextFull}>Shop now through Monday</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;