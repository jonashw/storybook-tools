import { createFileRoute } from '@tanstack/react-router'
import StoryFormulaList from '../../components/StoryFormulaList'

export const Route = createFileRoute('/formula/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <StoryFormulaList/>;
}