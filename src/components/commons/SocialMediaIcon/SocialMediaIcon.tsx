import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import type { SocialMedias } from "@/app/actions/get-profile";

const socialMediasIcons: { [key in keyof SocialMedias]: LucideIcon } = {
  instagram: Instagram,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

type SocialMediaIconProps = {
  socialMedia: keyof SocialMedias;
};

const SocialMediaIcon = ({ socialMedia }: SocialMediaIconProps): ReactNode => {
  const Icon = socialMediasIcons[socialMedia];

  if (!Icon) {
    return null;
  }

  return <Icon />;
};

export { SocialMediaIcon };
