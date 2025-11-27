import Icon from "@/components/ui/icon";

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/79656713170"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={24} />
      </a>
      
      <a
        href="https://t.me/+79656713170"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Написать в Telegram"
      >
        <Icon name="Send" size={24} />
      </a>
      
      <a
        href="https://max.app/dial?phone=79656713170"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#FF4D00] hover:bg-[#E64400] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Написать в МАХ"
      >
        <Icon name="MessageSquare" size={24} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;