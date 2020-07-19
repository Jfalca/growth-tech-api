import api from "../../services/api";

class PostController {

    async index(request, response) {

      const { data : posts } = await api.get('posts');
      const { data : users } = await api.get('users');

      const updatedPosts = posts.map(post => {
        const user = users.find( user => post.userId === user.id)        
        return {...post, user};
      })
      
      return response.status(200).json(updatedPosts);

    }
  }
  
  export default new PostController();
  