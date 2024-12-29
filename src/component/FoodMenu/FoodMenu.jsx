import React from "react";
import "./FoodMenu.css";
import jollofwithchicken from "../../assest/jollofwithchicken.jpg";
import jollofwithfish from "../../assest/jollofwithfish.jpg";
import jollofwithmeat from "../../assest/jollofwithmeat.jpg";
import coconutricewithchicken from "../../assest/coconutricewithchciken.jpg";
import coconutricewithfish from "../../assest/coconutricewithfish.jpg";
import coconutricewithmeat from "../../assest/coconutricewithbeef.jpg";
import amalawithabula from "../../assest/amalaandabula.png";
import africanchef from "../../assest/africancheff.png";
import africanchef22 from "../../assest/africanchef22.png";
import mixedveggies from "../../assest/mixedveggies.jpg";
import iyanandefor from "../../assest/iyanandefor.png";
import iyanandegusi from "../../assest/iyanandegusi.jpg";
import stewbowl from "../../assest/stewbowl.jpg";
import menulist from "../../assest/OrekePriceList.jpg";
import chickenlap from "../../assest/chickenlap.jpg";
import turkeylap from "../../assest/turkeymeat.jpg";
import { Link } from "react-router-dom";

const FoodMenu = () => {
  return (
    <div className="FoodMenuBody">
      <section>
        <div>
          <h1>Our Menu</h1>
        </div>
        <div className="differentFoodMenu">
          <section className="jollofRice">
            <div>
              <Link to="/jollof-rice">
                <img src={jollofwithchicken} alt="jollof with chicken" />
                <h4>Jollof Rice with Chicken : #2,500</h4>
              </Link>
            </div>
            <div>
              <Link to="/jollof-rice">
                <img src={jollofwithfish} alt="jollof with fish" />
                <h4>Jollof Rice with fish: #2,000</h4>
              </Link>
            </div>
            <div>
              <Link to="/jollof-rice">
                <img src={jollofwithmeat} alt="jollof with beef" />
                <h4>Jollof Rice with beef cut: #2,000</h4>
              </Link>
            </div>
          </section>
          <section className="jollofRice">
            <div>
              <Link to="/coconut-rice">
                <img
                  src={coconutricewithchicken}
                  alt="coconut rice with chicken"
                />
                <h4>Coconut rice with Chicken: #2,500</h4>
              </Link>
            </div>
            <div>
              <Link to="/coconut-rice">
                <img src={coconutricewithfish} alt="coconut rice with fish" />
                <h4>Coconut rice with fish: #2,000</h4>
              </Link>
            </div>
            <div>
              <Link to="/coconut-rice">
                <img src={coconutricewithmeat} alt="coconut rice with beef" />
                <h4>Coconut rice with beef cut: #2,000</h4>
              </Link>
            </div>
          </section>
          <section className="jollofRice">
            <div>
              <Link to="/amala">
                <img src={amalawithabula} alt="Amala and Abula" />
                <h4>Amala & Abula Only: #1,000</h4>
              </Link>
            </div>
            <div className="AmalaOrishirishi">
              <h3>Ogunfe - #1,500</h3>
              <h3>Assorted Meat - #200</h3>
              <h3>Fish - #600</h3>
              <h3>Ponmo - #200</h3>
            </div>
            <div>
              <img src={africanchef} alt="Oreke Kitchen" />
              <h4>Let's know which you want!</h4>
            </div>
          </section>
          <section className="jollofRice">
            <div>
              <Link to="/mixed-veggies">
                <img src={mixedveggies} alt="mixed veggies" />
                <h4> Mixed Veggies rice</h4>
              </Link>
            </div>
            <div>
              <img src={africanchef22} alt="Oreke Chef" />
              <h4>Let's know which you want!</h4>
            </div>
            <div className="AmalaOrishirishi">
              <h3>Mixed Veggies rice With chicken - #2,500</h3>
              <h3>Mixed Veggies rice With beef - #2,000</h3>
              <h3> Mixed Veggies rice With fish - #2,000</h3>
            </div>
          </section>
          <section className="jollofRice">
            <div>
              <Link to="/iyan">
                <img src={iyanandefor} alt="Iyan and Efor" />
                <h4> Iyan & Efor- 3,000</h4>
              </Link>
            </div>
            <div>
              <img src={iyanandegusi} alt="Iyan and Egusi" />
              <h4>Iyan & Egusi - #3,000</h4>
            </div>
            <div className="AmalaOrishirishi">
              <Link to="/stew-soup">
                <img src={stewbowl} alt="amala" />
                <h4>A bowl of Stew</h4>
              </Link>
            </div>
          </section>
          <section className="jollofRice">
            <div>
              <Link to="/chicken-turkey">
                <img src={chickenlap} alt="chicken lap" />
                <h4>Chicken Lap - #2,000</h4>
              </Link>
            </div>

            <div className="AmalaOrishirishi">
              {" "}
              <Link to="/chicken-turkey">
                <img src={turkeylap} alt="turkey" />
                <h4>Turkey - #3,000</h4>
              </Link>
            </div>
            <div>
              <img id="menulist" src={menulist} alt="menu list" />
              <h4> Our List- Order now!</h4>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default FoodMenu;
