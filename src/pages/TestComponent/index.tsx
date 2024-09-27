import styles from './index.module.scss';
import DescubraHome from '../../components/DescubraHome';

import fanart from '/temp/fanart-ren1.png'
import cover from '/temp/capa.jpg'

const TestComponent = () => {
  return (
    <>
      <DescubraHome 
        isFanart={true}
        linkFanart='/t'
        img={fanart}
        alt={'teste alt'}
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
      />
    </>
  )
}

export default TestComponent;