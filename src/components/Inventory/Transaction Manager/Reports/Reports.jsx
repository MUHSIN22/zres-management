import React, { useState } from "react";
import "./Reports.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StockReport from "./StockReport/StockReport";
import ReportSingleProduct from "./StockReport/report Single Product/ReportSingleProduct";
import StockCost from "./Stock Cost/StockCost";
import ClossingStockPrint from "./Stock Cost/clossing stock print/ClossingStockPrint";
import ClossingStockReport from "./clossing Srock Report/ClossingStockReport";
import Printer from "../../printer/Printer";
function Reports() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="Reports">
      {selectedOption === "Stock Report" && <StockReport />}
      {selectedOption === "Stock Cost" && <StockCost />}
      {selectedOption === "Clossing Stock Report" && <ClossingStockReport />}

      {!selectedOption && (
        <div className="ovelayer__Section">
          <div class="content__wrapper__section">
            <div
              className="sections"
              onClick={() => setSelectedOption("Stock Report")}
            >
              <h4>Stock Report</h4>
              <ArrowRightIcon />
            </div>
            <div
              className="sections"
              onClick={() => setSelectedOption("Stock Cost")}
            >
              <h4>Stock Cost</h4>
              <ArrowRightIcon />
            </div>
            <div
              className="sections"
              onClick={() => setSelectedOption("Clossing Stock Report")}
            >
              <h4>Clossing Stock Report</h4>
              <ArrowRightIcon />
            </div>
            <div
              className="sections"
              onClick={() => setSelectedOption("mmmm Report")}
            >
              <h4>mmmm Report</h4>
              <ArrowRightIcon />
            </div>
            <div className="arrow__top"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reports;
