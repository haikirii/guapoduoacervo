import styles from './index.module.scss';
import DescubraHome from '../../components/DescubraHome';

import fanart from '/temp/fanart-ren1.png'
import profilePic from '/image/about/Ren-pfp.png';

import cover from '/temp/capa.jpg'

const TestComponent = () => {
  return (
    <main className={styles.main}>
      <DescubraHome 
          isFanart={true}
          linkFanart='/t'
          img={fanart}
          alt={'teste alt'}
          title={'Guapoduo meus pais'}
          artist={'Ren'}
          profPic={profilePic}
        />
        <DescubraHome 
          isFanfic={true} 
          title={'Sangria'}
          cover={cover}
          author={'Nan_Yelo'}
          words={12000}
          chaps={10}
          isFinished={true}
          linkFanfic='/t'
          sinopse='
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolorem ut vitae numquam dignissimos mollitia veritatis maxime ipsum, voluptatibus est illo tempore. Animi nostrum, error alias suscipit voluptatem iste non?'
        />
    </main>
  )
}

export default TestComponent;