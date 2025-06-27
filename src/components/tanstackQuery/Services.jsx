import axios from 'axios';

const BlogServices = {
    getBlogList: async ()=> {
        try {
            const result = await axios.get("");
            return result;
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default BlogServices