import "./Footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://www.youtube.com">
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.vimeo.com">
          <i className="fa fa-vimeo" aria-hidden="true"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
      <div className="footer-text">
        <i className="fa fa-copyright" aria-hidden="true"></i>
        {Number(new Date().getFullYear())} Titanum Gym All Rights Reserved
      </div>
    </footer>
  );
}
