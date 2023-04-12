import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png';

const NaoEncontrada = () => {
    return ( 
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>
                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div className={styles.botaoContainer}>
                    <button>Voltar</button>
                </div>
                <img className={styles.imagemCachorro} src={erro404} alt='Cachorro de óculos e vestido de humano'></img>
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
        
     );
}
 
export default NaoEncontrada;