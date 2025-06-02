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
        return [ left, right ] as PageSpread;
    });
    const spreadPages = spreads.flatMap(ps => ps).filter(p => !!p);
    const pageCount = actualPages.length;
    const sheets = Array.from({length: sheetCount}, (_, i) => ({
      n: i+1,
      front: {left: pageCount - i * 2, right: 1 + i * 2},
      back: {left: 2 + i * 2, right: pageCount - 1 - i * 2},

    }));
    return <>
      <PageSpreads pageSpreads={spreads}/>
      <p>Sheets Needed: {sheetCount}</p>
      
      <div className="row">
        <div className="col-6">
          <table className="sheet-table">
            <tbody>
              {sheets.map((sheet, i) => (
                <>
                  <tr key={`${i}-front`} className="sheet-front">
                    <td rowSpan={2}>
                      Sheet&nbsp;{sheet.n}
                    </td>
                    <td className="page page-left"><sub>{sheet.front.left}</sub></td>
                    <td className="page page-right"><sub>{sheet.front.right}</sub></td>
                  </tr>
                  <tr key={`${i}-back`} className="sheet-back">
                    <td className="page page-left"><sup>{sheet.back.right}</sup></td>
                    <td className="page page-right"><sup>{sheet.back.left}</sup></td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <pre className="card p-2" style={{lineHeight: "1em"}}
          dangerouslySetInnerHTML={{__html: sheets.map((sheet) => {
            const padS = (n: number) => n.toString().padStart(2,' ');
            const padE = (n: number) => n.toString().padEnd(2,' ');
            return [
            `&nbsp;     /\\     `,
              `&nbsp;    /  \\    `,
              `&nbsp;   /    \\   `,
              `&nbsp;${padS(sheet.front.left)}/${padE(sheet.back.right)}  ${padS(sheet.back.left)}\\${padE(sheet.front.right)}`
            ].join('<br/>');
          }).join("\n")}}/>
        </div>
      </div>
      <h4>For Printing:</h4>
      <h5>Sheet Fronts:</h5>
      <PageSpreads pageSpreads={
        sheets.map(sheet => [
          spreadPages[sheet.front.left - 1],
          spreadPages[sheet.front.right - 1]
        ] as PageSpread)
      }/>
      <h5>Sheet Backs:</h5>
      <PageSpreads pageSpreads={
        sheets.map(sheet => [
          spreadPages[sheet.back.left - 1],
          spreadPages[sheet.back.right - 1]
        ] as PageSpread)
      }/>
    </>;
};

type PageSpread = [
    { pageNumber: number, text?: string } | undefined,
    { pageNumber: number, text?: string } | undefined
  ];

const PageSpreads = ({ pageSpreads} : { 
  pageSpreads: PageSpread[] 
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
    ? [[undefined, undefined] as PageSpread]
    : [
      [undefined, { pageNumber: 1 }] as PageSpread,
      ...(pageCount === 0
        ? []
        : Array.from({ length: pageCount / 2 - 1 },
          (_, i) => [
            { pageNumber: 2 * (i + 1) },
            { pageNumber: 2 * (i + 1) + 1 },
          ] as PageSpread)),
      [{ pageNumber: pageCount }, undefined] as PageSpread,
    ];

  return <PageSpreads pageSpreads={pageSpreads} />;
};