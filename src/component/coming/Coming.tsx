import { useNavigate } from "react-router-dom";
import Rocket from "../../assets/rocket.png";
import "./coming.css";

const Coming = () => {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <div className="coming-soon">
          <img src={Rocket} alt="Rocket" width={300} />
          <p>Coming Soon</p>
        </div>
        <div onClick={() => navigate(-1)} className="coming-home">
          <button>Back</button>
        </div>
      </section>
    </>
  );
};

export default Coming;
