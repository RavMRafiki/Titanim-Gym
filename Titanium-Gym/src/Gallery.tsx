import "./Gallery.scss";
import Gallery1 from "./Images/Gallery1.jpg";
import Gallery2 from "./Images/Gallery2.jpg";
import Gallery3 from "./Images/Gallery3.jpg";
import Gallery4 from "./Images/Gallery4.jpg";
import Gallery5 from "./Images/Gallery5.jpg";
import Gallery6 from "./Images/Gallery6.jpg";
export default function Gallery() {
  return (
    <div className="main-gallery">
      <h1>Gallery</h1>
      <div className="ph-1">
        <button>
          <img src={Gallery1} alt="photo-1" />
        </button>
      </div>
      <div className="ph-2">
        <button>
          <img src={Gallery2} alt="photo-2" />
        </button>
      </div>
      <div className="ph-3">
        <button>
          <img src={Gallery3} alt="photo-3" />
        </button>
      </div>
      <div className="ph-4">
        <button>
          <img src={Gallery4} alt="photo-4" />
        </button>
      </div>
      <div className="ph-5">
        <button>
          <img src={Gallery5} alt="photo-5" />
        </button>
      </div>
      <div className="ph-6">
        <button>
          <img src={Gallery6} alt="photo-6" />
        </button>
      </div>
    </div>
  );
}
