import { useState } from "react";
import Calendar from "react-github-contribution-calendar";
import { FiMaximize, FiMoreVertical } from "react-icons/fi";

type CardProps = {
  title: string;
  onClick?: () => {};
  until: string;
  values:
    | {
        [key: string]: number;
      }
    | {};
  pannelColors: string[];
  isChecked: boolean;
  viewPostModal: (values: any, title: string, postId: string) => void;
  postId: string;
};

var panelAttributes = { rx: 2, ry: 2 };

export default function Card({
  title,
  onClick,
  until,
  values,
  pannelColors,
  isChecked,
  postId,
  viewPostModal,
}: CardProps) {
  const [maximizeTooltip, setmaximizeTooltip] = useState(false);
  return (
    <div className="bg-white p-4 rounded-lg cursor-pointer z-0 shadow-md">
      <div className="flex justify-between m-2">
        <h4 className="text-primaryGreen text-lg capitalize font-bold">
          {title}
        </h4>

        <div className="relative">
          <div className="flex justify-center items-center gap-3">
            <FiMaximize
              onClick={() => viewPostModal(values, title, postId)}
              className=" hover:text-primaryGreenDarker transition-colors "
              onMouseEnter={() => setmaximizeTooltip(true)}
              onMouseLeave={() => setmaximizeTooltip(false)}
            />
            {maximizeTooltip && (
              <span className="absolute bottom-4 right-16 bg-primaryGreen text-white text-sm py-1 px-3 rounded shadow-lg">
                Maximize
              </span>
            )}
            <input
              type="checkbox"
              name="value"
              className="accent-primaryGreen"
              onChange={onClick}
              checked={isChecked}
            />
          </div>
        </div>
      </div>
      <Calendar
        values={values}
        until={until}
        panelColors={pannelColors}
        panelAttributes={panelAttributes}
        weekLabelAttributes={() => ({ className: "text-xs text-gray-500" })}
        monthLabelAttributes={() => ({ className: "text-sm text-gray-700" })}
      />
    </div>
  );
}
