import { Link, useNavigate } from "@/lib/router-compat";
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
    <div className="sticky top-[72px] md:top-[80px] z-40 -mx-4 px-4 py-2.5 mb-6 flex items-center justify-between gap-4 bg-white/95 backdrop-blur-sm border-b border-gray-100">
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
