import { useEffect, useState } from "react";
import "./BmiCalculator.scss";
export default function BmiCalculator() {
  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  let bmi;
  if (weight && height) {
    bmi = Math.round(weight / ((height * height) / 1000000)) / 100;
  }
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
            <input
              id="weight"
              placeholder="Weight"
              type="text"
              value={weight}
              onChange={(e) => {
                setWeight(Number(e.target.value));
              }}
            />
            <label htmlFor="weight" id="weight2">
              Weight<span>(kg)</span>
            </label>
          </div>
          <div className="height">
            <input
              id="height"
              placeholder="Height"
              type="text"
              value={height}
              onChange={(e) => {
                setHeight(Number(e.target.value));
              }}
            />
            <label htmlFor="height" id="height2">
              Height<span>(cm)</span>
            </label>
          </div>
        </form>
        {bmi ? (
          <>
            <div className="value">{bmi}</div>
            <div className="result">
              {bmi < 18.5 ? (
                <p>
                  Your BMI indicates that you are underweight. It's important to
                  focus on gaining weight in a healthy way by increasing your
                  calorie intake and engaging in strength-building exercises.
                  Consult a healthcare professional for guidance on achieving a
                  healthy weight
                </p>
              ) : bmi < 24.9 ? (
                <p>
                  Congratulations! Your BMI falls within the normal weight
                  range. This suggests that you have a healthy weight for your
                  height. To maintain your weight, continue to follow a balanced
                  diet and engage in regular physical activity.
                </p>
              ) : bmi < 29.9 ? (
                <p>
                  Your BMI indicates that you are overweight. It's recommended
                  to focus on adopting a healthier lifestyle by incorporating
                  regular exercise and making dietary changes. Consult a
                  healthcare professional or a registered dietitian for
                  personalized advice on weight management.
                </p>
              ) : bmi < 34.5 ? (
                <p>
                  Your BMI suggests that you are in the category of Class I
                  obesity. It's important to take steps to reduce your weight in
                  order to improve your overall health. Implementing a
                  combination of a balanced diet, regular exercise, and
                  potentially seeking professional guidance can assist you in
                  achieving a healthier weight.
                </p>
              ) : bmi < 39.9 ? (
                <p>
                  Your BMI falls within the range of Class II obesity,
                  indicating a higher level of obesity. It's crucial to
                  prioritize weight loss for the betterment of your health.
                  Consult a healthcare professional for guidance and consider a
                  comprehensive approach that includes dietary changes,
                  increased physical activity, and possibly other interventions.
                </p>
              ) : bmi > 40 ? (
                <p>
                  Your BMI indicates that you are in the category of Class III
                  obesity, also known as severe or morbid obesity. This suggests
                  a significantly increased risk to your health. It is highly
                  recommended to seek medical guidance to develop a
                  comprehensive plan for weight loss, which may involve dietary
                  modifications, increased physical activity, and possibly
                  medical interventions.
                </p>
              ) : (
                <p className="empty"></p>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
