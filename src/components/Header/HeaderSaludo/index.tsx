import styles from "./index.module.scss";

interface propsSaludo {
  pfp: string;
  name: string;
}

const HeaderSaludo = (props: propsSaludo) => {
  const dia = new Date();
  const hora = dia.getHours();
  let saludo: string;
  // mudar isso quando colocar tradução pfv
  if (hora > 6 && hora < 12) {
    saludo = "Bom dia,";
  } else if (hora < 18) {
    saludo = "Boa tarde,";
  } else {
    saludo = "Boa noite,";
  }
  return (
    <div className={styles.saludoBlock}>
      <div className={styles.pfp}>
        <img src={props.pfp} alt={`Foto de perfil de ${props.name}`} />
      </div>
      <div className={styles.saludoText}>
        <span className={styles.saludo}>{saludo}</span>
        <span className={styles.name}>{props.name}</span>
      </div>
    </div>
  );
};

export default HeaderSaludo;
