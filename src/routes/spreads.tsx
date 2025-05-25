import { createFileRoute } from '@tanstack/react-router'
import React from 'react';
import { SpreadPreview } from '../components/SpreadPreview';

export const Route = createFileRoute('/spreads')({
  component: RouteComponent,
})

function RouteComponent() {
  const [sheetCount, setSheetCount] = React.useState(2);
    return <div className="container">
        <form>
          <div className="row mb-3">
            <label
              htmlFor="inputSheetCount"
              className="col-sm-4 col-form-label"
            >
              Sheet Count
            </label>

            <div className="col-sm-8">
              <input
                onFocus={(e) => {
                  e.target.select();
                }}
                onChange={(e) => {
                  const c = parseInt(e.target.value);
                  setSheetCount(isNaN(c) ? 0 : c);
                  e.target.select();
                }}
                inputMode="numeric"
                pattern="[0-9]*"
                id="inputSheetCount"
                className="form-control"
                value={sheetCount}
                type="number"
                step="1"
                min="1"
                max="6"
              />
            </div>
          </div>
        </form>
        <p>
          Each sheet should be folded in half horizontally.
          <br />
          Sheets should be nested for stitching.
        </p>
        <label className="col-form-label">
          Storybook Spreads
        </label>
        <SpreadPreview sheetCount={sheetCount} />
      </div>;
}
