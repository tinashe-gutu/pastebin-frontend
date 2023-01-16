import { IFullSummary } from "../../utils/interfaces";

export function FullSummary({}: IFullSummary): JSX.Element {
  console.log("Now in full summary");
  return <h1>Hello, I am in FullSummary</h1>;
}
