import css from './BannerTop.module.css';
import bannerTopMobile from '../../img/bannerTopMobile.jpg';
import menu from '../../img/menu-icon.svg';

const BannerTop = () => {
    return (
        <div className={css.bannerTopContainer}>
            <div>
                <img
                    className={css.bannerTopImg}
                    src={bannerTopMobile}
                    alt='Banner top mobile'
                    width="128"
                    height="54" />
            </div>
            <div className={css.bannerTopContent}>
                <p className={css.bannerTopTitle}>
                    Black Friday,
                    <span className={css.bannerTopText}><b>10%OFF</b></span>
                </p>
            </div>
            <div className={css.bannerMenu}>
                <button type="button" className={css.bannerTopBtn}>
                    <img src={menu} alt='Menu button' height="30" weight="30"></img>
                </button>
            </div>
        </div>
    );
};

export default BannerTop;