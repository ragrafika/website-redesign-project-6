import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
      >
        <Icon name="ArrowLeft" size={16} />
        <span>Назад</span>
      </button>

      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground overflow-hidden">
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
  );
};

export default Breadcrumbs;
