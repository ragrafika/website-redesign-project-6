import React from 'react';
import Icon from '@/components/ui/icon';

interface OptionCardProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: string;
  description?: string;
}

export const OptionCard = ({ selected, onClick, children, icon, description }: OptionCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none group ${
      selected
        ? 'border-primary bg-primary/5 shadow-md'
        : 'border-border bg-white hover:border-primary/40 hover:shadow-sm'
    }`}
  >
    <div className="flex items-start gap-3">
      {icon && (
        <span className="flex-shrink-0 mt-0.5 text-primary">
          <Icon name={icon} size={22} />
        </span>
      )}
      <div className="flex-1 min-w-0">
        <div className={`font-semibold text-sm sm:text-base leading-snug ${selected ? 'text-primary' : 'text-foreground'}`}>
          {children}
        </div>
        {description && (
          <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</div>
        )}
      </div>
      <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 mt-0.5 transition-all ${
        selected ? 'border-primary bg-primary' : 'border-border group-hover:border-primary/40'
      }`}>
        {selected && (
          <svg viewBox="0 0 20 20" fill="white" className="w-full h-full p-0.5">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </div>
  </button>
);

interface StepHeaderProps {
  stepNum: number;
  totalSteps: number;
  question: string;
  hint?: string;
}

export const StepHeader = ({ stepNum, totalSteps, question, hint }: StepHeaderProps) => (
  <div className="mb-6">
    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
      Шаг {stepNum} из {totalSteps}
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">{question}</h3>
    {hint && <p className="text-sm text-muted-foreground mt-1">{hint}</p>}
  </div>
);