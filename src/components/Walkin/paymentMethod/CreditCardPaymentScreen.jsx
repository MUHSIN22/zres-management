import React from "react";
import "./creditCardPaymentScreen.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import NumPad from "react-numpad";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";
import { useState } from "react";

const diffData = [
  {
    id: 1,
    name: "Master Card",
    image:
      "https://www.smartenergydecisions.com/upload/images/company_images/mastercard.png",
  },
  {
    id: 2,
    name: "Visa Card",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png",
  },
  {
    id: 3,
    name: "American Express",
    image:
      "https://i.dlpng.com/static/png/5425134-american-express-gets-its-first-new-logo-in-over-40-years-american-express-logo-png-596_447_preview.png",
  },

  {
    id: 4,
    name: "E Check",
    image:
      "https://casinoofthekings.com/wp-content/uploads/2020/05/echeck-logo.png",
  },
];

function CreditCardPaymentScreen() {
  const [cardNumber, setCardNumber] = useState();
  const [selectedCard, setSelectedCard] = useState("");

  return (
    <>
      <div className="CreditCardPaymentScreen">
        {diffData.map((card) => (
          <div
            className="card__contaimer"
            key={card.id}
            onClick={() => setSelectedCard(card.name)}
          >
            <img src={card.image} alt="" />
          </div>
        ))}

        {/* cardNumberEntryArea */}
        {selectedCard !== "" && (
          <div className="card__number__entry__area">
            <div className="main__area__section">
              <div className="cancel__icon">
                <CancelIcon
                  style={{ color: "#fff" }}
                  onClick={() => setSelectedCard("")}
                />
              </div>

              <div className="input__field__section">
                <h3>{selectedCard}</h3>

                <div className="inputarea__section">
                  <NumPad.Number
                    onChange={(value) => {
                      setCardNumber(value);
                    }}
                  >
                    <button>
                      <KeyboardAltIcon
                        style={{ fontSize: "40px", color: "#fff" }}
                      />
                    </button>
                  </NumPad.Number>
                  <input
                    type="number"
                    value={cardNumber}
                    placeholder="Last 4 Digit CC Number"
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxlength="4"
                  />

                  <div className="bottom__btn">
                    <button>
                      <h4>Pay</h4>
                    </button>
                  </div>
                </div>
              </div>

              <img
                src="https://media.istockphoto.com/vectors/mexico-world-map-vector-id1363585492?b=1&k=20&m=1363585492&s=170667a&w=0&h=LX73SbvrD6bAF0jfqIAbrU0kTo7K3sMFQ99q7v38Y5c="
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CreditCardPaymentScreen;
