import "./Home.scss";
import HomeCard from "./HomeCard";

export default function Home() {
  return (
    <div>
      <div className="d1">
        <div className="d1-content">
          <div className="logo">
            <img src="icon.svg" alt="Logo" height="300" />
          </div>
          <div className="title">
            <h1>TITANUM GYM</h1>
          </div>
          <div className="desc">
            <p>Unleash Your Strength. Conquer the Titan</p>
          </div>
        </div>
      </div>
      <div className="d2">
        <HomeCard
          idx={1}
          source="src/Images/Card2.jpg"
          title="Personal training"
          desc="Personal training is a tailored fitness experience that provides individualized guidance, motivation, and support to help individuals achieve their health and fitness goals. With a certified personal trainer by your side, you can embark on a journey of transformation and reach new heights in your fitness journey."
        />
        <HomeCard
          idx={1}
          source="src/Images/Card1.jpg"
          title="Weight Training"
          desc="Weight training is a dynamic and transformative fitness practice that focuses on building strength, enhancing muscle tone, and improving overall physical performance. Through the use of resistance exercises using free weights, machines, or bodyweight, weight training challenges and stimulates muscles, leading to increased muscle mass, improved bone density, and enhanced metabolism."
        />
        <HomeCard
          idx={1}
          source="src/Images/Card3.jpg"
          title="Nutrition Planning"
          desc="Nutrition planning is the strategic process of creating a well-balanced and individualized eating plan to support optimal health, fitness, and overall well-being. It involves understanding and meeting your unique nutritional needs while considering your goals, lifestyle, preferences, and any specific dietary requirements."
        />
      </div>
      <div className="d3">
        sec 3
      </div>
    </div>
  );
}
