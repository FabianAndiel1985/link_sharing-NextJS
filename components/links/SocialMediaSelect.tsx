"use client";
import Image from "next/image";
import "./socialMediaSelect.scss";

import { useState } from "react";
import { platforms } from "@/data/mocks";
import {
  IPlattform,
  IPlattformEntryProps,
  IShowMenuProps,
} from "@/types/types";

const SocialMediaSelect: React.FC = () => {
  const [menueIsOpen, setMenueIsOpen] = useState<boolean>(false);
  const [selectedPlattform, setSelectedPlattform] = useState<string>("");

  const plattformsWithIcons: IPlattform[] = platforms.map(
    (plattform, index) => {
      return {
        id: index,
        name: plattform,
        icon: "social-media-icons/icon-" + plattform + ".svg",
      };
    }
  );

  const ShowMenu: React.FC<IShowMenuProps> = ({ isOpen }: IShowMenuProps) => {
    return (
      <Image
        className={`${isOpen && "inverted"}`}
        src={"icon-chevron-down.svg"}
        width={12}
        height={6}
        alt={"Show the menu"}
      />
    );
  };

  const PlattformEntry: React.FC<IPlattformEntryProps> = ({
    key,
    icon,
    name,
  }: IPlattformEntryProps) => {
    return (
      <li
        key={key}
        onClick={() => {
          setSelectedPlattform(name);
          setMenueIsOpen(false);
        }}
      >
        <div className={"select-menu__entry"}>
          <Image src={icon} height={16} width={16} alt={"icon-" + name} />
          <p> {name} </p>
        </div>
        <hr />
      </li>
    );
  };

  return (
    <>
      <div
        className={"plattform-select"}
        onClick={() => {
          setMenueIsOpen((prevState) => !prevState);
        }}
      >
        {selectedPlattform !== "" ? (
          <>
            <div className={"plattform-select__selected-plattform"}>
              <Image
                src={"social-media-icons/icon-" + selectedPlattform + ".svg"}
                height={16}
                width={16}
                alt={"icon-" + selectedPlattform}
              />
              <p> {selectedPlattform} </p>
            </div>
          </>
        ) : (
          <p> Choose your plattform ... </p>
        )}
        <ShowMenu isOpen={menueIsOpen} />
      </div>
      {menueIsOpen && (
        <div className={"select-menu"}>
          <ul>
            {plattformsWithIcons.map((plattform) => (
              <PlattformEntry
                key={plattform.id}
                icon={plattform.icon}
                name={plattform.name}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SocialMediaSelect;
