import styles from './index.module.scss';

interface SvgContainerProps {
  svgs: {href: string; icon: JSX.Element}[];
}

const SvgContainerFooter = (props: SvgContainerProps) => {
  return (
    <div className={styles.contatoSvg}>
      {props.svgs.map((item, index) => (
        <a href={item.href} key={index}>{item.icon}</a>
      ))}
    </div> 
  );
}

export default SvgContainerFooter;