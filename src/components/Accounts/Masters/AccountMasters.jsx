import React, { useEffect, useState } from "react";
import AccountHead from "./AccountHead/AccountHead";
import AccountGroup from "./AccountGroup/AccountGroup";
import "./accountMasters.scss";
import { Link, Outlet } from "react-router-dom";

const masterCategiry = [
  {
    id: 0,
    name: "Account Head",
    link: 'head'
  },
  {
    id: 1,
    name: "Account Group",
    link: 'group'
  },
];

function AccountMaster() {
  const [selCategory, setSelCategory] = useState(masterCategiry);
  const [activeSubCategory,setActiveSubCategory] = useState(0);


  const handleNavigation = (itemId) => {
    setActiveSubCategory(itemId)
  }

  useEffect(() => {
    setSelCategory(masterCategiry);
  }, []);

  // first section needed

  return (
    <div className="Account__master">
      <div className="top__category__section">
        {/*top category section  */}
        <div className="hedder__category">
          {
              selCategory.map((item) => (
                <Link
                  className={
                    "option__box " + (item.id === activeSubCategory ? "active-category": null)
                  }
                  to={`/mainPage/accounts/master/${item.link}`}
                  key={item.id}
                  onClick={() => {
                    handleNavigation(item.id)
                  }}
                >
                  <h5>{item.name}</h5>
                </Link>
              ))
          }
          <div className="line_passer"></div>
        </div>
      </div>

      {/* PRODUCT MASTER SECTION */}

      <div className="master__body__section">
          <Outlet/>
      </div>
    </div>
  );
}

export default AccountMaster;