import IntercomComponent from "../intercom/Intercom";
import FAQ from "../landingpage/components/FAQ";
import Footer from "../landingpage/components/Footer";
import Navbar from "../landingpage/components/Navbar";
import Subscription from "../landingpage/components/Subscription";

const AirDrop = () => {
  return (
    <>
      <IntercomComponent />
      <Navbar />
      {/* Section hero */}
      <section className="mb-10 lg:mb-0 w-full lg:h-[500px] gap-y-8 border flex flex-col lg:flex-row justify-between items-center md:p-20">
        <div className="w-full  lg:w-[45%] h-full mt-3 flex flex-col justify-center">
          <h2 className="mt-10 md:mt-auto text-2xl md:text-5xl text-center lg:text-start font-bold">
            Maximise your gains with crypto's most lucrative airdrops
          </h2>
          <p className="mt-4 text-center lg:text-start text-md md:text-xl">
            Discover our exclusive Airdrops tool - save time and earn money with
            a curated list of the latest and most profitable airdrops,
            handpicked by our experts.
          </p>
          <button className="mt-4 bg-primary m-auto lg:mx-0 w-60 p-2 px-3 text-white rounded-md">
            Subscribe
          </button>
        </div>
        <div className="w-full lg:w-[50%] h-full justify-center items-center flex">
          <video
            className="object-center max-h-[330px] w-full object-cover m-auto rounded-md"
            controls
          >
            <source src={`/vid1.MP4`} type="video/mp4" />
          </video>
        </div>
      </section>
      {/* section trusted by investors */}
      <section className="flex justify-center items-center p-8 bg-gray-300">
        <p className="text-md">
          <span
            className="me-2 w-[50px] h-10 py-4 px-20 rounded-2"
            style={{
              backgroundImage: "url(/reviewimg.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></span>
          Trusted by 183,000+ successful investors
        </p>
      </section>
      {/* section make money without the risk */}
      <section className="w-full mb-10 md:mb-0 md:p-20">
        <h1 className="mt-10 :mt-0 text-3xl text-center">
          Make money without the risk
        </h1>
        <p className="w-[80%] m-auto mt-4 text-center text-xl">
          Airdrops are a low-risk way to make money. An airdrop is a marketing
          strategy used by crypto projects to distribute free tokens to users to
          increase awareness and adoption.
        </p>
      </section>
      {/* Find right opportunities */}
      <section className="w-full md:p-20 flex flex-col gap-y-5 md:gap-y-0 md:flex-row-reverse justify-between items-center">
        <div className="w-[80%] m-auto md:m-0 md:w-[45%] h-full mt-3 flex flex-col justify-center">
          <h2 className="text-center md:text-start text-4xl font-bold">
            Find the right opportunities
          </h2>
          <p className="text-center md:text-start mt-4 text-xl">
            Don't waste time farming random airdrops that yield little or no
            rewards. We've helped our members earn 4 to 5 figure airdrops on
            projects like Optimism, Arbitrum, Wormhole, Jito, Jupiter and more.
          </p>
          <button className="mt-4 bg-white w-60 p-2 px-3 text-white rounded-md"></button>
        </div>
        <div
          className="w-[80%] m-auto md:w-[50%] rounded-md h-[330px]  justify-center items-center flex"
          style={{
            backgroundImage: "url(/gem.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </section>
      {/* boost your portoflio */}
      <section className="w-full md:p-20 flex flex-col md:flex-row justify-between items-center">
        <div className="w-[80%] m-auto md:m-0 md:w-[45%] h-full mt-3 flex flex-col justify-center">
          <h2 className="mt-8 md:mt-0 text-center md:text-start text-4xl font-bold">
            Boost your portfolio with free money
          </h2>
          <p className="text-center md:text-start mt-4 text-xl">
            Discover all the information you need at a glance - status, capital
            required, and probability of an airdrop. Plus, you'll find full
            accompanying reports and step-by-step video tutorials.
          </p>
          <button className="mt-4 bg-white w-60 p-2 px-3 text-white rounded-md"></button>
        </div>
        <div
          className="w-[80%] m-auto md:m-0 md:w-[50%] rounded-md h-[330px] justify-center items-center flex"
          style={{
            backgroundImage: "url(/airdrop.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </section>
      {/* Section Subscription */}
      <Subscription />
      {/* Section FAQ */}
      <FAQ />
      {/*  footer */}
      <Footer />
    </>
  );
};
export default AirDrop;
