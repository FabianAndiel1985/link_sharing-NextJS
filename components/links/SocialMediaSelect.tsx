"use client";
import Image from "next/image";
import "./socialMediaSelect.scss";

import { useEffect, useState } from "react";
import { platforms } from "@/data/mocks";
import {
  IPlattform,
  IPlattformEntryProps,
  IShowMenuProps,
} from "@/types/types";
import CustomInput from "../shared/CustomInput";
import { useSocialMediaContext } from "@/context/SocialMediaContext";

const SocialMediaSelect: React.FC = () => {
  const [menueIsOpen, setMenueIsOpen] = useState<boolean>(false);
  const [selectedPlattform, setSelectedPlattform] = useState<string>("");

  const { dispatch, socialMediaLinks } = useSocialMediaContext();

  useEffect(() => {
    if (selectedPlattform !== "") {
      console.log("Write it in the context");
      dispatch({
        type: "add",
        payload: selectedPlattform,
      });
    }
  }, [selectedPlattform]);

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
    id,
    icon,
    name,
  }: IPlattformEntryProps) => {
    return (
      <li
        key={id}
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
      <CustomInput
        clickHandler={() => {
          setMenueIsOpen((prevState) => !prevState);
        }}
      >
        {selectedPlattform !== "" ? (
          <>
            <div className={"selected-plattform"}>
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
      </CustomInput>

      {menueIsOpen && (
        <div className={"select-menu"}>
          <ul>
            {plattformsWithIcons.map((plattform) => (
              // eslint-disable-next-line react/jsx-key
              <PlattformEntry
                id={plattform.id}
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
