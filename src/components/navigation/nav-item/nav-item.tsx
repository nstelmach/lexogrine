import styles from "./nav-item.module.css";
import Typography from "@/components/typography/typography";

interface NavItemProps {
  title: string;
  active?: boolean;
}

export default function NavItem({ title, active }: NavItemProps) {
  return (
    <div
    // initial={{ rotate: 0 }}
    // whileHover={{ rotate: 360 }}
    // transition={{ duration: 0.5 }}
    >
      <Typography
        as="p"
        className={`${styles.title} ${active && styles.active}`}
        variant="base"
      >
        {title}
      </Typography>
    </div>
  );
}
