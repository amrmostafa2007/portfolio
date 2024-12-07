import React from 'react';
import { Instagram, Facebook, Twitter, Camera, MessageCircle, MessagesSquare } from 'lucide-react';
import { SocialLink } from './SocialLink';

export function SocialLinks() {
  return (
    <div className="space-y-4">
      <SocialLink
        href="https://www.instagram.com/amr_mostvfa/profilecard/?igsh=MXh6b2N1OGlzeTd5dA=="
        icon={Instagram}
        label="Instagram"
        username="@amr_mostvfa"
      />
      
      <SocialLink
        href="https://www.facebook.com/amr.mostvfa?mibextid=ZbWKwL"
        icon={Facebook}
        label="Facebook"
        username="Amr Mostafa"
      />
      
      <SocialLink
        href="https://x.com/amr_mostvfa?t=bl_dRLHNsDKw61VwBuTuZg&s=09"
        icon={Twitter}
        label="Twitter"
        username="@amr_mostvfa"
      />
      
      <SocialLink
        href="https://www.snapchat.com/add/amr_mostvfa?share_id=CGj9NuSYwFc&locale=en-GB"
        icon={Camera}
        label="Snapchat"
        username="@amr_mostvfa"
      />
      
      <SocialLink
        href="https://109188596324515647985.sarhne.com"
        icon={MessageCircle}
        label="Sarahah"
        username="Send Anonymous Message"
      />
      
      <SocialLink
        href="https://ngl.link/amr_mostvfa1"
        icon={MessagesSquare}
        label="NGL"
        username="Send Anonymous Message"
      />
    </div>
  );
}