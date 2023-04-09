import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

const Banner = () => {
    return ( 
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                
                <p className={styles.paragrafo}>
                    Boas Vindas ao meu espaço pessoal! Eu sou Guilherme Sanches, 
                    estudante de Ciência da Computação na Universidade Técnologica Federal do Paraná
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto}  src={minhaFoto} alt='Foto do Guilherme Sanches'/>
            </div>
        </div>
     );
}
 
export default Banner;