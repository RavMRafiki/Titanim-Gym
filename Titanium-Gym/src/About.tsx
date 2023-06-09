import "./About.scss";
import AboutTeamMember from "./AboutTeamMember";
import Img1 from "./Images/AboutPerson1.jpg";
import Img2 from "./Images/AboutPerson2.jpg";
import Img3 from "./Images/AboutPerson3.jpg";
import Img4 from "./Images/AboutPerson4.jpg";
import Img5 from "./Images/AboutPerson5.jpg";
import Img6 from "./Images/AboutPerson6.jpg";
import Img7 from "./Images/AboutPerson7.jpg";
import Img8 from "./Images/AboutPerson8.jpg";
export default function AboutUs() {
  return (
    <div className="about">
      <div className="about-main">
        <h1>AboutUs</h1>
        <div className="desc">
          <p>
            Welcome to our premier fitness destination, where we are dedicated
            to helping you achieve your fitness goals and live a healthier,
            stronger life. Our gym is a state-of-the-art facility designed to
            provide you with everything you need to transform your body and
            enhance your overall well-being.
          </p>
          <p>
            Step inside and be greeted by a dynamic and motivating atmosphere
            that inspires you to push your limits and reach new heights. Our gym
            boasts a wide array of top-of-the-line equipment, carefully selected
            to cater to all fitness levels and training preferences. From
            cutting-edge cardio machines and resistance training equipment to
            functional training areas, we have it all to ensure a well-rounded
            workout experience.
          </p>
          <p>
            What sets us apart is our team of expert trainers who are committed
            to your success. They are here to offer personalized attention,
            guidance, and support, whether you are new to fitness or an
            experienced athlete. Our trainers will work closely with you to
            develop customized workout programs that align with your goals,
            abilities, and interests.
          </p>
          <p>
            Experience the power of group motivation in our energetic and
            diverse fitness classes led by certified instructors. From
            high-intensity interval training to yoga and mind-body sessions, our
            classes cater to various interests and offer an opportunity to
            connect with like-minded individuals on the same fitness journey.
          </p>
          <p>
            We understand that nutrition plays a vital role in your overall
            fitness, which is why we offer nutritional guidance to complement
            your workout routine. Our team can provide expert advice, meal
            planning tips, and resources to help you make informed choices and
            fuel your body for optimal performance and results.
          </p>
          <p>
            At our gym, we prioritize cleanliness, safety, and creating a
            welcoming environment for all. Our facilities are meticulously
            maintained, ensuring a hygienic and comfortable space for your
            workouts. We foster a supportive community that motivates and
            encourages you to push beyond your limits, making fitness a
            rewarding and enjoyable part of your life.
          </p>
          <p>
            Join us on this fitness journey, where every workout is a step
            towards a healthier, fitter you. Experience the difference at our
            gym and unlock your full potential. Get ready to embrace the
            challenge, sweat, and achieve greatness. Your transformation starts
            here.
          </p>
        </div>
      </div>
      <div className="about-team">
        <h1>Our Team</h1>
        <div className="team-members">
          <AboutTeamMember
            image={Img1}
            name="Emily Collins"
            specialization="Certified Personal Trainer"
            description="Emily is a passionate and dedicated personal trainer with a wealth of knowledge in strength training and functional fitness. With her expertise in designing customized workout plans, she guides clients of all fitness levels towards their goals with enthusiasm and precision. Her positive energy and commitment to helping others make her a sought-after trainer."
          ></AboutTeamMember>
          <AboutTeamMember
            image={Img2}
            name="Mark Johnson"
            specialization="Strength and Conditioning Specialist"
            description="Mark is an experienced strength and conditioning specialist who believes in the power of proper technique and progressive training. With a focus on functional movements and performance enhancement, he helps athletes and fitness enthusiasts improve their strength, power, and agility. Mark's motivating coaching style and attention to detail ensure clients reach their peak potential."
          ></AboutTeamMember>
          <AboutTeamMember
            image={Img3}
            name="Sarah Roberts"
            specialization="Yoga and Mindfulness Instructor"
            description="Sarah is a certified yoga and mindfulness instructor who brings a holistic approach to fitness and well-being. With her calming presence and expertise in various yoga styles, she guides individuals towards increased flexibility, balance, and inner peace. Sarah's classes blend physical postures with breathwork and meditation, creating a serene and rejuvenating experience."
          ></AboutTeamMember>
          <AboutTeamMember
            image={Img4}
            name="Alex Ramirez"
            specialization="High-Intensity Interval Training (HIIT) Specialist"
            description="Alex is a dynamic and energetic HIIT specialist known for his intense and effective workout routines. With a focus on maximizing calorie burn and boosting cardiovascular fitness, he pushes clients to their limits in a safe and motivating environment. Alex's infectious enthusiasm and ability to create challenging yet fun workouts make him a favorite among those seeking high-intensity training."
          ></AboutTeamMember>
          <AboutTeamMember
            image={Img5}
            name="Jessica Chen"
            specialization="Functional Training and Rehabilitation Coach"
            description="Jessica is a highly skilled functional training and rehabilitation coach with a background in physical therapy. With her expertise in movement mechanics and injury prevention, she helps clients restore mobility, strength, and functionality. Jessica's compassionate and supportive approach ensures clients feel empowered and confident during their recovery and fitness journey."
          ></AboutTeamMember>
          <AboutTeamMember
            image={Img6}
            name="David Lee"
            specialization="Sports Performance Specialist"
            description="David is a dedicated sports performance specialist who works with athletes to enhance their athletic abilities and optimize performance. With a deep understanding of biomechanics and sport-specific training, he designs comprehensive programs that focus on speed, agility, power, and endurance. David's commitment to excellence and personalized coaching helps athletes reach their full potential."
          ></AboutTeamMember>
          <AboutTeamMember
            image={Img7}
            name="Michelle Turner"
            specialization="Group Fitness and Dance Instructor"
            description="Michelle is an energetic and charismatic group fitness and dance instructor who brings passion and creativity to her classes. With a background in various dance styles, she delivers fun and high-energy workouts that combine dance choreography with cardiovascular conditioning. Michelle's contagious enthusiasm and infectious rhythm make her classes an enjoyable and effective fitness experience."
          ></AboutTeamMember>
          <AboutTeamMember
            image={Img8}
            name="Ryan Cooper"
            specialization="Nutritional Coach and Weight Management Specialist"
            description="Ryan is a knowledgeable nutritional coach and weight management specialist who believes in the power of balanced and sustainable eating habits. With his expertise in nutrition science and behavior change, he provides clients with personalized guidance, meal planning strategies, and ongoing support to help them achieve their weight loss and wellness goals. Ryan's compassionate and evidence-based approach makes him an invaluable resource for those seeking nutritional guidance."
          ></AboutTeamMember>
        </div>
      </div>
    </div>
  );
}
