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
  sinopse: string;
}

interface FanartProps {
  isFanfic?: false;
  isFanart: true;
  linkFanart: string;
  img: string;
  alt?: string;
  title: string;
  artist: string;
  profPic: string;
}

type FanContentProps = FanficProps | FanartProps;

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