import { ReactNode } from "react";
type containerProps = {
  children?: ReactNode;
  containerStyle?: string;
};
function Container({ children, containerStyle }: containerProps) {
  return (
    <div className={`min-h-screen font-primaryFont  ${containerStyle}`}>
      {children}
    </div>
  );
}

export default Container;
