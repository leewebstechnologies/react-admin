import "./property.css";
import { Link } from "react-router-dom";

const Property = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3">
                    Property List
                  </h6>
                </div>
              </div>
              {/* <div className="card-header pb-0">
                <h6>Property List</h6>
              </div> */}
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Ref
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Portfolio
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Age Band
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Area
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Date
                        </th>
                        <th className="text-secondary opacity-7" />
                      </tr>
                    </thead>
                    <tbody id="property-list">
                      {/* <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src="/assets/img/small-logos/logo-jira.svg" class="avatar avatar-sm rounded-circle me-2" alt="Id">
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">123</h6>
                            <p class="text-xs text-secondary mb-0">20 Hamburg Street WX345 London</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        
                        <span class="badge badge-sm bg-gradient-success">A</span>
                        <p class="text-xs text-secondary mb-0">1990-1996</p>
                      </td>
                      <td class="align-middle text-center text-sm">
                        
                        <p class="text-xs text-secondary mb-0">67</p>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">23/04/24</span>
                      </td>
                      <td class="align-middle">
                        
                        <a href="property_details.html" type="button" class="btn bg-gradient-primary" data-toggle="tooltip" data-original-title="Property Details">
                          
                          Details
                        </a>
                        <a href="javascript:;" type="button" class="btn bg-gradient-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit Property">
                          Edit
                        </a>
                      </td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-plugin">
        <Link className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="fa fa-cog py-2"> </i>
        </Link>
        <div className="card shadow-lg ">
          <div className="card-header pb-0 pt-3 ">
            <div className="float-start">
              <h5 className="mt-3 mb-0"> UI Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-end mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="fa fa-close" />
              </button>
            </div>
            {/* End Toggle Button */}
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0">
            {/* Sidebar Backgrounds */}
            <div>
              <h6 className="mb-0">Sidebar Colors</h6>
            </div>
            <Link
              to="/javascript:void(0)"
              className="switch-trigger background-color"
            >
              <div className="badge-colors my-2 text-start">
                <span
                  className="badge filter bg-primary active"
                  data-color="primary"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-dark"
                  data-color="dark"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-info"
                  data-color="info"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-success"
                  data-color="success"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-warning"
                  data-color="warning"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-danger"
                  data-color="danger"
                  onclick="sidebarColor(this)"
                />
              </div>
            </Link>
            {/* Sidenav Type */}
            <div className="mt-3">
              <h6 className="mb-0">Sidenav Type</h6>
              <p className="text-sm">
                Choose between 2 different sidenav types.
              </p>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-primary w-100 px-3 mb-2 active"
                data-class="bg-transparent"
                onclick="sidebarType(this)"
              >
                Transparent
              </button>
              <button
                className="btn btn-primary w-100 px-3 mb-2 ms-2"
                data-class="bg-white"
                onclick="sidebarType(this)"
              >
                White
              </button>
            </div>
            <p className="text-sm d-xl-none d-block mt-2">
              You can change the sidenav type just on desktop view.
            </p>
            {/* Navbar Fixed */}
            <div className="mt-3">
              <h6 className="mb-0">Navbar Fixed</h6>
            </div>
            <div className="form-check form-switch ps-0">
              <input
                className="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="navbarFixed"
                onclick="navbarFixed(this)"
              />
            </div>
            <hr className="horizontal dark my-sm-4" />
            <Link className="btn btn-outline-dark w-100" to="/">
              View documentation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Property;
