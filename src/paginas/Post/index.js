import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo';


const Post = () => {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    console.log(post);

    return ( 
        <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo} >
            text...
        </PostModelo>
     );
}
 
export default Post;