import axios from 'axios';

class PostsServices {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3000/api',
    });
  }

  async getAll() {
    try {
      const { data } = await this.client.get('posts');

      return data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }

  async get(id) {
    try {
      const { data } = await this.client.get(`/post/${id}`);

      return data;
    } catch (error) {
      console.log(error);
    }

    return {};
  }
}

export default new PostsServices();