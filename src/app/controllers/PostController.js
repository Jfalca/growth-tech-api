import api from "../../services/api";

class PostController {

    async index(request, response) {

      const { data : users } = await api.get('users');
      const { data : posts } = await api.get('posts');

      const usersInACompanyGroup =  users.filter( user => user.company.name.match('Group'));

      const usersPost = posts.filter(post =>
       usersInACompanyGroup.find( user => post.userId === user.id)           
      )
      
      const updatedPosts = usersPost.map(post => {
        const user = usersInACompanyGroup.find( user => post.userId === user.id)        
        return {...post, user};
      });

      return response.status(200).json(updatedPosts);

    }

    async show(request, response) {

      const { id } = request.params;
      const { data : post } = await api.get(`posts/${id}`);
      const { data : user } = await api.get(`users/${post.userId}`);

      const updatedPost = {...post, user};
      
      return response.status(200).json(updatedPost);

    }

  }
  
  export default new PostController();
  