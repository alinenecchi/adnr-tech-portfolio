import React from "react";
import { LogoShowcaseProps } from "./LogoShowcase.types";
import { getLogoShowcaseStyles } from "./LogoShowcase.styles";
import { AdnrTechLogo } from "@/components/icons";
import { Title } from "@/components";
import { cn } from "@/lib/utils";

export const LogoShowcase: React.FC<LogoShowcaseProps> = ({ className }) => {
  const styles = getLogoShowcaseStyles();

  const logoVariants = [
    {
      title: "Logo Completo",
      description: "Versão completa com texto",
      component: (
        <AdnrTechLogo
          width={200}
          height={100}
          variant="default"
          showText={true}
        />
      ),
    },
    {
      title: "Logo Minimal",
      description: "Versão minimalista sem texto",
      component: (
        <AdnrTechLogo
          width={120}
          height={120}
          variant="minimal"
          showText={false}
        />
      ),
    },
    {
      title: "Circuito Apenas",
      description: "Apenas o elemento do circuito",
      component: (
        <AdnrTechLogo
          width={150}
          height={100}
          variant="circuit-only"
          showText={false}
        />
      ),
    },
    {
      title: "Cores Customizadas",
      description: "Com cores personalizadas",
      component: (
        <AdnrTechLogo
          width={200}
          height={100}
          variant="default"
          showText={true}
          primaryColor="#8B5CF6"
          secondaryColor="#EC4899"
          textColor="#1F2937"
        />
      ),
    },
    {
      title: "Tema Escuro",
      description: "Adaptado para tema escuro",
      component: (
        <AdnrTechLogo
          width={200}
          height={100}
          variant="default"
          showText={true}
          primaryColor="#00AFFF"
          secondaryColor="#8B5CF6"
          textColor="#F5F5F5"
        />
      ),
    },
    {
      title: "Tamanho Pequeno",
      description: "Versão compacta para headers",
      component: (
        <AdnrTechLogo
          width={60}
          height={30}
          variant="minimal"
          showText={false}
        />
      ),
    },
  ];

  return (
    <section className={cn(styles.container, className)}>
      <div className={styles.content}>
        <Title level={2} className={styles.title}>
          Variações do Logo ADNR Tech
        </Title>

        <div className={styles.grid}>
          {logoVariants.map((variant) => (
            <div key={variant.title} className={styles.card}>
              <Title level={3} className={styles.cardTitle}>
                {variant.title}
              </Title>
              <div className={styles.logoContainer}>{variant.component}</div>
              <p className={styles.description}>{variant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
