import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const AnalyticsShowcase: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'trends' | 'distribution' | 'pipeline'>('trends');
  const [recordCount, setRecordCount] = useState(18420);

  useEffect(() => {
    const timer = setInterval(() => {
      setRecordCount(prev => prev + Math.floor(Math.random() * 4) + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const kpis = [
    {
      label: language === 'uz' ? 'Qayta ishlangan qatorlar' : 'Data Rows Processed',
      value: recordCount.toLocaleString(),
      change: '+18.4%',
      desc: language === 'uz' ? 'Python & Pandas skriptlari orqali' : 'Via automated Python pipelines',
      icon: Database
    },
    {
      label: language === 'uz' ? 'Tahlil aniqligi' : 'Model & Analytics Accuracy',
      value: '99.2%',
      change: '+2.1%',
      desc: language === 'uz' ? 'Validatsiya va tozalash mezonlari' : 'Cleaned & validated datasets',
      icon: CheckCircle2
    },
    {
      label: language === 'uz' ? 'O‘rtacha so‘rov tezligi' : 'Average Query Response',
      value: '18ms',
      change: '-35%',
      desc: language === 'uz' ? 'PostgreSQL indekslangan so‘rovlar' : 'Optimized PostgreSQL queries',
      icon: Cpu
    },
    {
      label: language === 'uz' ? 'Amaliy hisobotlar' : 'Aggregated Reports',
      value: '100%',
      change: 'Amaliy',
      desc: language === 'uz' ? 'Excel Pivot & interaktiv diagrammalar' : 'Excel Pivot & clear summaries',
      icon: BarChart3
    }
  ];

  const trendPoints = [
    { month: 'Yan', val: 32, label: '3.2k' },
    { month: 'Fev', val: 48, label: '4.8k' },
    { month: 'Mar', val: 42, label: '4.2k' },
    { month: 'Apr', val: 68, label: '6.8k' },
    { month: 'May', val: 82, label: '8.2k' },
    { month: 'Iyun', val: 74, label: '7.4k' },
    { month: 'Iyul', val: 95, label: '9.5k' },
    { month: 'Avg', val: 88, label: '8.8k' },
    { month: 'Sen', val: 110, label: '11.0k' },
    { month: 'Okt', val: 125, label: '12.5k' },
  ];

  const categories = [
    { name: language === 'uz' ? 'Veb foydalanuvchilar oqimi' : 'Web Traffic & Engagement', share: '38%', count: '7,000+' },
    { name: language === 'uz' ? 'Klinika va qabullar (CareTrack)' : 'Clinical Records (CareTrack)', share: '32%', count: '5,900+' },
    { name: language === 'uz' ? 'O‘quv jarayoni tahlili (FocusAI)' : 'Study Workload (FocusAI)', share: '18%', count: '3,300+' },
    { name: language === 'uz' ? 'Telegram Bot xabarlari' : 'Telegram Bot API Events', share: '12%', count: '2,200+' },
  ];

  return (
    <section id="analytics" className="py-24 sm:py-32 bg-white border-t border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
              {language === 'uz' ? 'Tahlil & Metrikalar' : 'Analytics & Metrics'}
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-950 tracking-tight">
              {language === 'uz' ? 'Ma’lumotlar Tahlili' : 'Data Analytics'}
            </h2>
            <p className="text-zinc-500 text-sm max-w-lg">
              {language === 'uz' 
                ? 'Python, SQL, PostgreSQL va Excel yordamida ma’lumotlarni tahlil qilish va amaliy xulosalar.'
                : 'Data wrangling, exploratory data analysis, and relational query benchmarking.'}
            </p>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-zinc-200 shadow-2xs self-start md:self-end">
            <button
              onClick={() => setActiveTab('trends')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all ${
                activeTab === 'trends' ? 'bg-zinc-950 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              {language === 'uz' ? 'Oylik Dinamika' : 'Monthly Trend'}
            </button>
            <button
              onClick={() => setActiveTab('distribution')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all ${
                activeTab === 'distribution' ? 'bg-zinc-950 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              {language === 'uz' ? 'Taqsimot' : 'Distribution'}
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all ${
                activeTab === 'pipeline' ? 'bg-zinc-950 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              {language === 'uz' ? 'ETL Jarayoni' : 'ETL Workflow'}
            </button>
          </div>
        </div>

        {/* 4 Rich KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div 
                key={kpi.label}
                className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-sm hover:border-zinc-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {kpi.change}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mb-1">
                  {kpi.value}
                </div>
                <div className="text-xs font-semibold text-zinc-800 mb-0.5">
                  {kpi.label}
                </div>
                <div className="text-[11px] text-zinc-500 font-normal">
                  {kpi.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Main Data Visual Box */}
        <div className="rounded-3xl bg-white border border-zinc-200/90 shadow-md p-6 sm:p-8">
          
          {/* Box Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-zinc-950" />
              <div>
                <h3 className="font-sans font-bold text-base sm:text-lg text-zinc-950">
                  {activeTab === 'trends' && (language === 'uz' ? 'Ma’lumotlar Oqimi va Qayta Ishlash Hajmi' : 'Data Streaming & Throughput Volume')}
                  {activeTab === 'distribution' && (language === 'uz' ? 'Yo‘nalishlar Bo‘yicha Taqsimot' : 'Domain Workload Distribution')}
                  {activeTab === 'pipeline' && (language === 'uz' ? 'Python & SQL Avtomatlashtirilgan Konveyeri' : 'Automated Python & SQL ETL Architecture')}
                </h3>
                <p className="text-xs text-zinc-500 font-mono">
                  dataset: analytics_db.production • status: live
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-xs font-mono text-zinc-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Data Feed</span>
              </span>
            </div>
          </div>

          {/* TAB 1: Monthly Trends Interactive Chart */}
          {activeTab === 'trends' && (
            <div className="space-y-6">
              <div className="h-64 sm:h-72 w-full flex items-end justify-between gap-2 sm:gap-4 pt-8 px-2 sm:px-4">
                {trendPoints.map((item) => (
                  <div key={item.month} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <span className="text-[10px] font-mono font-medium text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.label}
                    </span>
                    <div 
                      className="w-full max-w-[36px] rounded-t-lg bg-zinc-900 group-hover:bg-black transition-all duration-300 relative"
                      style={{ height: `${(item.val / 130) * 100}%` }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-400 rounded-t-lg" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-600 mt-1">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-500">
                <span>Algoritm: Pandas resample(‘M’).sum()</span>
                <span className="text-zinc-900 font-semibold">O‘sish tendentsiyasi: +280% (Yil boshidan buyon)</span>
              </div>
            </div>
          )}

          {/* TAB 2: Domain Distribution */}
          {activeTab === 'distribution' && (
            <div className="space-y-5 py-2">
              {categories.map((cat, i) => (
                <div key={cat.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-zinc-900">{cat.name}</span>
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="text-zinc-500">{cat.count} yozuv</span>
                      <span className="font-bold text-zinc-950">{cat.share}</span>
                    </div>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-zinc-100 overflow-hidden">
                    <div 
                      className="h-full bg-zinc-950 rounded-full transition-all duration-700"
                      style={{ width: cat.share }}
                    />
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-500">
                Kategoriya agregatsiyasi: GROUP BY category_id ORDER BY total_records DESC
              </div>
            </div>
          )}

          {/* TAB 3: ETL Pipeline Workflow */}
          {activeTab === 'pipeline' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-zinc-900">
                  <span className="w-5 h-5 rounded-full bg-zinc-950 text-white flex items-center justify-center text-[10px]">1</span>
                  <span>Extract & Ingest</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Excel, CSV va REST API lardan ma’lumotlarni o‘qish, NaN va bo‘sh qiymatlarni aniqlash.
                </p>
                <div className="text-[10px] font-mono text-zinc-400 bg-white p-2 rounded-lg border border-zinc-200">
                  pd.read_csv() • api.fetch()
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-zinc-900">
                  <span className="w-5 h-5 rounded-full bg-zinc-950 text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Transform & Clean</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Tiplarni o‘girish, dublikatlarni tozalash, agregatsiya va tahliliy hisob-kitoblar.
                </p>
                <div className="text-[10px] font-mono text-zinc-400 bg-white p-2 rounded-lg border border-zinc-200">
                  df.drop_duplicates() • groupby()
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-zinc-900">
                  <span className="w-5 h-5 rounded-full bg-zinc-950 text-white flex items-center justify-center text-[10px]">3</span>
                  <span>Load & Dashboard</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  PostgreSQL relyatsion bazasiga yuklash va React UI orqali interaktiv vizuallashtirish.
                </p>
                <div className="text-[10px] font-mono text-zinc-400 bg-white p-2 rounded-lg border border-zinc-200">
                  psycopg2 • SQL queries • UI charts
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
