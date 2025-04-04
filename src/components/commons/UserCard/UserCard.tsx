import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProfileData, SocialMedias } from "@/app/actions/get-profile";
import { EditSocialMedias } from "@/components/commons/EditSocialMedias";
import { SocialMediaIcon } from "@/components/commons/SocialMediaIcon";
import { Button } from "@/components/ui/Button";

type UserCardProps = {
  profileData: ProfileData;
};

const UserCard = ({ profileData }: UserCardProps) => {
  const { socialMedias } = profileData;

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white/10 bg-gray-900 rounded-3xl text-white">
      <div className="size-48">
        <Image
          src="/me.jpg"
          alt="An user image"
          className="rounded-full object-cover w-full h-full"
          height={192}
          width={192}
        />
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-2">
            <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
              EricDosReis
            </h3>
          </div>

          <p className="opacity-70">I develop online products</p>
        </div>

        <div className="flex w-full items-center gap-5">
          {socialMedias ? (
            Object.keys(socialMedias).map((socialMediaKey) => {
              const socialMedia = socialMediaKey as keyof SocialMedias;

              return (
                socialMedias[socialMedia] && (
                  <Link
                    key={socialMedia}
                    href={socialMedias[socialMedia]}
                    target="_blank"
                  >
                    <SocialMediaIcon socialMedia={socialMedia} />
                  </Link>
                )
              );
            })
          ) : (
            <p className="opacity-30">No social links added yet</p>
          )}

          <EditSocialMedias {...socialMedias!} />
        </div>

        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button full>SaaS Template - Buy now</Button>

            <Button variant="secondary">
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UserCard };
