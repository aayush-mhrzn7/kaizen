import Calendar from "react-github-contribution-calendar";

type CardProps = {
  title?: string;
  onClick?: () => {};
  until: string;
  values:
    | {
        [key: string]: number;
      }
    | {};
  pannelColors: string[];
  isChecked: boolean;
};

var panelAttributes = { rx: 2, ry: 2 };

export default function Card({
  title,
  onClick,
  until,
  values,
  pannelColors,
  isChecked,
}: CardProps) {
  console.log(isChecked);
  return (
    <div className="bg-white p-4 rounded-lg z-0">
      <div className="flex justify-between m-2">
        <h4 className="text-primaryGreen text-lg capitalize font-bold">
          {title}
        </h4>
        <input
          type="checkbox"
          name="value"
          className="accent-primaryGreen"
          onChange={onClick}
          checked={isChecked}
        />
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
