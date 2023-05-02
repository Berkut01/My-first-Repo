import back from "../image/seblak.jpg";
import "../css/home.css"

const Intro = () => {
  return (
    <div className="text-white d-flex intro">
      <div className="heading">
        <h1>Warung Seblak</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste voluptate, quia magni maiores, sed unde maxime corrupti laboriosam quisquam impedit itaque similique inventore dolore eaque totam quam neque cum.</p>
      </div>
      <div className="image">
        <img src={back} style={{ width: "600px", borderRadius: "15px" }} />
      </div>
    </div>
  );
};
export default Intro;
