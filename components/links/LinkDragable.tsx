import Image from "next/image";
import "./linkDragable.scss";
import SocialMediaSelect from "./SocialMediaSelect";
import CustomInput from "../shared/CustomInput";
import { ReactNode } from "react";
import { ISelectedPlattform } from "./LinkCustomization";

export interface DraggableProps {
  index: number;
  removeHandler: () => void;
  parentKey: string;
}

const LinkDragable: React.FC<DraggableProps> = ({
  index,
  removeHandler,
  parentKey,
}: DraggableProps) => {
  const MagnifiyingGlass: () => ReactNode = () => {
    return (
      <>
        <Image
          src={"/icon-link-copied-to-clipboard.svg"}
          height={16}
          width={16}
          alt={"link-icon"}
        />
      </>
    );
  };

  return (
    <>
      <div className="link-dragable">
        <div className="link-dragable__heading">
          <div className="link-dragable__heading__image-link">
            <Image
              src="icon-drag-and-drop.svg"
              height={24}
              width={12}
              alt={"icon drag and drop"}
            />
            Link #{index}
          </div>
          <p
            onClick={() => {
              removeHandler();
            }}
          >
            Remove
          </p>
        </div>
        <label> Platform</label>
        <SocialMediaSelect parentKey={parentKey} />
        <label htmlFor="input-link-entry"> Link </label>
        <CustomInput>
          <MagnifiyingGlass />
          <input
            type="url"
            name="link-entry"
            aria-label="Enter link"
            id="input-link-entry"
          ></input>
        </CustomInput>
      </div>
    </>
  );
};

export default LinkDragable;
