import one from '../../../assets/1.png'
import two from '../../../assets/2.png'
import three from '../../../assets/3.png'

const AllNews = () => {
  return (
    <div>
      <h1>All News</h1>
      <div>
        <div>
          <img src={one} alt="" />

        </div>
        <div>
          <img src={two} alt="" />
        </div>
        <div>
          <img src={three} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AllNews;