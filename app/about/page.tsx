import Footer from "../components/Footer";
import Hero from "../components/Hero";

const About = () => {
    return (
      <>
        <div className="pb-[100px]">
          <Hero
            title="About The Challenge"
            description="Join HackJos 2025 and compete for amazing prizes while solving real-world challenges"
          />

          <div className="container mx-auto px-5 mt-10 lg:mt-[100px] text-[#000000D9] lg:text-[24px]">
            <p>The Innovation Challenge</p>
            <p>
              Over an intense few days, teams will brainstorm, prototype, and
              pitch tech-enabled solutions focused on:
            </p>

            <ul className="list-disc mt-8 lg:mt-12 ml-8">
              <li>Digitalization & E-commerce</li>
              <li>
                Helping MSMEs go digital, reach new customers, and build strong
                online brands.
              </li>
              <li>Financial Inclusion</li>
              <li>
                Creating tools that improve access to credit, payments, and
                financial literacy.
              </li>
              <li>Productivity & Efficiency</li>
              <li>
                Streamlining operations, logistics, and workflows with smart
                technology.
              </li>
              <li>Market Access & Linkages</li>
              <li>
                Building platforms that connect MSMEs to suppliers, customers,
                and new markets.
              </li>
            </ul>
          </div>

        </div>
          <Footer />
      </>
    );
}
 
export default About;