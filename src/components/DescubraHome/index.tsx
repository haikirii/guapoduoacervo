import CardDescubraFanfic from './CardDescubraFanfic';
import CardDescubraFanart from './CardDescubraFanart';

import { FanContentProps } from '../../types/FanContentType';

const DescubraHome = (props: FanContentProps) => {

  return (
    <>
      {props.isFanfic ? (
        <CardDescubraFanfic 
          title={props.title}
          cover={props.cover}
          author={props.author}
          words={props.words}
          chaps={props.chaps}
          isFinished={props.isFinished}
          linkFanfic={props.linkFanfic}
          sinopse={props.sinopse}
        />
      ) : (
        <CardDescubraFanart 
          linkFanart={props.linkFanart}
          img={props.img}
          alt={props.alt}
          title={props.title}
          artist={props.artist}
          profPic={props.profPic}
        />
      )}
    </>
  )

}

export default DescubraHome;