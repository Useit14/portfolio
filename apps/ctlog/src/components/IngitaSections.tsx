import { useTranslation } from "react-i18next";

export const IngitaSections = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center">
        <a
          href="mailto:mail@ctlog.ru"
          className=" border border-white text-white uppercase font-bold tracking-[1px] text-center pt-[25px] pb-[25px] pr-[40px] pl-[40px] hover:text-[#3dc9b3]"
        >
          {t("ignitaSection1")} <br /> {t("ignitaSection2")}
        </a>
      </div>
    </>
  );
};
