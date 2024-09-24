import styles from './index.module.scss';
import SvgContainerFooter from '../SvgContainerFooter';

export interface Item {
  href?: string,
  text: string,
  isLink: boolean,
  isSvg: boolean,
  svgIcon?: JSX.Element,
}

interface LinkTextProps {
  title: string,
  items: Item[];
}

const FooterLinks = (props: LinkTextProps) => {

  const svgItems = props.items.filter(item => item.isSvg && item.svgIcon);
  const nonSvgItems = props.items.filter(item => !item.isSvg);

  return(
    <div className={styles.footerLinks}>
      <h4>{props.title}</h4>
      {
        svgItems.length > 0 && (
          <SvgContainerFooter 
            svgs={svgItems.map(item => ({
              href: item.href!,
              icon: item.svgIcon!,
            }))}
          />
        )
      }
      {
        nonSvgItems.map((item, index) => (
          <div key={index}>
            {item.isLink ? (
              <a href={item.href}>{item.text}</a>
            ) : (
              <span>{item.text}</span>
            )}
          </div>
        ))
      }
    </div>
  )
}

export default FooterLinks;