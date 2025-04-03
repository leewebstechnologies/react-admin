import { Link } from "react-router-dom";

const Create_mould = () => {
  return (
    <>
        <div
          className="container position-relative d-flex align-items-center justify-content-center bg-dark text-white rounded overflow-hidden"
          style={{
            backgroundImage: 'url("../assets/img/mould-bg.png")',
            height: "150px",
          }}
        >
          {/* Background Overlay */}
          <div className="position-absolute w-100 h-100 bg-black bg-opacity-30" />
          {/* Content */}
          <div className="position-relative bg-light p-4 rounded shadow w-80 text-center bg-opacity-1">
            <h2 className="h5 fw-bold text-dark" id="property_address">
              Shadwell Road, Leeds
            </h2>
            {/* Mould Risk Indicator */}
            <div
              className="mt-3 w-100 bg-light rounded-pill"
              style={{ height: "3px" }}
            >
              <div
                className="bg-danger rounded-pill"
                style={{ width: "100%", height: "3px" }}
              />
            </div>
            <p className="small text-dark" id="property_info" />
            {/* Buttons */}
            <div className="mt-3 d-flex justify-content-center gap-2">
              <button className="btn btn-primary" href="#">
                <span>SAP</span>
              </button>
              <button className="btn btn-warning text-white">
                <span>Mould RAG</span>
              </button>
              <button className="btn btn-success">
                <span>Retrofit Upgrade</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">
                      Create SAP Assessment
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <form id="sap_form">
                    <div className="row g-3 px-3 pb-2">
                      <input type="hidden" defaultValue id="ref" />
                      <input type="hidden" defaultValue id="age_band" />
                      <input type="hidden" defaultValue id="house_type" />
                      <input type="hidden" defaultValue id="floor_area" />
                      <div className="col-md-3">
                        <label className="form-label">External Wall Type</label>
                        <select className="form-select" id="external_wall_type">
                          <option selected>CA Cavity</option>
                          <option>solid brick</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          U-value of Wall [W/m²K]
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          defaultValue="1.70"
                          id="wall_u_value"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Wall Insulation</label>
                        <select className="form-select" id="wall_insulation">
                          <option selected>A As Built</option>
                          <option>F Filled Cavity</option>
                          <option>SY System build</option>
                          <option>J Joists</option>
                          <option>None</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Wall Thickness (mm)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          defaultValue={0.0}
                          id="wall_thickness"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Roof Type</label>
                        <select className="form-select" id="roof_type">
                          <option selected>PA Pitched (slates/tiles)</option>
                          <option>A Another dwelling above</option>
                          <option>F Flat</option>
                          <option>PN Pitched (slates/tiles)</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          U-value of Roof [W/m²K]
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          defaultValue="2.30"
                          id="roof_u_value"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Roof Insulation Thickness (mm)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          defaultValue={0.0}
                          id="roof_insulation_thickness"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Flue Type</label>
                        <select className="form-select" id="flue_type">
                          <option selected>Balanced</option>
                          <option>None</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Glazing Type</label>
                        <select className="form-select" id="glazing_type">
                          <option selected>Double</option>
                          <option>Single</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Glazing U-value [W/m²K]
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          defaultValue="4.80"
                          id="glazing_u_value"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Glazing G-value</label>
                        <input
                          type="number"
                          className="form-control"
                          defaultValue="0.85"
                          id="glazing_g_value"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Heating System</label>
                        <select className="form-select" id="heating_system">
                          <option selected>Boiler</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Fuel Type</label>
                        <select className="form-select" id="fuel_type">
                          <option selected>Main gas</option>
                          <option>None</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Efficiency of System W (%)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          defaultValue="89.70"
                          id="system_efficiency_w"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">
                          Efficiency of System S (%)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          defaultValue={79}
                          id="system_efficiency_s"
                        />
                      </div>
                    </div>
                    <div className="pt-4 ps-4">
                      <button type="submit" className="btn bg-gradient-primary">
                        Submit
                      </button>
                      {/*<a href="property_details.html" type="button" class="btn bg-gradient-primary" data-toggle="tooltip" data-original-title="Property Details">
                            
                          Submit
                        </a>*/}
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
export default Create_mould;

