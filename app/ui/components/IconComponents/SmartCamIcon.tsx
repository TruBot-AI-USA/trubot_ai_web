const SmartCamIcon = () => {
  return (
    <svg
      className="w-24 h-24 text-electric float"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="16" width="48" height="32" rx="6" fill="currentColor" />
      <circle cx="32" cy="32" r="6" fill="white" />
      <path
        d="M54 20L62 14V50L54 44V20Z"
        fill="currentColor"
        className="opacity-80"
      />
      <rect x="24" y="48" width="16" height="4" rx="2" fill="currentColor" />
    </svg>
  );
};

export default SmartCamIcon;
