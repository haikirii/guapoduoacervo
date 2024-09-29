import styles from './index.module.scss';
import DescubraHome from '../../components/DescubraHome';

import profPic from '/image/about/Ren-pfp.png'
import fanart from '/temp/fanart-ren1.png'
import cover from '/temp/capa.jpg'

const TestComponent = () => {
  return (
    <main className={styles.main}>
      <DescubraHome 
        isFanart={true}
        linkFanart='/t'
        img={fanart}
        alt={'teste alt'}
        title={'guapoduo meus pais'}
        artist={'ren'}
        profPic={profPic}
      />
      <DescubraHome 
        isFanfic={true} 
        title={'Sacramento'}
        cover={cover}
        author={'Nan'}
        words={1000000}
        chaps={10}
        isFinished={true}
        linkFanfic='/t'
        sinopse='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsa alias blanditiis aliquid? Aut, rerum. A minus dolorem nesciunt animi dolor, magnam illum quam blanditiis, quas deserunt doloremque id?'
      />
    </main>
  )
}

export default TestComponent;