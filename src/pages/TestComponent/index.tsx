import Creditos from '../../components/Creditos';
import styles from './index.module.scss';
import icon from '/temp/valky.jpg';

import CardFanart from '../../components/HomeComponents/CardFanart/index.';

import profilePic from '/image/about/Ren-pfp.png';
import fanart1 from '/temp/fanart-ren1.png';
import fanart2 from '/temp/fanart-ren2.png';


const cardFanartInfo1 = {
  fanart: fanart1,
  title: 'Título fanart 1',
  profilePic: profilePic,
  profileName: 'Ren',
}

const cardFanartInfo2 = {
  fanart: fanart2,
  title: 'Título fanart 2',
  profilePic: profilePic,
  profileName: 'Ren',
}

const TestComponent = () => {
  return (
    <>
      <CardFanart 
          fanart={cardFanartInfo1.fanart}
          title={cardFanartInfo1.title}
          profilePic={cardFanartInfo1.profilePic}
          profileName={cardFanartInfo1.profileName}
        />
        
      <CardFanart 
          fanart={cardFanartInfo2.fanart}
          title={cardFanartInfo2.title}
          profilePic={cardFanartInfo2.profilePic}
          profileName={cardFanartInfo2.profileName}
        />
    </>
  )
}

export default TestComponent;
