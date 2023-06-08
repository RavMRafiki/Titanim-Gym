import { ReactElement } from "react";
interface IProps {
  image: string;
  name: string;
  specialization: string;
  description: string;
}
export default function AboutTeamMember({
  image,
  name,
  specialization,
  description,
}: IProps): ReactElement {
  return (
    <div className="person">
      <div className="photo">
        <img src={image} alt={`${name} photo`} />
      </div>
      <div className="data">
        <h2>{name}</h2>
        <h3>{specialization}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
