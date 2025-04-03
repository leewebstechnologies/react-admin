import "./new_portfolio.css";

const New_portfolio = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">
                    Enter Portfolio Information
                  </h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <form id="portfolio-form">
                  <div className="row g-3 px-3 pb-2">
                    <div className="col-md-4">
                      <label className="form-label">Portfolio Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue
                        id="project_name"
                      />
                    </div>
                    <div className="col-md-8">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue
                        id="location"
                      />
                    </div>
                    <div
                      style={{ height: "1px", width: "100%" }}
                      className="bg-gray-300"
                    />
                    <div className="ps-3">
                      <button type="submit" className="btn bg-gradient-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default New_portfolio;
