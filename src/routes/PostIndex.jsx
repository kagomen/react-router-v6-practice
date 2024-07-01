import { Link, useLoaderData } from "react-router-dom"

const PostIndex = () => {
  const { posts } = useLoaderData()
  return (
    <div>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export async function loader() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  return { posts }
}

export default PostIndex