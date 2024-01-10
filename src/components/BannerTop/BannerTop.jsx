import css from './BannerTop.module.css';

const BannerTop = () => {
    return (
        <div className={css.bannerTop}>
            <img className={css.bannerTopImg}  alt='Banner top mobile' />
            <div className={css.bannerTopContent}>
                <p>
                    Black Friday,
                </p>
                <p>
                    10%OFF
                </p>
                <button></button>
            </div>
        </div>
    );
};

export default BannerTop;