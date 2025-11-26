import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StandPreviewCardProps {
  standWidth: string;
  standHeight: string;
  standHeaderText: string;
  standFontFamily: string;
  standBgColor: string;
  standImage: string;
  imagePosition: string;
  pocketsA5: string;
  pocketsA4: string;
  pocketsA3: string;
  pocketsA2: string;
}

const StandPreviewCard = ({
  standWidth,
  standHeight,
  standHeaderText,
  standFontFamily,
  standBgColor,
  standImage,
  imagePosition,
  pocketsA5,
  pocketsA4,
  pocketsA3,
  pocketsA2,
}: StandPreviewCardProps) => {
  const pocketSizes: Record<string, { width: number; height: number }> = {
    a5: { width: 14.8, height: 21 },
    a4: { width: 21, height: 29.7 },
    a3: { width: 29.7, height: 42 },
    a2: { width: 42, height: 59.4 }
  };

  const fontFamilyMap: Record<string, string> = {
    'sans-serif': 'Arial, sans-serif',
    'serif': 'Georgia, serif',
    'monospace': 'Courier New, monospace'
  };

  const bgColorMap: Record<string, string> = {
    white: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
    blue: 'linear-gradient(to bottom right, #dbeafe, #93c5fd)',
    green: 'linear-gradient(to bottom right, #d1fae5, #6ee7b7)',
    yellow: 'linear-gradient(to bottom right, #fef3c7, #fcd34d)',
    red: 'linear-gradient(to bottom right, #fee2e2, #fca5a5)',
    gray: 'linear-gradient(to bottom right, #e5e7eb, #9ca3af)',
    beige: 'linear-gradient(to bottom right, #fef3c7, #fde68a)'
  };

  const renderPreview = () => {
    const width = parseFloat(standWidth) || 0;
    const height = parseFloat(standHeight) || 0;

    if (!width || !height) {
      return (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Введите размеры для предпросмотра
        </div>
      );
    }

    const maxWidth = 400;
    const maxHeight = 500;
    const aspectRatio = width / height;
    
    let previewWidth = maxWidth;
    let previewHeight = maxWidth / aspectRatio;
    
    if (previewHeight > maxHeight) {
      previewHeight = maxHeight;
      previewWidth = maxHeight * aspectRatio;
    }

    const scale = previewWidth / width;
    const allPockets: Array<{ size: string; width: number; height: number }> = [];
    
    const pocketCounts = {
      a5: parseInt(pocketsA5) || 0,
      a4: parseInt(pocketsA4) || 0,
      a3: parseInt(pocketsA3) || 0,
      a2: parseInt(pocketsA2) || 0
    };

    Object.entries(pocketCounts).forEach(([size, count]) => {
      for (let i = 0; i < count; i++) {
        allPockets.push({
          size,
          width: pocketSizes[size].width,
          height: pocketSizes[size].height
        });
      }
    });

    const baseFontSize = Math.min(previewWidth / 10, previewHeight / 8);

    const imagePositionStyles: Record<string, React.CSSProperties> = {
      center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
      'top-center': { top: '25%', left: '50%', transform: 'translate(-50%, -50%)' },
      'bottom-center': { bottom: '15%', left: '50%', transform: 'translateX(-50%)' },
      'top-left': { top: '25%', left: '15%' },
      'top-right': { top: '25%', right: '15%' },
      'bottom-left': { bottom: '15%', left: '15%' },
      'bottom-right': { bottom: '15%', right: '15%' }
    };

    return (
      <div 
        className="border-4 border-primary/20 shadow-lg relative overflow-hidden"
        style={{ 
          width: `${previewWidth}px`, 
          height: `${previewHeight}px`,
          margin: '0 auto',
          background: bgColorMap[standBgColor]
        }}
      >
        <div 
          className="absolute top-0 left-0 right-0 flex items-center justify-center text-secondary font-bold px-4"
        >
          <div
            style={{ 
              fontSize: `${baseFontSize}px`,
              fontFamily: fontFamilyMap[standFontFamily],
              padding: `${previewHeight * 0.05}px`,
              textAlign: 'center'
            }}
          >
            {standHeaderText || 'ИНФОРМАЦИЯ'}
          </div>
        </div>

        {standImage && (
          <div
            className="absolute"
            style={{
              ...imagePositionStyles[imagePosition],
              maxWidth: '60%',
              maxHeight: '40%',
              zIndex: 1
            }}
          >
            <img
              src={standImage}
              alt="Загруженное изображение"
              className="max-w-full max-h-full object-contain rounded shadow-md"
            />
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap justify-center items-end gap-2">
          {allPockets.map((pocket, index) => {
            const pocketWidth = pocket.width * scale;
            const pocketHeight = pocket.height * scale;
            
            return (
              <div
                key={index}
                className="border-2 border-primary/40 bg-white/60 flex items-center justify-center text-xs font-medium text-muted-foreground"
                style={{
                  width: `${pocketWidth}px`,
                  height: `${pocketHeight}px`,
                  minWidth: '30px',
                  minHeight: '40px'
                }}
              >
                {pocket.size.toUpperCase()}
              </div>
            );
          })}
        </div>

        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-medium text-muted-foreground">
          {width}×{height} см
        </div>
      </div>
    );
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-secondary">Визуализация</CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-center min-h-[300px] md:min-h-[500px]">
          {renderPreview()}
        </div>
      </CardContent>
    </Card>
  );
};

export default StandPreviewCard;
