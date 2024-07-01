import { Link, Outlet, ScrollRestoration } from "react-router-dom"

const Root = () => {
  return (
    <div>
      {/* ページ遷移時にスクロール位置をリセットする */}
      <ScrollRestoration />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Root