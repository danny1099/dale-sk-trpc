import { cn } from "@/modules/common/utils";

type Props = React.HTMLAttributes<HTMLHeadingElement>;

export const Text = ({ children, ...props }: Props) => {
  return (
    <p {...props} className={cn("text-xs text-foreground-muted", props.className)}>
      {children}
    </p>
  );
};
