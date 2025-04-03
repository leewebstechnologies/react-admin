import "./new_property.css";

const New_property = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">
                    Enter Property Information
                  </h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <form id="proprty-form">
                  <div className="row g-3 px-3 pb-2">
                    <div className="col-md-12">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue
                        id="address"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Portfolio</label>
                      <select
                        className="form-select"
                        id="portfolio-list"
                      ></select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">House Type</label>
                      <select className="form-select" id="house_type">
                        <option selected>Top Floor</option>
                        <option>Mid Floor Flat</option>
                        <option>Ground Floor Flat</option>
                        <option>End-Terrace House</option>
                        <option>Mid-Terrace House</option>
                        <option>Semi-Detached House</option>
                        <option>Top Floor Maisonette</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Age Band</label>
                      <select className="form-select" id="age_band">
                        <option>N/A</option>
                        <option>A(pre 1900)</option>
                        <option>B(1900-1929)</option>
                        <option>C(1930-1949)</option>
                        <option>D(1950-1966)</option>
                        <option>E(1967-1975)</option>
                        <option>F(1976-1982)</option>
                        <option>G(1983-1990)</option>
                        <option>H(1991-1995)</option>
                        <option>I(1996-2002)</option>
                        <option>J(2003-2006)</option>
                        <option>K(2007-date)</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Area (m2)</label>
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={0}
                        id="area"
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
export default New_property;
