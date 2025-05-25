import storyFormulae from "./story-formulae";
import "./StoryFormulaList.css";

const StoryFormulaList = () => (
  <div className="container mb-5">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {storyFormulae.map((f, i) => (
        <div className="col" key={i}>
          <div className="story card mb-3 h-100">
            <div className="card-body">
              <div>
                <strong>{f.name}</strong>
                {f.source && (
                  <a href={f.source} target="_blank" className="float-end">
                    Source
                  </a>
                )}
              </div>
              <div>
                <div>
                  {f.progression.map((p, i) => (
                    <div className="moment" key={i}>
                      {(() => {
                        switch (p.type) {
                          case "period":
                            return (
                              <>
                                <span>&darr;</span>
                                <span>{p.name}</span>
                              </>
                            );
                          case "moment":
                            return (
                              <>
                                <span>&bull;</span>
                                <span>{p.name}</span>
                                {p.fortune && (
                                  <span style={{ left: p.fortune / 2 + 50 + "%" }}>
                                    |
                                  </span>
                                )}
                              </>
                            );
                        }
                      })()}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {(f.description || "").split("\n").map((p, i) => (
                  <p key={i} style={{ marginTop: "1em", marginBottom: 0 }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StoryFormulaList;