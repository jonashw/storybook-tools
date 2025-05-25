import { createFileRoute } from '@tanstack/react-router'
import React from 'react';

export const Route = createFileRoute('/spreads')({
  component: RouteComponent,
})

function classNames(flags: { [className: string]: boolean }) {
  return Object.entries(flags)
    .filter(([_, value]) => !!value)
    .map(([key, _]) => key)
    .join(" ");
}

function RouteComponent() {
  const [sheetCount, setSheetCount] = React.useState(2);
  const pageCount = sheetCount * 2 * 2;

  const pageSpreads =
    pageCount === 0
      ? [[undefined, undefined]]
      : [
        [undefined, { pageNumber: 1 }],
        ...(pageCount === 0
          ? []
          : Array.from({ length: pageCount / 2 - 1 },
            (_, i) => [
              { pageNumber: 2 * (i + 1) },
              { pageNumber: 2 * (i + 1) + 1 },
            ])),
        [{ pageNumber: pageCount }, undefined],
      ];
  
  const nonCoverPageSpreads = pageSpreads.filter(
    ([a, b]) => a !== undefined && b !== undefined
  );
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
          Storybook Spreads ({nonCoverPageSpreads.length})
        </label>

        {pageSpreads.map((pages, i) => (
          <div
            key={i}
            className="card mb-3 bg-dark"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              {pages.map((p, i) => (
                <div className="col-6" key={i}>
                  <div
                    className={classNames({
                      "card-body": true,
                      "bg-light": !!p,
                    })}
                    style={{ borderRadius: "4px", margin: "1px" }}
                  >
                    {/*
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                */}
                    <p
                      className={classNames({
                        "card-text": true,
                        "text-end": i % 2 === 1,
                        "text-start": i % 2 === 0,
                      })}
                    >
                      <small className="text-body-secondary">
                        {p ? p.pageNumber : ""}
                      </small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>;
}
