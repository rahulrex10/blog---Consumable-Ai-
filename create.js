import axios from 'axios'; 
import { useRouter } from 'next/router';
import Header from '../components/Header';
import PostForm from '../components/PostForm';

export default function CreatePost() {
  const router = useRouter();

  const handleCreatePost = (newPost) => {
    axios.post('http://localhost:5000/posts', newPost).then(() => {
      router.push('/');
    }).catch((error) => {
      console.error("There was an error creating the post!", error);
    });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
        <PostForm onSubmit={handleCreatePost} />
      </div>
    </div>
  );
}
