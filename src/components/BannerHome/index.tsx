import styles from './index.module.scss';
import banner from '/temp/Banner.png';

const BannerHome = () => {
  return (
    <div className={`${styles.banner}`}>
      <div className={`${styles.bannerContent} wrapper`}>
        <h1>
          Onde histórias são feitas para serem eternizadas
        </h1>
        <p>
          Arquivo exclusivo de universos protagonizados pelos Guapoduo!
        </p>
        {/* adicionar alt após colocar o banner finalizado */}
        {/* <img src={banner} alt="" /> */}
      </div>
    </div>
  )
}

export default BannerHome;