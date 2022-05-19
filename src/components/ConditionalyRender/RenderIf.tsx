import { RenderIfProps } from "./RenderIf.props";


export const RenderIf = ({ children, isTrue }: RenderIfProps) => {
  return isTrue ? children : null
}