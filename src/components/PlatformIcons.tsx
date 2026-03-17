import { HStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
  FaAndroid,
  FaApple,
  FaGamepad,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { useColorModeValue } from "./ui/color-mode";
import type { ParentPlatformEntry } from "../api-clients/rawg-api-client";

type PlatformSlug =
  | "pc"
  | "playstation"
  | "xbox"
  | "nintendo"
  | "ios"
  | "mac"
  | "android"
  | "linux";

const platformIconMap: Record<PlatformSlug, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: FaGamepad,
  ios: FaApple,
  mac: FaApple,
  android: FaAndroid,
  linux: FaLinux,
};

function isPlatformSlug(slug: string): slug is PlatformSlug {
  return slug in platformIconMap;
}

interface Props {
  platforms?: ParentPlatformEntry[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconColor = useColorModeValue("gray.600", "gray.400");

  return (
    <HStack gap={2}>
      {platforms?.map(({ platform }) => {
        if (!isPlatformSlug(platform.slug)) return null;
        const Icon = platformIconMap[platform.slug];
        return (
          <Icon
            key={platform.id}
            title={platform.name}
            color={iconColor}
            size={16}
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIcons;
