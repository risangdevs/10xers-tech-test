import axios from 'axios';
async function getCollection() {
    try {
      const {data} = await axios.get(
        'https://api-generator.retool.com/jlEsLB/wallet_content',
      );
      // console.log(data);
      const parsed = data.map((e, i) => {
        return {
          id: e.id,
          external_id: e.external_id,
          image_url: e.image_url,
          name: e.name,
          token_id: e.token_id,
          description: e.description,
          collection: JSON.parse(e.collection_json),
        };
      });
      const group = parsed.reduce((group, e) => {
        const { name } = e.collection;
        group[name] = group[name] ?? [];
        group[name].push(e);
        return group;
    }, {});
     
      return group
    } catch (error) {
      return error;
    }
  }

export default getCollection
