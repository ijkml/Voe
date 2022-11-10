import {
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiTwitter,
  mdiWhatsapp,
} from '@mdi/js';

type VBox = `${number} ${number} ${number} ${number}`;

interface Icon {
  vbox: VBox;
  icon: string;
}

function iconify(icon: string, vbox: VBox = '0 0 24 24'): Icon {
  return { vbox, icon };
}

const twitterIcon = iconify(mdiTwitter);
const instagramIcon = iconify(mdiInstagram);
const facebookIcon = iconify(mdiFacebook);
const linkedinIcon = iconify(mdiLinkedin);
const whatsappIcon = iconify(mdiWhatsapp);

export { instagramIcon, facebookIcon, twitterIcon, linkedinIcon, whatsappIcon };
