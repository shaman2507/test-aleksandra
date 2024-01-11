import css from './BannerTop.module.css';

const BannerTop = () => {
    return (
        <div className={css.bannerTopContainer}>
            <div>
                <img className={css.bannerTopImg} alt='Banner top' />
            </div>
            <div className={css.bannerTopContent}>
                <p className={css.bannerTopTitle}>
                    <b>Black Friday,</b>
                </p>
                <p className={css.bannerTopText}>
                    <b>10%OFF</b>
                </p>
                <p className={css.bannerTopTextFr}>
                    Use code <span className={css.bannerTopTextFrSpn}><b>10FRIDAY</b></span>
                </p>
            </div>
            <div className={css.bannerMenu}>
                <button type="button" className={css.bannerTopBtn}>
                    <img className={css.bannerTopBtnImg} alt='Menu button' ></img>
                    <p className={css.bannerTopBtnText}>Shop now</p>
                </button>
            </div>
        </div>
    );
};

export default BannerTop;