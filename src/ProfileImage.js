import professional_headshot from "./images/professional_headshot.jpg";

export default function ProfileImage() {
  return (
    <>
      <div className="col" style={{ textAlign: "right" }}>
        <img src={professional_headshot} className="pfp-image-sizing image-sizing" />
      </div>
    </>
  );
}
