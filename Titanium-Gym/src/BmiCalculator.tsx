import { useState } from "react";
import "./BmiCalculator.scss";
export default function BmiCalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);
  return (
    <div className="main">
      <div className="center">
        <h1>BMI Calculator</h1>
        <p>
          Remember that BMI is a general screening tool and doesn't take into
          account individual factors such as muscle mass and body composition.
          For a more personalized assessment, it's always advisable to consult
          our healthcare professional.
        </p>
        <form>
          <div className="weight">
            <label htmlFor="weight">
              Weight<span>(kg)</span>
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => {
                setWeight(Number(e.target.value));
              }}
            />
          </div>
          <div className="height">
            <label htmlFor="height">
              Height<span>(cm)</span>
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => {
                setHeight(Number(e.target.value));
              }}
            />
          </div>
        </form>
        <div className="value">
          {Math.round(weight / ((height * height) / 1000000)) / 100}
        </div>
      </div>
    </div>
  );
}
