import { createFileRoute } from '@tanstack/react-router'
import storyFormulae from "../../components/story-formulae";
import type { StoryFormula } from '@/components/StoryFormula';
import { PageSpreadPreview} from '@/components/SpreadPreview';

export const Route = createFileRoute('/formulae/$formulaId')({
  component: RouteComponent,
  loader:  async ({ params }) => {
    if(!params.formulaId){
      throw new Error('No formula ID provided')
    }
    // Simulate fetching formula details based on the ID
    const sf = storyFormulae.find(f => f.id === params.formulaId);
    if (!sf) {
      throw new Error(`Formula with ID ${params.formulaId} not found`);
    }
    return Promise.resolve(sf);
  }
})

function RouteComponent() {
  const formula: StoryFormula = Route.useLoaderData();
  return <div className="container">
    <h1>{formula.name}</h1>
    {formula.source && (
      <p>
        <a href={formula.source} target="_blank">
          Source
        </a>
      </p>
    )}
    <div className="row">
      <div className="col-md-6">
        <div>
          {(formula.description || "").split("\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ol>
          {formula.progression.map((p, index) => (
            <li key={index}>
              <strong>{p.name}</strong>
              {(p.description || "").split("\n").filter(str => str.length > 0).map(p => <p>{p}</p>)}
            </li>
          ))}
        </ol>
      </div>
      <div className="col-md-6">
        <PageSpreadPreview pages={formula.progression.map(p => ({ text: p.name }))} />
      </div>
    </div>
  </div>;
}