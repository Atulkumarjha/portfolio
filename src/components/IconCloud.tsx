import { IconCloud } from "../components/ui/icon-cloud";

const iconPalette = [
  { slug: "typescript", color: "3178C6" },
  { slug: "javascript", color: "F7DF1E" },
  { slug: "dart", color: "00C4FF" },
  { slug: "java", color: "E76F00" },
  { slug: "react", color: "61DAFB" },
  { slug: "flutter", color: "55CDFC" },
  { slug: "android", color: "3DDC84" },
  { slug: "html5", color: "E34F26" },
  { slug: "css3", color: "2965F1" },
  { slug: "tailwindcss", color: "38BDF8" },
  { slug: "nodedotjs", color: "5FA04E" },
  { slug: "express", color: "FF6F00" },
  { slug: "nextdotjs", color: "4ADEDE" },
  { slug: "prisma", color: "5A67D8" },
  { slug: "amazonaws", color: "FF9900" },
  { slug: "postgresql", color: "4169E1" },
  { slug: "firebase", color: "FFAA00" },
  { slug: "nginx", color: "009639" },
  { slug: "graphql", color: "E10098" },
  { slug: "testinglibrary", color: "FF5F45" },
  { slug: "jest", color: "99425B" },
  { slug: "cypress", color: "42B6F5" },
  { slug: "docker", color: "2496ED" },
  { slug: "git", color: "EE513B" },
  { slug: "jira", color: "2684FF" },
  { slug: "supabase", color: "3ECF8E" },
  { slug: "github", color: "8C8CF5" },
  { slug: "gitlab", color: "FC6D26" },
  { slug: "visualstudiocode", color: "007ACC" },
  { slug: "redis", color: "D92B21" },
  { slug: "sonarqube", color: "4E9BCD" },
  { slug: "figma", color: "F24E1E" },
  { slug: "azurefunctions", color: "2DABE8" },
];

export function IconCloudDemo() {
  const images = iconPalette.map(
    ({ slug, color }) => `https://cdn.simpleicons.org/${slug}/${color}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <div className="flex w-full scale-75 sm:scale-100">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
