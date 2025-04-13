import { getTranslations } from "next-intl/server";
import { Title, Text } from "@/modules/common/components";
import { api } from "@/trpc/server";

export default async function Home() {
  const t = await getTranslations("init");
  const apiServices = await api.health();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background">
      <Title>{t("title")}</Title>
      <Text>{t("description")}</Text>

      <span className="text-xs font-bold italic text-accent-foreground">TRPC Check: {apiServices}</span>
    </section>
  );
}
