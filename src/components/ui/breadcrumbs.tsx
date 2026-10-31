import { Link, useNavigate } from "@/lib/router-compat";
import Icon from "@/components/ui/icon";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  fullWidth?: boolean;
}

const Breadcrumbs = ({ items, fullWidth }: BreadcrumbsProps) => {
  const navigate = useNavigate();

  const bar = fullWidth
    ? "sticky top-[72px] md:top-[80px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    : "sticky top-[72px] md:top-[80px] z-40 -mx-4 px-4 mb-6 bg-white/95 backdrop-blur-sm border-b border-gray-100";
  const row = fullWidth
    ? "container mx-auto px-4 py-2.5 flex items-center justify-between gap-4"
    : "py-2.5 flex items-center justify-between gap-4";

  return (
    <div className={bar}>
    <div className={row}>
      <button
        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
      >
        <Icon name="ArrowLeft" size={16} />
        <span>Назад</span>
      </button>

      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground min-w-0">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5 min-w-0">
            {index > 0 && <Icon name="ChevronRight" size={14} className="flex-shrink-0" />}
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium truncate">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </div>
    </div>
  );
};

export default Breadcrumbs;
