import axios from 'axios';
class Collection {
  static async getCollection() {
    try {
      const {data} = await axios.get(
        'https://api-generator.retool.com/j3Iz08/collections',
      );
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
}
module.exports = Collection;
