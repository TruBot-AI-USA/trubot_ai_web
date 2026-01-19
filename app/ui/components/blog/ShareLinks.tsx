import { FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

interface ShareLinksProps {
  url: string;
  title: string;
  className?: string;
}

const ShareLinks: React.FC<ShareLinksProps> = ({
  url,
  title,
  className = "",
}) => {
  const shareText = `${title} - TruBot AI`;
  const shareLinks = [
    {
      name: "Twitter",
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(url)}`,
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      color: "hover:text-blue-600",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      color: "hover:text-blue-500",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + " " + url)}`,
      color: "hover:text-green-500",
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {shareLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors ${link.color}`}
            aria-label={`Share on ${link.name}`}
            title={`Share on ${link.name}`}
          >
            <Icon className="text-lg" />
          </a>
        );
      })}
    </div>
  );
};

export default ShareLinks;
