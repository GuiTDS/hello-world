import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/minha_foto.png';
import styles from './SobreMim.module.css';

const SobreMim = () => {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo='Sobre mim'>
            <h3 className={styles.subtitulo}>Olá, eu sou o Guilherme!</h3>
            <img src={fotoCapa} alt="Foto do Guilherme Sanches" className={styles.fotoSobreMim} />
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate illo non est molestias, sapiente ipsum molestiae quidem porro eaque provident laborum similique dolores. Doloremque tempora minima nam provident possimus?</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim eum, facilis nisi perspiciatis modi culpa? Ipsum natus, rem, consectetur numquam, eum dolore cumque omnis vero eligendi voluptatem hic vel.</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque recusandae, asperiores laborum aliquam odit nesciunt impedit rerum quidem praesentium labore illum ab voluptatem, accusantium ratione nihil suscipit possimus placeat?</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugiat voluptate! Iste veniam odit sit ducimus perferendis facere delectus explicabo nam eos maiores deserunt, ipsam veritatis iure at sint corrupti!</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio neque ducimus eos ut commodi dignissimos sit error nostrum placeat laudantium aperiam aliquam, praesentium, necessitatibus sapiente numquam et facilis quo nesciunt.</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda voluptatibus ducimus doloremque exercitationem incidunt amet ipsa suscipit debitis neque vel, sed similique possimus hic excepturi perspiciatis illo nemo maiores.</p>
        </PostModelo>
    );
}

export default SobreMim;