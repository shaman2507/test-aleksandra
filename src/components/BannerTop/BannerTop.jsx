import css from './BannerTop.module.css';

const BannerTop = () => {
    return (
        <div className={css.bannerTopContainer}>
            <div>
                <img className={css.bannerTopImg} alt='Banner top' />
            </div>
            <div className={css.bannerTopContent}>
                <p className={css.bannerTopTitle}>
                    Black Friday, 
                    <span className={css.bannerTopTitleFull}>24-27 Nov</span>
                </p>
                <p className={css.bannerTopText}>
                    <b>10%OFF</b>
                </p>
                <p className={css.bannerTopTextFr}>
                    Use code
                    <span className={css.bannerTopTextFrSpn}>10FRIDAY</span>
                    <span className={css.bannerTopTextFrSpnFull}>at checkout</span>
                </p>
            </div>
            <div className={css.bannerMenu}>
                <button type="button" className={css.bannerTopBtn}>
                    <img className={css.bannerTopBtnImg} alt='Menu button' ></img>
                    <p className={css.bannerTopBtnText}>Shop now</p>
                </button>
                <button type="button" className={css.bannerTopBtnClose}>
                    <img className={css.bannerTopBtnCloseImg} alt='Banner close button' ></img>
                </button>
            </div>
        </div>
    );
};

export default BannerTop;