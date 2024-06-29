import NewsWidget from "../chart/NewsWidget";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

const News = () => {
  return (
    <div>
      <Header />
      <div className="pt-[80px] bg-[#121A25]">
        <NewsWidget />
      </div>
      <Navbar />
    </div>
  );
};

export default News;
