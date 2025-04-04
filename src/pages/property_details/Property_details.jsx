import { Link } from "react-router-dom";
import "./property_details.css";

const Property_details = () => {
  return (
    <>
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center bg-dark text-white rounded overflow-hidden" style={{backgroundImage: 'url("../assets/img/mould-bg.png")', height: '150px'}}>
          {/* Background Overlay */}
          <div className="position-absolute w-100 h-100 bg-black bg-opacity-30" />
          {/* Content */}
          <div className="position-relative bg-light p-4 rounded shadow w-80 text-center bg-opacity-1">
            <h2 className="h5 fw-bold text-dark" id="property_address" />
            {/* Mould Risk Indicator */}
            <div className="mt-3 w-100 bg-light rounded-pill" style={{height: '3px'}}>
              <div className="bg-danger rounded-pill" style={{width: '100%', height: '3px'}} />
            </div>
            <p className="small text-dark" id="property_info" />
            {/* Buttons */}
            <div className="mt-3 d-flex justify-content-center gap-2">
              <Link className="btn btn-primary" to="/create_sap" role="button"><span>SAP</span></Link>
              <Link className="btn btn-warning text-white" to="/create_mould" role="button"><span>Mould RAG</span></Link>
              <Link className="btn btn-success" to="/create_upgrade" role="button"><span>Retrofit Upgrade</span></Link>
            </div>
          </div>
        </div>
        {/* <div class="card card-background">
          <div
            class="full-background"
            style="
              background-image: url('../assets/img/mould-bg.png');
            "
          ></div>
          <div class="card-body pt-5">
            <h4 class="text-white font-weight-normal">Property Information</h4>
            <div class="w-100 position-relative p-2">
              <div class="d-flex justify-content-between align-items-end">
                <div class="d-flex align-items-center"  id ="property_info">

                </div>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:;"
                    class="btn btn-outline-white mb-0 me-1 btn-sm"
                  >
                    SAP
                  </a>
                  <a
                    href="javascript:;"
                    class="btn btn-outline-white mb-0 btn-sm"
                  >
                    Mould RAG
                  </a>
                  <a
                    href="javascript:;"
                    class="btn btn-outline-white mb-0 btn-sm"
                  >
                    Retrofit Upgrade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0" id="sap_section">
                  <h6>SAP Details</h6>
                </div>
                <div style={{height: '1px', width: '100%'}} className="bg-gray-300" />
                <div className="card-body px-0 pt-0 pb-2">
                  <div id="sap" style={{display: 'none'}}>
                    <div className="border-bottom p-4">
                      <div className="row g-3">
                        <div className="col-md-3">
                          <h6 className="mb-2 text-sm">External Wall Type</h6>
                          <p className="text-xs text-secondary mb-0" id="external_wall_type">Cavity Walls</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">U-value of Wall [W/m²K]</h6>
                          <p className="text-xs text-secondary mb-0" id="wall_u_value">1.07</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">Wall Insulation</h6>
                          <p className="text-xs text-secondary mb-0" id="wall_insulation">A As Built</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">Wall Thickness (mm)</h6>
                          <p className="text-xs text-secondary mb-0" id="wall_thickness">4.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom p-4">
                      <div className="row g-3">
                        <div className="col-md-3">
                          <h6 className="mb-2 text-sm">Roof Type</h6>
                          <p className="text-xs text-secondary mb-0" id="roof_type">
                            PA Pitched (slates/tiles)
                          </p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">U-value of Roof [W/m²K]</h6>
                          <p className="text-xs text-secondary mb-0" id="roof_u_value">2.30</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">
                            Roof Insulation Thickness (mm)
                          </h6>
                          <p className="text-xs text-secondary mb-0" id="roof_insulation_thickness">0.00</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">Flue Type</h6>
                          <p className="text-xs text-secondary mb-0" id="flue_type">Balanced</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom p-4">
                      <div className="row g-3">
                        <div className="col-md-3">
                          <h6 className="mb-2 text-sm">Glazing Type</h6>
                          <p className="text-xs text-secondary mb-0" id="glazing_type">Double</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">Glazing U-value [W/m²K]</h6>
                          <p className="text-xs text-secondary mb-0" id="glazing_u_value">4.80</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">Glazing G-value</h6>
                          <p className="text-xs text-secondary mb-0" id="glazing_g_value">0.85</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">Heating System</h6>
                          <p className="text-xs text-secondary mb-0" id="heating_system">Boiler</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom p-4">
                      <div className="row g-3">
                        <div className="col-md-3">
                          <h6 className="mb-2 text-sm">Fuel Type</h6>
                          <p className="text-xs text-secondary mb-0" id="fuel_type">Main gas</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">Efficiency of System W (%)</h6>
                          <p className="text-xs text-secondary mb-0" id="system_efficiency_s">89.70</p>
                        </div>
                        <div className="col-md-3 border-start ps-4">
                          <h6 className="mb-2 text-sm">Efficiency of System S (%)</h6>
                          <p className="text-xs text-secondary mb-0" id="system_efficiency_w">79</p>
                        </div>
                      </div>  
                    </div>
                    <div className="border-bottom p-4">
                      <div className="row g-3">
                        <div className="col-md-3 border-start ps-4 bg-gradient-secondary text-center">
                          <h6 className="mb-2 text-sm text-white">EPC(SAP)</h6>
                          <h4 className="text-white mb-0" id="epc" />
                        </div>
                        <div className="col-md-3 border-start ps-4 bg-gradient-primary text-center">
                          <h6 className="mb-2 text-sm text-white">Heat Loss (KJ/K)</h6>
                          <h4 className="mb-0 text-white" id="heat_loss" />
                        </div>
                        <div className="col-md-3 border-start ps-4 bg-gradient-dark text-center">
                          <h6 className="mb-2 text-sm text-white">CO2 emissions (kg/CO2/year):</h6>
                          <h4 className="mb-0 text-white" id="co2_emission" />
                        </div>
                        <div className="col-md-3 border-start ps-4 bg-gradient-secondary text-center">
                          <h6 className="mb-2 text-sm text-white">SHR (kWh/m2/yr)</h6>
                          <h4 className=" mb-0 text-white" id="shr">0</h4>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  {/* <Link to="/create_sap?property_id=1" id="sap_link" type="button" classname="btn bg-gradient-success data-toggle="tooltip" data-original-title="Property Details" />
                  Create New SAP Assessment  
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3" id="mould_section">
                    <h6 className="text-white text-capitalize ps-3">Mould Risk</h6>
                  </div>
                </div>
                <div style={{height: '1px', width: '100%'}} className="bg-gray-300" />
                <div className="card-body px-0 pt-0 pb-2">
                  <div id="mould" style={{display: 'none'}}>
                    <div className="border-bottom p-4">
                      <div className="row g-3">
                        <div className="col-md-3">
                          <h6 className="mb-2 text-sm">Mould condition</h6>
                          <p className="text-xs text-secondary mb-0">Likelywood of Mould occurence</p>
                        </div>
                      </div>
                      {/* <div class="progress-wrapper w-75 mx-auto">
                            <div class="progress-info">
                              <div class="progress-percentage">
                                <span class="text-xs font-weight-bold">60%</span>
                              </div>
                            </div>
                            <div class="progress">
                              <div class="progress-bar bg-gradient-warning w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div> */}
                      <div className="outer">
                        <canvas id="chartJSContainer" width={600} height={400} />
                        <canvas id="secondContainer" width={600} height={400} />
                        <p className="percent" id="mould_rag"><input type="hidden" defaultValue={0} id="mould_value" />
                        </p>
                      </div>
                      <div className="border-bottom p-4">
                        <div className="row g-3">
                          <div className="col-md-4 border-start ps-4 bg-gradient-secondary text-center">
                            <h6 className="mb-2 text-sm text-white">EPC(SAP)</h6>
                            <h4 className="text-white mb-0" id="m_epc" />
                          </div>
                          <div className="col-md-4 border-start ps-4 bg-gradient-primary text-center">
                            <h6 className="mb-2 text-sm text-white">Heat Loss (KJ/K)</h6>
                            <h4 className="mb-0 text-white" id="m_heat_loss" />
                          </div>
                          <div className="col-md-4 border-start ps-4 bg-gradient-dark text-center">
                            <h6 className="mb-2 text-sm text-white">SHR (kWh/m2/yr)</h6>
                            <h4 className=" mb-0 text-white" id="m_shr">0</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="pt-4 ps-4">
                  <Link to="/create_mould?property_id=1" id="mould_link" type="button" className="btn bg-gradient-success data-toggle=" tooltip" data-original-title="Property Details">
                    Create New Mould Risk
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3" id="retrofit_section">
                  <h6 className="text-white text-capitalize ps-3">Retrofit Upgrade Options</h6>
                </div>
              </div>
              <div style={{height: '1px', width: '100%'}} className="bg-gray-300" />
              <div className="card-body px-0 pt-0 pb-2">
                <div id="retrofit" style={{display: 'none'}}>
                  <div className="border-bottom p-4">
                    <div className="row g-3">
                      <div className="col-md-4">
                        <h5 className="card-title">Fabric First Approach</h5>
                        <span className="badge bg-primary my-1" id="roof_pitch" style={{display: 'none'}}>✔ Roof (Pitched)</span>
                        <span className="badge bg-primary my-1" id="roof_flat" style={{display: 'none'}}>✔ Roof (Flat)</span>
                        <span className="badge bg-primary my-1" id="cavity_wall_insulation" style={{display: 'none'}}>✔ Cavity Wall Insulation</span>
                        <span className="badge bg-primary my-1" id="external_wall_insulation" style={{display: 'none'}}>✔ External Wall Insulation</span>
                      </div>
                      <div className="col-md-4 border-start ps-4">
                        <h5 className="card-title">Further Fabrics</h5>
                        <span className="badge bg-dark my-1" id="double_glazing" style={{display: 'none'}}>✔ Double Glazing</span>
                        <span className="badge bg-dark my-1" id="air_tightness" style={{display: 'none'}}>✔ Air Tightness Measures</span>
                      </div>
                      <div className="col-md-4 border-start ps-4">
                        <h5 className="card-title">Renewable Technology</h5>
                        <span className="badge bg-success my-1" id="solar_pv" style={{display: 'none'}}>✔ Photovoltaic (PV)</span>
                      </div>
                    </div>  
                  </div>
                  <div className="border-bottom p-4">
                    <div className="row g-3">
                      <div className="col-md-3 border-start ps-4 bg-gradient-secondary text-center">
                        <h6 className="mb-2 text-sm text-white">EPC(SAP)</h6>
                        <h4 className="text-white mb-0" id="r_epc">00</h4>
                      </div>
                      <div className="col-md-3 border-start ps-4 bg-gradient-primary text-center">
                        <h6 className="mb-2 text-sm text-white">Heat Loss (KJ/K)</h6>
                        <h4 className="mb-0 text-white" id="r_heat_loss" />
                      </div>
                      <div className="col-md-3 border-start ps-4 bg-gradient-dark text-center">
                        <h6 className="mb-2 text-sm text-white">CO2 emissions (kg/CO2/year):</h6>
                        <h4 className="mb-0 text-white" id="r_co2_emission" />
                      </div>
                      <div className="col-md-3 border-start ps-4 bg-gradient-secondary text-center">
                        <h6 className="mb-2 text-sm text-white">SHR (kWh/m2/yr)</h6>
                        <h4 className=" mb-0 text-white" id="r_shr">0</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="pt-4 ps-4">
                  <Link to="/create_upgrade?property_id=1" id="upgrade_link" type="button" className="btn bg-gradient-success data-toggle=" tooltip" data-original-title="Property Details">
                    Create New Retrofit Upgrade
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Property_details;




