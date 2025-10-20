'use client'

import { useState } from 'react'
import { 
  ShoppingBag, 
  Plus, 
  BarChart3, 
  Users, 
  Brain,
  Target,
  Layers,
  Crown,
  Sparkles,
  Play,
  ArrowRight,
  Rocket,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react'

export default function SelluxPlatform() {
  const [activeTab, setActiveTab] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const tabs = [
    { id: 'home', label: 'Início', icon: Sparkles },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'pro-hub', label: 'Sellux Pro Hub', icon: Crown },
    { id: 'create-product', label: 'Criar Produto', icon: Plus },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
    { id: 'ai-assistant', label: 'IA Assistant', icon: Brain },
    { id: 'ai-traffic', label: 'IA Tráfego', icon: Target },
    { id: 'builder', label: 'Construtor', icon: Layers },
    { id: 'affiliates', label: 'Afiliados', icon: Users }
  ]

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gray-50 text-gray-900'

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <header className={`backdrop-blur-sm border-b sticky top-0 z-50 ${
        darkMode 
          ? 'bg-gray-900/95 border-gray-800' 
          : 'bg-white/95 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                {/* Premium Logo */}
                <div className="relative">
                  <svg width="40" height="40" viewBox="0 0 100 100" className="drop-shadow-lg">
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                        <stop offset="50%" style={{stopColor:'#8b5cf6', stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'#ec4899', stopOpacity:1}} />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="45" fill="url(#logoGradient)"/>
                    <circle cx="50" cy="50" r="8" fill="#ffffff" opacity="0.9"/>
                    <circle cx="50" cy="50" r="4" fill="url(#logoGradient)"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Sellux
                  </h1>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    AI-Powered Platform
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {tabs.slice(0, 6).map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? tab.id === 'pro-hub'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : darkMode
                        ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{tab.label}</span>
                    {tab.id === 'pro-hub' && (
                      <Crown className="w-3 h-3 text-amber-300" />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden border-t ${
            darkMode 
              ? 'bg-gray-900 border-gray-800' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="px-4 py-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? tab.id === 'pro-hub'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : darkMode
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                    {tab.id === 'pro-hub' && (
                      <Crown className="w-4 h-4 text-amber-300" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Home Page */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-8 py-16">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">
                    Plataforma Completa de Vendas com IA
                  </span>
                </div>
                
                <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${
                  darkMode 
                    ? 'text-white' 
                    : 'text-gray-900'
                }`}>
                  Venda Mais com<br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Inteligência Artificial
                  </span>
                </h1>
                
                <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Crie produtos, gerencie afiliados, construa páginas e otimize seu tráfego 
                  com o poder da IA avançada. Tudo em uma plataforma premium.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Começar Agora</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('pro-hub')}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center space-x-2">
                    <Crown className="w-5 h-5" />
                    <span>Sellux Pro Hub</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Funcionalidades Completas com IA
                </h2>
                <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Tudo que você precisa para vender online com inteligência artificial avançada
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Plus,
                    title: "Criação de Produtos com IA",
                    description: "Crie produtos completos por voz ou texto com IA avançada",
                    gradient: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: ShoppingBag,
                    title: "Marketplace Inteligente",
                    description: "Encontre produtos para afiliar com recomendações de IA",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Brain,
                    title: "IA Marketing Premium",
                    description: "Assistente especializado com dados de 10M+ campanhas",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: Target,
                    title: "IA Tráfego Avançada",
                    description: "Otimize tráfego pago e orgânico com análise preditiva",
                    gradient: "from-orange-500 to-red-500"
                  },
                  {
                    icon: Layers,
                    title: "Construtor com IA",
                    description: "Crie páginas de venda otimizadas automaticamente",
                    gradient: "from-indigo-500 to-purple-500"
                  },
                  {
                    icon: Users,
                    title: "Gestão Inteligente de Afiliados",
                    description: "Sistema completo com automação e insights de IA",
                    gradient: "from-pink-500 to-rose-500"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/80' 
                        : 'bg-white/50 border-gray-200 hover:bg-white/80'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-8 py-16">
              <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Pronto para Revolucionar suas Vendas?
              </h2>
              <p className={`text-xl max-w-2xl mx-auto mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Junte-se a milhares de empreendedores que já estão vendendo mais com nossa IA avançada
              </p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center space-x-2">
                  <Rocket className="w-5 h-5" />
                  <span>Começar Gratuitamente</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div>
              <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                📊 Dashboard
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Visão geral do seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Receita Total', value: 'R$ 45.230', icon: BarChart3, color: 'from-green-500 to-emerald-500' },
                { title: 'Produtos', value: '12', icon: ShoppingBag, color: 'from-blue-500 to-cyan-500' },
                { title: 'Vendas', value: '234', icon: Target, color: 'from-purple-500 to-pink-500' },
                { title: 'Afiliados', value: '89', icon: Users, color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl backdrop-blur-sm border ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700' 
                      : 'bg-white/50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.title}
                      </p>
                      <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-8 rounded-xl backdrop-blur-sm border text-center ${
              darkMode 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                🚀 Bem-vindo ao Sellux!
              </h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Sua plataforma de vendas com IA está pronta. Explore as funcionalidades usando o menu acima.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setActiveTab('create-product')}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Criar Primeiro Produto
                </button>
                <button 
                  onClick={() => setActiveTab('ai-assistant')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Falar com IA
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs content */}
        {activeTab !== 'home' && activeTab !== 'dashboard' && (
          <div className="space-y-8">
            <div className="text-center py-16">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                🚧 Em Desenvolvimento
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Esta funcionalidade está sendo desenvolvida. Em breve estará disponível!
              </p>
              <button 
                onClick={() => setActiveTab('home')}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Voltar ao Início
              </button>
            </div>
          </div>
        )}
        
      </main>
    </div>
  )
}