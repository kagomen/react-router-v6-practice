import { Outlet } from "react-router-dom"

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Outlet />
    </div>
  )
}


export default Posts