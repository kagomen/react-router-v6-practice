import { Link, Outlet, ScrollRestoration } from "react-router-dom"

const Root = () => {
  return (
    <div>

      <ScrollRestoration                /* ページ遷移時にスクロール位置をリセットする */
        getKey={location => {           // ブラウザの戻るボタン以外でページ遷移した場合もスクロール位置を記憶するオプション
          return location.pathname
        }}
      />
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