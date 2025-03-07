"use client";
import Image from "next/image";
import "./socialMediaSelect.scss";

import { useState } from "react";
import { platforms } from "@/data/mocks";
import {
  IPlattform,
  IPlattformEntryProps,
  IShowMenuProps,
  ISocialMediaSelectProps,
} from "@/types/types";
import CustomInput from "../shared/CustomInput";

const SocialMediaSelect: React.FC<ISocialMediaSelectProps> = ({
  parentKey,
  setSelectedPlattform,
  selectedPlattform,
}: ISocialMediaSelectProps) => {
  const [menueIsOpen, setMenueIsOpen] = useState<boolean>(false);

  const plattformsWithIcons: IPlattform[] = platforms.map(
    (plattform, index) => {
      return {
        //taking the index because its a stable list
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
    icon,
    name,
  }: IPlattformEntryProps) => {
    return (
      <li
        onClick={() => {
          setSelectedPlattform({
            name: name,
            id: parentKey,
          });
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
      <CustomInput
        clickHandler={() => {
          setMenueIsOpen((prevState) => !prevState);
        }}
      >
        {selectedPlattform ? (
          <>
            <div className={"selected-plattform"}>
              <Image
                src={
                  "social-media-icons/icon-" + selectedPlattform.name + ".svg"
                }
                height={16}
                width={16}
                alt={"icon-" + selectedPlattform}
              />
              <p> {selectedPlattform.name} </p>
            </div>
          </>
        ) : (
          <p> Choose your plattform ... </p>
        )}
        <ShowMenu isOpen={menueIsOpen} />
      </CustomInput>

      {menueIsOpen && (
        <div className={"select-menu"}>
          <ul>
            {plattformsWithIcons.map((plattform) => (
              <PlattformEntry
                icon={plattform.icon}
                name={plattform.name}
                key={plattform.id}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SocialMediaSelect;
