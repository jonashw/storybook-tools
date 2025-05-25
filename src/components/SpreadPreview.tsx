import { classNames } from './classNames';

export const PageSpreadPreview = ({ pages }: { pages: { text: string }[]; }) => {
    const sheetCount = Math.ceil(pages.length / 4);
    const extraPageCount = sheetCount * 4 - pages.length;
    //Books are constructed with 4 pages per sheet, so some pages may be blank if the total page count is not evenly divisible by 4.
    const extraPages = Array.from({length: extraPageCount}, () => ({ text: `(blank)` }));
    const actualPages = [...pages, ...extraPages].map((p,i) => ({...p, pageNumber: i+1}) );
    const actualPagesPlusCover = [undefined, ...actualPages, undefined]; 
    const spreadCount = actualPagesPlusCover.length / 2;
    const spreads = Array.from({length: spreadCount }, (_, i) => {
        const left = actualPagesPlusCover[i * 2];
        const right = actualPagesPlusCover[i * 2 + 1];
        return [ left, right ];
    });
    return <>
      <PageSpreads pageSpreads={spreads}/>
      <p>Sheets Needed: {sheetCount}</p>
    </>;
};

const PageSpreads = ({ pageSpreads} : { 
  pageSpreads: [
    { pageNumber: number, text?: string } | undefined,
    { pageNumber: number, text?: string } | undefined
  ][] 
}) => {
  return <>{pageSpreads.map((pages, i) => (
      <div
        key={i}
        className="card mb-3 bg-dark"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          {pages.map((p, i) => (
            <div className="col-6" key={i}>
              <div className={classNames({
                "card": true,
                "h-100": true,
                "bg-dark": !p,
              })}>
                <div
                  className={classNames({
                    "card-body": true,
                    "bg-light": !!p,
                  })}
                  style={{ borderRadius: "4px", margin: "1px" }}
                >
                  {p && p.text && <div className="text-center">{p.text}</div>}
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
            </div>
          ))}
        </div>
      </div>
    ))}</>;
};

export const SpreadPreview = ({ sheetCount }: { sheetCount: number; }) => {
  const pageCount = sheetCount * 2 * 2;

  const pageSpreads = pageCount === 0
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

  return <PageSpreads pageSpreads={pageSpreads} />;
};
