import { useParams } from 'react-router-dom';
import styles from './Post.module.css';

const Post = () => {
    const parametros = useParams();
    console.log(parametros);
    return ( 
        <h2>Post {parametros.id}</h2>
     );
}
 
export default Post;