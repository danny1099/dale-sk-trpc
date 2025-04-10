import { cn } from "@/modules/common/utils";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export const Text = ({ children, ...props }: Props) => {
  return (
    <p {...props} className={cn("text-foreground text-xs", props.className)}>
      {children}
    </p>
  );
};
