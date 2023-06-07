import { ReactElement } from "react";
interface IProps {
  icon: string;
  advantage: string;
}
export default function HomeAdvantage({
  icon,
  advantage,
}: IProps): ReactElement {
  return (
    <div>
      <i className={icon}></i>
      <p>{advantage}</p>
    </div>
  );
}
