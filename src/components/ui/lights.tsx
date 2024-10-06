import { cn } from "@/lib/utils";

export const Lights: React.FC<{ className?: React.ReactNode }> = ({
  className,
}) => (
  <div className={cn("w-full h-full overflow-hidden relative", className)}>
    <div
      className="w-full h-full absolute bottom-0"
      style={{
        background:
          "conic-gradient(from 180deg at 50% 50%, #C8102E 0deg, #FF5A00 120deg, #C8102E 240deg, #FFFFFF 360deg)",
        filter: "blur(75px)",
        opacity: "25%",
      }}
    />
    {/* Vignette effect */}
    <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
  </div>
);
