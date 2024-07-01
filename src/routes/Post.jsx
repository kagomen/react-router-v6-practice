import { Link, useLoaderData } from "react-router-dom"

const Post = () => {
  const { post } = useLoaderData()
  return (
    <div>
      <label>title</label>
      <h2>{post.title}</h2>
      <label>body</label>
      <p>{post.body}</p>
      <div className="space">space for test</div>
      <Link to="/posts">← prev</Link>
    </div>
  )
}

export async function loader({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  if (!res.ok) {
    throw Error('Not Found')
  }
  const post = await res.json()
  return { post }
}

export default Post