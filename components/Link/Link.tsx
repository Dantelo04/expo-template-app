import { Link as RNLink, LinkProps as RNLinkProps } from "expo-router"
import { Text } from "../Text/Text"
import { useTheme } from "@/context/ThemeContext"
import { linkStyles } from "./Link.style"

interface LinkProps extends RNLinkProps {
  children: React.ReactNode;
}

export const Link = ({ children, ...props }: LinkProps) => {
  const {theme} = useTheme();
  const styles = linkStyles(theme);

  return (
    <RNLink {...props} asChild>
      <Text style={styles.link}>{children}</Text>
    </RNLink>
  )
}