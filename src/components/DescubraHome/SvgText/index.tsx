import styles from './index.module.scss';
import {formatWordsFic} from '../../../service/StringUtils';

const svgTemp1 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
)

const svgTemp2 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
      <div className='svgNumber'>
        {svgTemp1}
        {formatWordsFic(props.words, 1)}
      </div>
    )
  }

  if(props.isChaps) {
    return (
      <div className='svgNumber'>
        {svgTemp2}
        {props.chaps}
      </div>
    )
  }

}

export default SvgText;