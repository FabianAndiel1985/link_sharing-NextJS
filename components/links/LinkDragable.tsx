import Image from "next/image";
import "./linkDragable.scss";

const LinkDragable = () => {
  return (
    <>
      <div className="link-dragable">
        <div className="link-dragable__heading">
          <div className="link-dragable__heading__image-link">
            <Image
              src="icon-drag-and-drop.svg"
              height={12}
              width={6}
              alt={"icon drag and drop"}
            />
            Link #1
          </div>
          <p>Remove</p>
        </div>
        <label> Platform</label>
        <select></select>
        <label> Link </label>
        <input></input>
      </div>
    </>
  );
};

export default LinkDragable;
