import { IEmptyRow, IRowWithSocialMedia } from "@/types/types";
import { ReactNode } from "react";
import Image from "next/image";

const GITHUB = "#1A1A1A";
const CODEPEN = "#1A1A1A";
const FRONTEND_MENTOR = "#333333";
const TWITTER = "#43B7E9";
const LINKEDIN = "#2D68FF";
const YOUTUBE = "#EE3939";
const FACEBOOK = "#2442AC";
const TWITCH = "#EE3FC8";
const DEVTO = "#333333";
const CODEWARS = "#8A1A50";
const FREECODECAMP = "#302267";
const GITLAB = "#EB4925";
const HASHNODE = "#0330D1";
const STACK_OVERFLOW = "#EC7100";

const getColourOfSocialMediaButton = (name: string): string => {
  let color: string = "";
  switch (name.toLowerCase()) {
    case "github":
      color = GITHUB;
      break;
    case "codepen":
      color = CODEPEN;
      break;
    case "frontend-mentor":
      color = FRONTEND_MENTOR;
      break;
    case "twitter":
      color = TWITTER;
      break;
    case "linkedin":
      color = LINKEDIN;
      break;
    case "youtube":
      color = YOUTUBE;
      break;
    case "facebook":
      color = FACEBOOK;
      break;
    case "twitch":
      color = TWITCH;
      break;
    case "devto":
      color = DEVTO;
      break;
    case "codewars":
      color = CODEWARS;
      break;
    case "freecodecamp":
      color = FREECODECAMP;
      break;
    case "gitlab":
      color = GITLAB;
      break;
    case "hashnode":
      color = HASHNODE;
      break;
    case "stack overflow":
      color = STACK_OVERFLOW;
      break;
    default:
      color = "EEE";
      break;
  }
  return color;
};

export const RowWithSocialMedia = ({
  name,
  yCoordinate,
}: IRowWithSocialMedia): ReactNode => {
  return (
    <>
      <rect
        width="237"
        height="44"
        x="35"
        y={yCoordinate}
        fill={getColourOfSocialMediaButton(name)}
        rx="8"
      />
      <foreignObject x="35" y={yCoordinate} width="237" height="44">
        <div className="social-media-content">
          <div className="social-media-content__main-row">
            <Image
              src={`/social-media-icons/icon-${name}.svg`}
              width={16}
              height={16}
              alt={"icon-" + name}
              className="social-media-content__main-row__svg-image"
            />
            <span>{name}</span>
          </div>
          <Image
            src={"/icon-arrow-right.svg"}
            width="16"
            height="16"
            alt="arrow-right"
          />
        </div>
      </foreignObject>
    </>
  );
};

export const EmptyRow = ({ yCoordinate }: IEmptyRow): ReactNode => {
  return (
    <>
      <rect
        width="237"
        height="44"
        x="35"
        y={yCoordinate}
        fill={"#EEE"}
        rx="8"
      />
    </>
  );
};

export const transformSocialMediaArr = (
  socialMedia: any[],
  yCoordinates: any[]
) => {
  const socialMediaWithYCorr: any[] = yCoordinates.map((item: any, index) => {
    if (index < socialMedia.length) {
      return { id: index + 1, name: socialMedia[index], yCoordinate: item };
    }
    return { name: null, yCoordinate: item };
  });
  return socialMediaWithYCorr;
};
