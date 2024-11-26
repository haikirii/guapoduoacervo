import ImagemFanart from '../../components/FanartProtot/ImagemFanart';
import Capa from '/temp/capa.jpg';
import styles from './index.module.scss';
import '../../styles/index.scss';
import TituloFanart from '../../components/FanartProtot/TituloFanart';
import TextoFanart from '../../components/FanartProtot/TextoFanart';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from 'react';
import Tag from '../../components/CardFanfic/Tag';
import TagCategoria from '../../components/FanartProtot/TagCategoria';

const FanartProtot = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
        <div className={`wrapper ${styles.principal}`}>
            <ImagemFanart imagem={Capa}/>
            <div className={styles.alinha}>
                <TituloFanart titulo='Capa de The Reason'/>
                <TextoFanart texto='Sed tincidunt turpis at lorem laoreet condimentum. In a velit quis ipsum pharetra convallis a in risus. Maecenas id tellus pulvinar, fermentum massa eget, convallis massa. Aliquam erat volutpat. 

                Duis faucibus magna a tortor tristique, id condimentum turpis convallis. Integer condimentum, nisi a ultrices egestas, lacus sem vulputate massa, sed ultrices arcu nibh eu est. Duis rutrum nisl sit amet elit suscipit sodales. Phasellus scelerisque purus dui. 

                Nulla sit amet nulla feugiat, rutrum turpis id, rhoncus diam. Vestibulum non egestas velit, ac euismod lectus. Integer semper nibh libero. Nullam sit amet euismod dolor, cursus dictum turpis. Nulla facilisi. Vestibulum lectus ex, cursus id libero ac, rhoncus eleifend turpis. Vivamus cursus urna vel elit ultricies sagittis.'/>
                <div className={styles.tags}>
                    <TagCategoria texto={'Uma tagggggggggggggggg'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                    <Tag texto={'Uma tag'} link={'asdad'}/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default FanartProtot;