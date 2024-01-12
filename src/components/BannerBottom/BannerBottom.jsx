import css from './BannerBottom.module.css';

const BannerBottom = () => {
    return (
        <div className={css.bannerBtmContainer}>
            <button className={css.bannerBtmCloseBtn} type="button">
                <img className={css.bannerBtmCloseBtnImg} alt='Menu button' ></img>
            </button>
            <div className={css.bannerBtmContent}>
                <h2 className={css.bannerBtmTitle}>Black Friday</h2>
                <h3 className={css.bannerBtmSubtitle}>10%OFF</h3>
                <p className={css.bannerBtmText}>
                    Use code <span className={css.bannerBtmPart}>10FRIDAY</span> at checkout
                </p>
                <button className={css.bannerBtmBtn} type="button" >
                    <p className={css.bannerBtmBtnText}>Shop now</p>
                    </button>
            </div>
        </div>
    );
};

export default BannerBottom;