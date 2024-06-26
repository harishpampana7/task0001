import React from "react";

const Body = () => {
  return (
    <>
      <div className="cart-items-maixbox">
        <div className="cart-items-box">
          <div className="cart-items-box-1-1">
            <img src="./images/Burger.png" />
          </div>

          <div className="cart-items-box-1-2">
            <h1 style={{ fontSize: "8px" }}>Caribbean Spicy Zinger Burger </h1>
            <br />
            <span style={{ fontSize: "5px" }}>350 Kcak</span>
            <div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <p style={{ fontSize: "8px" }}>$ 319</p>
                </div>
                <div
                  className="cart-btn"
                  style={{
                    display: "flex",
                    margin: "auto",
                    textAlign: "center",
                    gap: "10px",
                  }}>
                  <span>-</span> 1 <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-items-box">
          <div className="cart-items-box-1-1">
            <img src="./images/burger2.png" />
          </div>

          <div className="cart-items-box-1-2">
            <h1 style={{ fontSize: "8px" }}>Cajun veg Burger </h1>
            <br />
            <span style={{ fontSize: "2px" }}>250 Kcak</span>
            <div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <p style={{ fontSize: "8px" }}>$ 219</p>
                </div>
                <div
                  className="cart-btn"
                  style={{
                    display: "flex",
                    margin: "auto",
                    textAlign: "center",
                    gap: "10px",
                  }}>
                  <span>-</span> 1 <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginLeft: "100px" }}>
        <h1 style={{ fontSize: "14px" }}>Frequently Orderd</h1>
      </div>

      <div className="freq-main-box">
        <div className="freq-box">
          <img src="./images/Fanta.png" />
          <p>Fanta - 1 PET</p>
          <p> $ 89</p>
        </div>

        <div className="freq-box">
          <img src="./images/Fanta.png" />
          <p>Fanta - 1 PET</p>
          <p> $ 89</p>
        </div>

        <div className="freq-box">
          <img src="./images/Fanta.png" />
          <p>Fanta - 1 PET</p>
          <p> $ 89</p>
        </div>

        <div className="freq-box">
          <img src="./images/Fanta.png" />
          <p>Fanta - 1 PET</p>
          <p> $ 89</p>
        </div>

        <div className="freq-box">
          <img src="./images/Fanta.png" />
          <p>Fanta - 1 PET</p>
          <p> $ 89</p>
        </div>

        <div className="freq-box">
          <img src="./images/Fanta.png" />
          <p>Fanta - 1 PET</p>
          <p> $ 89</p>
        </div>

        <div className="freq-box">
          <img src="./images/Fanta.png" />
          <p>Fanta - 1 PET</p>
          <p> $ 89</p>
        </div>

        <div className="freq-box">
          <img src="./images/Fanta.png" />
          <p>Fanta - 1 PET</p>
          <p> $ 89</p>
        </div>

        <div className="freq-box">
          <img src="./images/Fanta.png" />
          <p>Fanta - 1 PET</p>
          <p> $ 89</p>
        </div>
      </div>

      <div className="delv-main-box">
        <div style={{ display: "flex" }}>
          <div>
            <img src="./images/maps.svg" />
          </div>
          <div>
            <p>Delivery to</p>
            <p>23rd Avenue, JP Nagar, Bangalore</p>
          </div>
        </div>

        <hr />

        <div style={{ display: "flex" }}>
          <div>
            <img src="./images/bill.svg" />
          </div>
          <div>
            <p>Total Bill</p>
            <p>Includig Taxes</p>
          </div>
        </div>


      </div>

      <div className="button-1">
        Proceed to Checkout
      </div>
    </>
  );
};

export default Body;
