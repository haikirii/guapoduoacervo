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

export type FanContentProps = FanficProps | FanartProps;