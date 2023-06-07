import { ReactElement } from "react";

interface IProps {
  idx: number;
  source: string;
  title: string;
  desc: string;
}
export default function HomeCard({
  idx,
  source,
  title,
  desc,
}: IProps): ReactElement {
  return (
    <div className={`card c${idx}`}>
      <img src={source} alt={`${title} card image`} />
      <h3 className="title">{title}</h3>
      <p className="desc">{desc}</p>
    </div>
  );
}
