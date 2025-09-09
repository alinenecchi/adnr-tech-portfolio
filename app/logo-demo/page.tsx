import { Header, Footer, Title, Text, LogoShowcase } from "@/components";

export default function LogoDemoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Title
              level={1}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Logo ADNR Tech
            </Title>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
              Demonstração das variações e customizações do logo da ADNR Tech
            </Text>
          </div>
        </section>

        {/* Logo Showcase */}
        <LogoShowcase />

        {/* Usage Examples */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Title
                level={2}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Exemplos de Uso
              </Title>
              <Text className="text-lg text-gray-600">
                Como usar o componente AdnrTechLogo em diferentes contextos
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Title
                  level={3}
                  className="text-xl font-semibold text-gray-900 mb-4"
                >
                  Header/Navigation
                </Title>
                <div className="flex items-center space-x-3 p-4 bg-white rounded border">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-bold">A</span>
                  </div>
                  <span className="font-medium">Aline Rodrigues</span>
                </div>
                <Text className="text-sm text-gray-600 mt-4">
                  Use variant="minimal" com showText=false para headers
                  compactos
                </Text>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Title
                  level={3}
                  className="text-xl font-semibold text-gray-900 mb-4"
                >
                  Footer/Branding
                </Title>
                <div className="p-4 bg-white rounded border text-center">
                  <div className="w-24 h-12 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ADNR</span>
                  </div>
                  <Text className="text-xs text-gray-600">
                    © 2024 ADNR Tech
                  </Text>
                </div>
                <Text className="text-sm text-gray-600 mt-4">
                  Use variant="default" com showText=true para branding completo
                </Text>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
