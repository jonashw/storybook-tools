import { createFileRoute } from '@tanstack/react-router'
import StoryFormulaList from '../components/StoryFormulaList'

export const Route = createFileRoute('/formulae')({
  component: RouteComponent,
})

function RouteComponent() {
  return <StoryFormulaList/>;
}