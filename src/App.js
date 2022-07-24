import "./App.css";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FiUpload } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="posts-container">
            <img className="icon-img" src="https://tms.net.ua/files/2021/03/02/poster_tour_8NrZTP2.jpg" cover no-repeat/>
            <div className="first-union">
              <div className="second-union">
              <h4 className="profile-name">Stepan Giga</h4>
              <a href="#" className="profile-link">
                @stepan_giga
              </a>
              <p className="date">14.07.2022</p>
              </div>
              <p className="post-style">
                Як вам мій колаб з{" "}
                <a href="#" className="share-profile-link">
                  @lesia_nikityk
                </a>
                ?
              </p>
              <img className="post-img-inner" src="https://ngp-ua.info/wp-content/uploads/2022/06/11-16.jpg" cover no-repeat/>
          <div className="reactions">
          <span>
          <FaRegComment />
          <span className="icons">1237</span>
        </span>
        <span>
          <BiRepost />
          <span className="icons">435</span>
        </span>
        <span>
          <FcLike /> <span className="icons">2478</span>
        </span>
        <FiUpload />
          </div>
            </div>
  
        </div>
      </div>
    </div>
  );
}

export default App;
