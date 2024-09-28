import styles from './index.module.scss';
import {formatWordsFic} from '../../../../service/StringUtils';

const svgTemp1 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
  </svg>
)

const svgTemp2 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
)

interface WordsProps {
  isWords: true;
  isChaps?: false;
  words: number;
}

interface ChapsProps {
  isWords?: false;
  isChaps: true;
  chaps: number;
}

type SvgTextProps = WordsProps | ChapsProps;

const SvgText = (props:SvgTextProps) => {

  if(props.isWords) {
    return (
      <div className={styles.svgNumber}>
        {svgTemp1}
        {formatWordsFic(props.words, 1)}
      </div>
    )
  }

  if(props.isChaps) {
    return (
      <div className={styles.svgNumber}>
        {svgTemp2}
        {props.chaps}
      </div>
    )
  }

}

export default SvgText;