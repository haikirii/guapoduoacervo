import styles from './index.module.scss';

const svgTempYes = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
)

const svgTempNo = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

)

interface finishedProp {
  isFinished: boolean;
}

const IsFinishedSvg = (props: finishedProp) => {

  if(props.isFinished) {
    return (svgTempYes)
  }
    return (svgTempNo)
    
}

export default IsFinishedSvg;