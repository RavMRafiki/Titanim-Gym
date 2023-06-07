import "./Home.scss";
import HomeAdvantage from "./HomeAdvantage";
import HomeCard from "./HomeCard";
import HomeStat from "./HomeStat";

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
        <div className="title">
          <h2>OUR ADVANTAGES</h2>
        </div>
        <div className="advantages">
          <HomeAdvantage
            icon="fa fa-gavel"
            advantage="Our gym is equipped with the latest and high-quality fitness equipment, ensuring that our members have access to a wide range of machines, weights, and training tools to meet their fitness needs."
          />{" "}
          <HomeAdvantage
            icon="fa fa-id-card"
            advantage="We have a team of highly qualified and experienced personal trainers who are dedicated to helping our members achieve their fitness goals. They provide personalized guidance, motivation, and support throughout your fitness journey."
          />{" "}
          <HomeAdvantage
            icon="fa fa-users"
            advantage="We offer a diverse selection of group fitness classes led by certified instructors. From high-intensity workouts to yoga and dance, our classes cater to different interests and fitness levels, creating a motivating and fun atmosphere for our members."
          />{" "}
          <HomeAdvantage
            icon="fa fa-eraser"
            advantage="We prioritize cleanliness and hygiene within our gym. Our facilities are regularly cleaned, and we maintain a safe environment for our members to work out comfortably."
          />{" "}
          <HomeAdvantage
            icon="fa fa-tasks"
            advantage="We provide tools and resources to track your progress and measure your achievements. From body composition analysis to fitness assessments, we help you monitor your results and adjust your training program accordingly."
          />{" "}
          <HomeAdvantage
            icon="fa fa-cutlery"
            advantage=" We understand that nutrition plays a crucial role in achieving fitness goals. Our gym offers nutritional guidance and resources to help you make informed food choices and create a balanced eating plan that complements your workout routine."
          />
        </div>
      </div>
      <div className="d4">
        <div className="stats">
          <HomeStat number={12} stat="# Classes" />
          <HomeStat number={8} stat="# Trainers" />
          <HomeStat number={729} stat="# Happy Clients" />
          <HomeStat number={2200} stat="# Sweat Hours" />
          <HomeStat number={12} stat="# Classes" />
          <HomeStat number={200} stat="# Calories (x1000)" />
        </div>
      </div>
    </div>
  );
}
