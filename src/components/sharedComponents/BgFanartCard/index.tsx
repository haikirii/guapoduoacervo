import '../../../styles/index.scss'

interface bgFanart {
  img: string;
  alt?: string;
}

const BgFanartCard = (props: bgFanart) => {
  return <img src={props.img} alt={props.alt} className='img-bg-card'/>
}

export default BgFanartCard;