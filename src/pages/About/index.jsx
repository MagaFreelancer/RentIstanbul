import Heading from "../../components/Heading";
import Advantages from "../../components/Advantages";
import "./About.scss";

const About = () => {
  return (
    <>
      <Heading />
      <section className="about__story">
        <div className="container">
          <div className="about__inner">
            <img
              className="about__story-img"
              src="http://placehold.it/526x350"
              alt=""
            />

            <div className="about__story-info">
              <h2 className="about__story-title">
                Our Mission: Helping Millions of Organizations Grow Better
              </h2>
              <p className="about__story-subtitle">
                We believe not just in growing bigger, but in growing better.
                And growing better means aligning the success of your own
                business with the success of your customers. Win-win!
              </p>
            </div>
            <div className="about__story-info">
              <h2 className="about__story-title">Our Story</h2>
              <p className="about__story-subtitle">
                In 2004, fellow MIT graduate students Brian Halligan and
                Dharmesh Shah noticed a major shift in the way people shop and
                purchase products. Buyers didn’t want to be interrupted by ads,
                they wanted helpful information. In 2006, they founded HubSpot
                to help companies use that shift to grow better with inbound
                marketing.<br></br>
                <br></br> Along the way, HubSpot expanded beyond marketing into
                a crafted, not cobbled suite of products that create the
                frictionless customer experience that buyers expect today.
                Expertly led by CEO Yamini Rangan, HubSpot uses its customer
                platform built on an AI-powered Smart CRM to help millions of
                scaling organizations grow better.
              </p>
            </div>
            <img
              className="about__story-img"
              src="http://placehold.it/525x350"
              alt=""
            />
          </div>
        </div>
      </section>
      <Advantages />
    </>
  );
};

export default About;
