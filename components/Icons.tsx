import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function EmailIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7" />
      <path d="M8 7.5v.01" />
      <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
      <path d="M12 10v7" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3a5.4 5.4 0 0 0-.1-4S18 1 15 2.5a14 14 0 0 0-6 0C6 1 4.8 0 4.8 0a5.4 5.4 0 0 0-.1 4A5.8 5.8 0 0 0 3.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  );
}

export function ScholarIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m2 9 10-5 10 5-10 5L2 9Z" />
      <path d="M6 11.5V16c2.8 2.2 9.2 2.2 12 0v-4.5" />
      <path d="M22 9v6" />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}


export function UniversityIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m2 10 10-6 10 6" />
      <path d="M4 10h16" />
      <path d="M6 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M18 10v8" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function OrganizationIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h2" />
      <path d="M14 7h2" />
      <path d="M8 11h2" />
      <path d="M14 11h2" />
      <path d="M8 15h2" />
      <path d="M14 15h2" />
      <path d="M11 21v-4h2v4" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.5Z" />
      <circle cx="12" cy="12.5" r="3.5" />
    </svg>
  );
}

export function MusicIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  );
}

export function CupIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 8h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" />
      <path d="M16 10h2a3 3 0 0 1 0 6h-2" />
      <path d="M7 4v2M10 3v3M13 4v2" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function CookingIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 9h12v7a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9Z" />
      <path d="M4 9h16" />
      <path d="M9 5c0-1 1-1.5 1-2.5M13 5c0-1 1-1.5 1-2.5" />
    </svg>
  );
}
