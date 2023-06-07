import { ReactElement } from "react";

interface IProps {
    number: number;
    stat: string;
}
export default function HomeStat({number,stat}:IProps):ReactElement {
  return (
    <div className="card">
        <div className="number">{number}</div>
        <div className="line"></div>
        <div className="stat">{stat}</div>
    </div>
  )
}
