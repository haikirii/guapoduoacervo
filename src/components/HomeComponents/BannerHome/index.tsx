import styles from './index.module.scss';
import guapoduoBanner from '/temp/guapoduo-banner-temp.png';

const BannerHome = () => {
  return (
    <div className={`${styles.banner}`}>
      <div className={`${styles.bannerContent}`}>
        <div className={styles.textoBanner}>
          <h1 className={styles.tituloPage}>
            Onde histórias são feitas para serem eternizadas
          </h1>
          <p>
            Arquivo exclusivo de universos protagonizados pelos Guapoduo!
          </p>
        </div>
        {/* adicionar alt após colocar o banner finalizado */}
        <div className={styles.imgBanner}>
          <img src={guapoduoBanner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BannerHome;