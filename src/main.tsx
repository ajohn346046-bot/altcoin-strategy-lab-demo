import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Gauge,
  Github,
  LayoutDashboard,
  LineChart,
  Lock,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  WalletCards,
} from 'lucide-react';
import './styles.css';

const contactEmail = 'ajohn346046@gmail.com';
const purchaseStatus = 'Contact for Early Access';
const liveDemoUrl = 'https://ajohn346046-bot.github.io/altcoin-strategy-lab-demo/';
const englishDisclaimer =
  'Educational and analytical use only. Not financial advice. No profit guarantee. No wallet connection. No private keys. No exchange login.';
const chineseDisclaimer =
  '本工具僅供教育與分析用途，不構成財務建議，不保證獲利，不連接錢包，不要求私鑰，不需要交易所登入。';
const chineseSummary =
  '本頁為 Altcoin Strategy Lab Pro 的公開展示頁，不包含完整商業原始碼。Pro 版本提供完整 React + TypeScript 原始碼、投資組合輸入、風險分析、策略規劃、技術指標預覽、交易日誌與報告模組。此工具僅供教育與分析用途，不構成財務建議。';

const features = [
  'Portfolio analytics preview for DOGE, ADA, XRP, POL, BTC, BCH, and custom altcoins.',
  'USD/TWD public display concept for portfolio value, cost basis, and scenario zones.',
  'Risk-aware dashboard preview with allocation, P/L, concentration, and cash reserve summaries.',
  'Educational technical-analysis preview for trend, momentum, volatility, support, and resistance.',
  'Staged buy/sell planning preview without exposing commercial strategy internals.',
  'Governance-first safety language: no wallet connection, no exchange login, no private keys.',
];

const proItems = [
  'Complete React + TypeScript source code',
  'Reusable component system and advanced dashboard internals',
  'Full scenario and decision-support engines',
  'Technical indicator implementation and data adapters',
  'Trade journal, risk report, and narrative scoring logic',
  'Commercial customization rights under the purchased license',
];

const screenshots = [
  {
    title: 'Portfolio Overview',
    label: 'Demo screenshot mock',
    accent: 'bg-teal',
    lines: ['Total value preview', 'P/L summary', 'Risk distribution', 'Cash reserve ratio'],
  },
  {
    title: 'Coin Analysis',
    label: 'Demo screenshot mock',
    accent: 'bg-amber',
    lines: ['Price trend preview', 'RSI / MACD modules', 'Support and resistance', 'Scenario zones'],
  },
  {
    title: 'Strategy Planner',
    label: 'Demo screenshot mock',
    accent: 'bg-ink',
    lines: ['Accumulation zones', 'Breakout zones', 'Partial sell zones', 'Risk-reduction plan'],
  },
];

function ScreenshotMock({ screenshot }: { screenshot: (typeof screenshots)[number] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-glow">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{screenshot.label}</span>
      </div>
      <div className="p-5">
        <div className={`mb-5 h-24 rounded-lg ${screenshot.accent} bg-opacity-90 p-4 text-white`}>
          <p className="text-sm text-white/75">{screenshot.title}</p>
          <p className="mt-2 text-3xl font-semibold">Public Preview</p>
        </div>
        <div className="space-y-3">
          {screenshot.lines.map((line, index) => (
            <div key={line} className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-mint text-xs font-bold text-teal">
                {index + 1}
              </span>
              <span className="h-3 flex-1 rounded-full bg-slate-100">
                <span className="block h-3 rounded-full bg-slate-300" style={{ width: `${72 - index * 10}%` }} />
              </span>
              <span className="w-36 text-sm font-medium text-slate-600">{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal text-white">
              <BarChart3 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Public Demo</p>
              <h1 className="text-lg font-semibold">Altcoin Strategy Lab</h1>
            </div>
          </div>
          <a
            href={`mailto:${contactEmail}?subject=Altcoin%20Strategy%20Lab%20Pro`}
            className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 sm:flex"
          >
            <ShoppingCart size={17} />
            {purchaseStatus}
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0 demo-grid opacity-30" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-mint">
                <Sparkles size={16} />
                Public sales preview. Full commercial Pro source code is not included in this public demo.
              </div>
              <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                A public preview for a commercial crypto portfolio decision-support dashboard.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                This repository is a deployable showcase for Altcoin Strategy Lab. It presents the product concept,
                buyer value, screenshots, disclaimers, and purchase call-to-action without exposing the full commercial source.
              </p>
              <p className="mt-5 max-w-2xl rounded-lg border border-white/15 bg-white/10 p-4 text-sm leading-7 text-slate-200">
                {chineseSummary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${contactEmail}?subject=Altcoin%20Strategy%20Lab%20Pro`}
                  className="inline-flex items-center gap-2 rounded-lg bg-mint px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  {purchaseStatus}
                  <ArrowRight size={17} />
                </a>
                <a
                  href={liveDemoUrl}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Github size={17} />
                  Contact for Early Access
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['No wallet connection', WalletCards],
                  ['No exchange login', Lock],
                  ['No API secrets', ShieldCheck],
                  ['No real records', FileText],
                ].map(([label, Icon]) => {
                  const DisplayIcon = Icon as typeof WalletCards;
                  return (
                    <div key={label as string} className="rounded-lg border border-white/15 bg-white/10 p-4">
                      <DisplayIcon className="text-mint" size={24} />
                      <p className="mt-3 text-sm font-semibold">{label as string}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12">
          <div className="rounded-lg border border-amber-300 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 shrink-0 text-amber" />
              <div>
                <h2 className="text-xl font-semibold">Strong Disclaimer</h2>
                <p className="mt-2 leading-7 text-slate-700">
                  {englishDisclaimer}
                </p>
                <p className="mt-2 leading-7 text-slate-700">
                  {chineseDisclaimer}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Full commercial Pro source code is not included in this public demo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10" id="features">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Features</p>
              <h2 className="mt-2 text-3xl font-semibold">What this public demo shows</h2>
            </div>
            <Gauge className="hidden text-teal md:block" size={42} />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="text-teal" size={22} />
                <p className="mt-3 text-sm leading-6 text-slate-700">{feature}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10" id="live-demo">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Live demo</p>
            <h2 className="mt-2 text-3xl font-semibold">Deployable to GitHub Pages</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Replace the placeholder below with your actual GitHub Pages URL after deployment.
            </p>
            <a href={liveDemoUrl} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white">
              {liveDemoUrl}
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10" id="screenshots">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Screenshots</p>
          <h2 className="mt-2 text-3xl font-semibold">Public preview screens</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {screenshots.map((screenshot) => (
              <ScreenshotMock key={screenshot.title} screenshot={screenshot} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10" id="pro">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">What buyers get in Pro version</p>
              <h2 className="mt-2 text-3xl font-semibold">Commercial package contents</h2>
              <p className="mt-3 leading-7 text-slate-600">
                The public demo intentionally omits commercial-only strategy logic, advanced source internals, and reusable templates.
              </p>
            </div>
            <div className="grid gap-3">
              {proItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <LineChart className="text-teal" size={20} />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10" id="license">
          <div className="rounded-lg bg-ink p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">License summary</p>
            <h2 className="mt-2 text-3xl font-semibold">Public demo license boundary</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-300">
              This public repository is a demo and marketing preview only. It is not the full commercial source code.
              Redistribution, resale, extraction of product internals, or claiming this demo as a complete trading system
              is not permitted without a separate written license. The Pro package is sold separately.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12" id="purchase">
          <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Purchase status</p>
            <h2 className="mt-3 text-3xl font-semibold">Altcoin Strategy Lab Pro is coming soon.</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
              Altcoin Strategy Lab Pro source package is being prepared for early buyers. For early access, licensing
              questions, or bundle pricing, contact {contactEmail}.
            </p>
            <a
              href={`mailto:${contactEmail}?subject=Altcoin%20Strategy%20Lab%20Pro`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <ShoppingCart size={18} />
              {purchaseStatus}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Altcoin Strategy Lab Demo. Public preview only. Full commercial Pro source code is not included.</p>
          <p>{englishDisclaimer}</p>
          <p>{chineseDisclaimer}</p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
