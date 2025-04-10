import { titleFont } from "@/config/fonts";
import { cn } from "@/modules/common/utils";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

/* prettier-ignore */
export const Title = ({ children, ...props }: Props) => {
  return (
    <h1 {...props} className={cn("text-foreground text-2xl font-medium md:text-4xl", titleFont.className, props.className)}>
      {children}
    </h1>
  );
};
