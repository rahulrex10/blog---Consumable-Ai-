import Link from 'next/link';

const BlogCard = ({ post, onDelete }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
    <p className="text-gray-700 mb-4">{post.content.substring(0, 100)}...</p>
    <div className="flex justify-between items-center">
      <Link href={`/posts/${post.id}`}>
        <a className="text-blue-500 hover:text-blue-700 font-medium">View Post</a>
      </Link>
      <button
        onClick={() => onDelete(post.id)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
      >
        Delete
      </button>
    </div>
  </div>
);

export default BlogCard;
