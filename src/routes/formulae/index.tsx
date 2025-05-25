import { createFileRoute } from '@tanstack/react-router'
import "./StoryFormulaList.css";
import { Link } from "@tanstack/react-router";
import storyFormulae from "../../components/story-formulae";

export const Route = createFileRoute('/formulae/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="container mb-5">
    <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
      {storyFormulae.map((f, i) => (
        <div className="col" key={i}>
          <div className="story card mb-3 h-100">
            <div className="card-body">
              <div>
                <Link to={`/formulae/${f.id}`} className="stretched-link">{f.name}</Link>
              </div>
          
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>;
}