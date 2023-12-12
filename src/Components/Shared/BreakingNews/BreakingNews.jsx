
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex" >
      <button className="btn btn-secondary">Secondary</button>
      <Marquee pauseOnHover={true} speed={100}  >
        <Link to='/' > I can be a React component, multiple React components, or just some text.....</Link>
        <Link className="bg-green-600 text-2xl mr-6 " to='/' > I can be a React component, multiple React components, or just some text.....</Link>
        <Link className="text-sky-700 text-xl" to='/' > I can be a React component, multiple React components, or just some text.....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;