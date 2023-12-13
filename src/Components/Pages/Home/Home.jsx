import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import RightSideBar from "../../RightSideBar/RightSideBar";
import AllNews from "../../Shared/AllNews/AllNews";
import BreakingNews from "../../Shared/BreakingNews/BreakingNews";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const Home = () => {
  const newses = useLoaderData();

  return (
    <div>
      <div>

        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        <h1>This is home.</h1>
      </div>
      <div className="grid sm:grid-cols-1  lg:grid-cols-4 gap-6 " >

        <div className="border" >
          <LeftSideBar></LeftSideBar>
          <AllNews></AllNews>
        </div>

        <div className="col-span-2 border" >
          <h2 className="text-3xl"> News Coming Soon</h2>
          {
            newses.map(news => <NewsCard

              key={news._id}
              news={news}
            ></NewsCard>)
          }

        </div>

        <div className="border" >
          <RightSideBar></RightSideBar>
        </div>
      </div>


    </div>
  );
};

export default Home;