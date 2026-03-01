import { useLanguage } from "@/i18n/LanguageContext";

const AnnouncementBar = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-primary text-center py-2.5 px-4">
      <p className="text-xs font-sans tracking-widest uppercase text-primary-foreground">
        {t("announcement")}
      </p>
    </div>
  );
};

export default AnnouncementBar;
