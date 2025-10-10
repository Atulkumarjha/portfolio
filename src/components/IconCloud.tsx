import { IconCloud } from "../components/ui/icon-cloud";

const iconPalette = [
  { slug: "typescript", color: "3178C6" },
  { slug: "javascript", color: "F7DF1E" },
  { slug: "dart", color: "0175C2" },
  { slug: "java", color: "007396" },
  { slug: "react", color: "61DAFB" },
  { slug: "flutter", color: "02569B" },
  { slug: "android", color: "3DDC84" },
  { slug: "html5", color: "E34F26" },
  { slug: "css3", color: "1572B6" },
  { slug: "nodedotjs", color: "5FA04E" },
  { slug: "express", color: "828282" },
  { slug: "nextdotjs", color: "20C997" },
  { slug: "prisma", color: "5A67D8" },
  { slug: "amazonaws", color: "FF9900" },
  { slug: "postgresql", color: "4169E1" },
  { slug: "firebase", color: "FFCA28" },
  { slug: "nginx", color: "009639" },
  { slug: "vercel", color: "FFFFFF" },
  { slug: "testinglibrary", color: "E33332" },
  { slug: "jest", color: "C21325" },
  { slug: "cypress", color: "00A8E0" },
  { slug: "docker", color: "2496ED" },
  { slug: "git", color: "F05032" },
  { slug: "jira", color: "0052CC" },
  { slug: "github", color: "FFFFFF" },
  { slug: "gitlab", color: "FC6D26" },
  { slug: "visualstudiocode", color: "007ACC" },
  { slug: "androidstudio", color: "3DDC84" },
  { slug: "sonarqube", color: "4E9BCD" },
  { slug: "figma", color: "F24E1E" },
];

export function IconCloudDemo() {
  const images = iconPalette.map(
    ({ slug, color }) => `https://cdn.simpleicons.org/${slug}/${color}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
