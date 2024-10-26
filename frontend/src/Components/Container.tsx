import { ReactNode } from "react";
type containerProps = {
  children?: ReactNode;
  containerStyle?: string;
};
function Container({ children, containerStyle }: containerProps) {
  return (
    <div
      className={`h-screen font-primaryFont overflow-auto overflow-y-auto ${containerStyle}`}
    >
      {children}
    </div>
  );
}

export default Container;
