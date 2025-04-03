import "./create_upgrade.css";

const Create_upgrade = () => {
  return (
    <>
      <div className="container">
        <div
          className="position-relative d-flex align-items-center justify-content-center bg-dark text-white rounded overflow-hidden"
          style={{
            backgroundImage: 'url("../assets/img/mould-bg.png")',
            height: "150px",
          }}
        >
          {/* Background Overlay */}
          <div className="position-absolute w-100 h-100 bg-black bg-opacity-30" />
          {/* Content */}
          <div className="position-relative bg-light p-4 rounded shadow w-80 text-center bg-opacity-1">
            <h2 className="h5 fw-bold text-dark" id="property_address" />
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
              <a className="btn btn-primary" href="#sap_section" role="button">
                <span>SAP</span>
              </a>
              <a
                className="btn btn-warning text-white"
                href="#mould_section"
                role="button"
              >
                <span>Mould RAG</span>
              </a>
              <a
                className="btn btn-success"
                href="#retrofit_section"
                role="button"
              >
                <span>Retrofit Upgrade</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">
                      Create Retrofit Assessment
                    </h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <form id="upgrade_form">
                    <div className="row g-3 px-3 pb-2">
                      <input type="hidden" defaultValue id="ref" />
                      <input type="hidden" defaultValue id="age_band" />
                      <input type="hidden" defaultValue id="house_type" />
                      <input type="hidden" defaultValue id="floor_area" />
                      <div className="col-md-3">
                        <label className="form-label">SAP Score</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={59}
                          id="isap_score"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Heat Loss (KJ/K)</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={0}
                          id="iheat_loss"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">SHR (kWh/m2/yr)</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={170}
                          id="ishr"
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">CO2 (kWh/m2/yr)</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={170}
                          id="co2"
                        />
                      </div>
                      <div
                        style={{ height: "1px", width: "100%" }}
                        className="bg-gray-300"
                      />
                    </div>
                    <div className="p-3 pb-2">
                      <div className="row g-3">
                        <div className="col-md-4">
                          <p className="text-dark text-sm">
                            <strong>Fabric First Approach</strong>
                          </p>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                              id="roof_pitch"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Roof_Pitched"
                            >
                              Roof(Pitched)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                              id="roof_flat"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Roof_Flat"
                            >
                              Roof(Flat)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                              id="external_wall_insulation"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="ExternalWallInsulation"
                            >
                              External Wall Insulation
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                              id="cavity_wall_insulation"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="CavityWallInsulation"
                            >
                              Cavity Wall Insulation
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 border-start ps-3">
                          <p className="text-dark text-sm">
                            <strong>Further Fabrics</strong>
                          </p>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                              id="double_glazing"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="DoubleGlazing"
                            >
                              Double Glazing
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                              id="air_tightness"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="AirTightnessMeasures"
                            >
                              Air Tightness Measures
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 border-start ps-3">
                          <div className="mb-4">
                            <p className="text-dark text-sm">
                              <strong>Renewable Technology</strong>
                            </p>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                                id="solar_pv"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="solar_pv"
                              >
                                Photovoltaic(PV)
                              </label>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{ height: "1px", width: "100%" }}
                          className="bg-gray-300"
                        />
                      </div>
                      <div className="pt-4 ps-4">
                        <button
                          type="submit"
                          className="btn bg-gradient-primary"
                        >
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
      </div>
    </>
  );
};
export default Create_upgrade;
