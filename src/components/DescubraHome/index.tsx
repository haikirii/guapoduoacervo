import styles from './index.module.scss';
import CardDescubraFanfic from './CardDescubraFanfic';
import CardDescubraFanart from './CardDescubraFanart';

interface FanficProps {
  isFanfic: true;
  isFanart?: false;
  title: string;
  cover: string;
  author: string;
  words: number;
  chaps: number;
  isFinished: boolean;
  linkFanfic: string;
}

interface FanartProps {
  isFanfic?: false;
  isFanart: true;
  linkFanart: string;
  img: string;
  alt?: string;
}

type FanContentProps = FanficProps | FanartProps;

const DescubraHome = (props: FanContentProps) => {
      if(props.isFanfic) {
        return (
          <CardDescubraFanfic 
            title={props.title}
            cover={props.cover}
            author={props.author}
            words={props.words}
            chaps={props.chaps}
            isFinished={props.isFinished}
            linkFanfic={props.linkFanfic}
          />
        )
      }
      
      if(props.isFanart) {
        return (
          <CardDescubraFanart 
            linkFanart={props.linkFanart}
            img={props.img}
            alt={props.alt}
          />
        )
      }
      
}

export default DescubraHome;