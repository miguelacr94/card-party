import { useEffect, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const Share = () => {
  const [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="flex flex-col w-full space-y-2">
      <span className="text-sm font-bold">Compartir esta invitación</span>
      <div className="flex w-full space-x-2">
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon className="w-8 h-8 duration-300 scale-100 rounded-full hover:scale-110" />
        </FacebookShareButton>
        <WhatsappShareButton url={currentUrl}>
          <WhatsappIcon className="w-8 h-8 duration-300 scale-100 rounded-full hover:scale-110" />
        </WhatsappShareButton>
        <TelegramShareButton url={currentUrl}>
          <TelegramIcon className="w-8 h-8 duration-300 scale-100 rounded-full hover:scale-110" />
        </TelegramShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon className="w-8 h-8 duration-300 scale-100 rounded-full hover:scale-110" />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default Share;
