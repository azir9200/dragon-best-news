import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, } from "react-icons/fa";
import swimming from '../../assets/qZone1.png'
import play from '../../assets/qZone2.png'
import basck from '../../assets/qZone3.png'

const RightSideBar = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-3xl">Find Us On</h2>

        <button className="btn btn-outline w-full" >  <FaLinkedin></FaLinkedin> LinkedIn</button>

        <button className="btn btn-outline w-full" >  <FaGoogle></FaGoogle>  Google</button>

        <button className="btn btn-outline w-full" >  <FaFacebook></FaFacebook>  Facebook</button>


        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>

      </div>
      <div>
        <div>
          <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
            <FaInstagram className='mr-2'></FaInstagram>
            <span>Facebook</span>
          </a>
        </div>
        <div>
          <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
            <FaTwitter className="mr-2" ></FaTwitter>
            <span>Twitter</span>
          </a>
        </div>
        <div>
          <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
            <FaInstagram className='mr-2'></FaInstagram>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className='p-4 space-y-3 mb-6'>
        <h2>Q Zones</h2>
        <div> <img src={swimming} alt="" /> </div>
        <div> <img src={play} alt="" /> </div>
        <div> <img src={basck} alt="" /> </div>

      </div>
    </div>
  );
};

export default RightSideBar;