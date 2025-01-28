import Image from "next/image";
import "./linkDragable.scss";
import SocialMediaSelect from "./SocialMediaSelect";

const LinkDragable: React.FC = () => {
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
            Link #1
          </div>
          <p>Remove</p>
        </div>
        <label> Platform</label>
        <SocialMediaSelect />
        <label> Link </label>
        <input></input>
      </div>
    </>
  );
};

export default LinkDragable;
