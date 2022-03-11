import React from "react";
import "./settingManagerr.scss";
function SettingManager() {
  return (
    <div className="settingsManager__wrapper">
      <div className="setting__manager__headder">
        <h2>Settings Manager</h2>
      </div>

      <div className="settings__manager__sections__container">
        <div className="settings__manager__left__section">
          <select name="" id="">
            <option value="">All</option>
            <option value="">Accounts</option>
            <option value="">Inventory</option>
            <option value="">Walk In</option>
            <option value="">Dine In</option>
            <option value="">CRM</option>
            <option value="">Delivery Manager</option>
          </select>

          <div className="settingmnager__left__bottom__section__wrapper">
            <div className="headding__section settingmanager__headding__section">
              <h4>SINO</h4>
              <h4>Setting Name</h4>
            </div>

            <div className="seettings__section__area">
              <div className="diff__setting__sections">
                <div className="headder__setting__name">
                  <h4>Accounts</h4>
                  <div className="linebar"></div>
                </div>
                <div className="heddersetting__chidren">
                  <h5>1: show currency in walkin form</h5>
                  <h5>2: View All Checks</h5>
                  <h5>3: Edit Check Before Payment</h5>
                </div>
              </div>

              <div className="diff__setting__sections">
                <div className="headder__setting__name">
                  <h4>Accounts</h4>
                  <div className="linebar"></div>
                </div>
                <div className="heddersetting__chidren">
                  <h5>1: show currency in walkin form</h5>
                  <h5>2: View All Checks</h5>
                  <h5>3: Edit Check Before Payment</h5>
                </div>
              </div>
            </div>
            <input type="text" placeholder="Search here" />
          </div>
        </div>
        <div className="settings__manager__right__sections">
          <form action="">
            <div className="setting__manager__input__section">
              <h4>Module</h4>
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div className="setting__manager__input__section">
              <h4>Setting Type</h4>
              <div className="table__sectionsss">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" name="" id="" />
                      </th>
                      <th>Selected Type</th>
                      <th>Is Mandatory</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>Role</td>
                      <td>
                        {" "}
                        <input type="checkbox" name="" id="" />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>User</td>
                      <td>
                        {" "}
                        <input type="checkbox" name="" id="" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="setting__manager__input__section">
              <h4>Setting Name</h4>
              <input type="text" />
            </div>

            <div className="setting__manager__input__section">
              <h4>Setting key</h4>
              <button>Key</button>
              <input type="text" />
            </div>

            <div className="setting__manager__input__section">
              <h4>Description</h4>
              <textarea name="" id="" cols="30" rows="6"></textarea>
            </div>
            <div className="setting__manager__input__section">
              <div className="in__sections">
                <h4>Value Type :</h4>
                <select name="" id="">
                  <option value="">Boolean</option>
                  <option value=""></option>
                </select>
              </div>
              <div className="in__sections">
                <h4>Default :</h4>
                <select name="" id="">
                  <option value="">Default</option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="setting__manager__input__section">
              <h4>Value Eg :</h4>
              <input type="text" />
            </div>

            <div className="button__section__setting__manager">
              <button>Save</button>
              <button>Delete</button>
              <button>Clear</button>
              <button>Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SettingManager;
