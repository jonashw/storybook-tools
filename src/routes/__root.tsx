import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="navbar navbar-expand bg-body-tertiary mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Jon's Storybook Tools</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {[
                <Link to="/formulae" className="nav-link">Formulae</Link>,
                <Link to="/spreads" className="nav-link">Spreads</Link>,
              ].map(link => <li className="nav-item">{link}</li>)}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
