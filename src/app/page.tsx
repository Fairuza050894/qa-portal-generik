"use client";
import { useEffect, useState } from 'react';

export default function EnterpriseDashboard() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  // Logika Sistem Tema Dinamis
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Simulasi Loading Initial
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#fafafa] flex flex-col items-center justify-center font-mono text-sm">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        INITIALIZING OBSERVABILITY KERNEL...
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#fafafa] font-sans overflow-hidden selection:bg-blue-500/30 transition-colors duration-200">
      
      {/* Sidebar */}
      <aside className="w-16 border-r border-slate-200 dark:border-[#27272a] bg-white dark:bg-[#09090b] flex flex-col items-center py-4 z-20 flex-shrink-0 transition-colors duration-200">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center justify-center font-bold text-white mb-8">
          P
        </div>
        <nav className="flex flex-col gap-6 text-slate-400 dark:text-[#a1a1aa]">
          <button className="text-slate-900 dark:text-white transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></button>
          <button className="hover:text-slate-900 dark:hover:text-white transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></button>
          <button className="hover:text-slate-900 dark:hover:text-white transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>
        </nav>
      </aside>

      {/* Main App Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Header */}
        <header className="h-14 border-b border-slate-200 dark:border-[#27272a] flex items-center justify-between px-6 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-sm z-10 flex-shrink-0 transition-colors duration-200">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-500 dark:text-[#a1a1aa] font-medium">
              <span>Pancaran Group</span>
              <span className="text-slate-300 dark:text-[#3f3f46]">/</span>
              <span className="text-slate-900 dark:text-[#fafafa] flex items-center gap-2 bg-slate-100 dark:bg-[#27272a] px-2 py-1 rounded">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                QA Observability
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* THEME SWITCHER */}
            <div className="flex bg-slate-100 dark:bg-[#18181b] border border-slate-200 dark:border-[#27272a] rounded overflow-hidden p-0.5">
              {(['light', 'dark', 'system'] as const).map((t) => (
                <button 
                  key={t}
                  onClick={() => setTheme(t)} 
                  className={`px-3 py-1 text-xs font-medium rounded transition-all capitalize ${theme === t ? 'bg-white dark:bg-[#27272a] text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-[#a1a1aa] hover:text-slate-900 dark:hover:text-white'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-slate-200 dark:bg-[#27272a]"></div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-1.5 rounded transition-colors shadow-sm">
              Run Pipeline
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto p-6 bg-slate-50 dark:bg-[#000000] transition-colors duration-200">
          <div className="max-w-[1600px] mx-auto">
            
            {/* Core Vitals */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-slate-200 dark:bg-[#27272a] border border-slate-200 dark:border-[#27272a] rounded-md overflow-hidden mb-6">
              <div className="bg-white dark:bg-[#09090b] p-4 flex flex-col justify-between">
                <span className="text-[10px] text-slate-500 dark:text-[#a1a1aa] uppercase tracking-widest font-bold">Total Executions</span>
                <div className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">4,821 <span className="text-xs text-emerald-600 dark:text-emerald-500 font-normal ml-1">↑ 12%</span></div>
              </div>
              <div className="bg-white dark:bg-[#09090b] p-4 flex flex-col justify-between">
                <span className="text-[10px] text-slate-500 dark:text-[#a1a1aa] uppercase tracking-widest font-bold">Global Pass Rate</span>
                <div className="mt-2 text-2xl font-semibold text-emerald-600 dark:text-emerald-500 tracking-tight">98.2% <span className="text-xs text-slate-400 dark:text-[#71717a] font-normal ml-1">avg</span></div>
              </div>
              <div className="bg-white dark:bg-[#09090b] p-4 flex flex-col justify-between">
                <span className="text-[10px] text-slate-500 dark:text-[#a1a1aa] uppercase tracking-widest font-bold">P95 Latency</span>
                <div className="mt-2 text-2xl font-semibold text-amber-600 dark:text-amber-500 tracking-tight">1.24s <span className="text-xs text-slate-400 dark:text-[#71717a] font-normal ml-1">/ 1.5s SLA</span></div>
              </div>
              <div className="bg-white dark:bg-[#09090b] p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-16 h-16 bg-rose-500/10 blur-xl rounded-full"></div>
                <span className="text-[10px] text-rose-600 dark:text-rose-400 uppercase tracking-widest font-bold">Active Incidents</span>
                <div className="mt-2 text-2xl font-semibold text-rose-600 dark:text-rose-500 tracking-tight">3</div>
              </div>
              <div className="bg-white dark:bg-[#09090b] p-4 flex flex-col justify-between">
                <span className="text-[10px] text-slate-500 dark:text-[#a1a1aa] uppercase tracking-widest font-bold">Test Coverage</span>
                <div className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">84.5%</div>
              </div>
            </div>

            {/* High Density Data Grid */}
            <div className="border border-slate-200 dark:border-[#27272a] bg-white dark:bg-[#09090b] rounded-md shadow-sm dark:shadow-2xl overflow-hidden transition-colors duration-200">
              <div className="px-4 py-3 border-b border-slate-200 dark:border-[#27272a] flex justify-between items-center bg-white dark:bg-[#09090b]">
                <div className="flex items-center gap-3">
                  <h3 className="text-xs font-bold text-slate-800 dark:text-[#e4e4e7] uppercase tracking-wider">Trace & Execution Logs</h3>
                  <span className="text-[10px] bg-slate-100 dark:bg-[#27272a] text-slate-500 dark:text-[#a1a1aa] px-2 py-0.5 rounded font-mono border border-slate-200 dark:border-transparent">14,204 records</span>
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="Filter traces (e.g., status:failed)" className="bg-slate-50 dark:bg-[#18181b] border border-slate-200 dark:border-[#27272a] rounded text-xs px-3 py-1.5 text-slate-900 dark:text-white w-64 focus:outline-none focus:border-blue-500 placeholder-slate-400 dark:placeholder-[#71717a]" />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-[#a1a1aa] bg-slate-50 dark:bg-[#18181b] border-b border-slate-200 dark:border-[#27272a]">
                      <th className="px-4 py-2 font-semibold">Status</th>
                      <th className="px-4 py-2 font-semibold">Commit / Branch</th>
                      <th className="px-4 py-2 font-semibold">Test Scenario</th>
                      <th className="px-4 py-2 font-semibold">Latency</th>
                      <th className="px-4 py-2 font-semibold">Engine</th>
                      <th className="px-4 py-2 font-semibold text-right">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-mono">
                    <tr className="border-b border-slate-100 dark:border-[#27272a]/50 hover:bg-slate-50 dark:hover:bg-[#18181b] transition-colors group">
                      <td className="px-4 py-2.5">
                        <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-sans font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Failed
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-slate-700 dark:text-[#e4e4e7]"><span className="text-slate-400 dark:text-[#71717a]">feat/</span>auth-flow <span className="text-slate-400 dark:text-[#a1a1aa] ml-1">#a7f92b</span></td>
                      <td className="px-4 py-2.5 text-slate-900 dark:text-white font-sans font-medium truncate max-w-xs">E2E: Validate Session Expiry behavior</td>
                      <td className="px-4 py-2.5 text-slate-700 dark:text-[#e4e4e7]">12.4s</td>
                      <td className="px-4 py-2.5">
                        <span className="bg-slate-100 dark:bg-[#27272a] text-slate-500 dark:text-[#a1a1aa] px-1.5 py-0.5 rounded text-[10px] border border-slate-200 dark:border-transparent">Playwright</span>
                      </td>
                      <td className="px-4 py-2.5 text-right text-slate-400 dark:text-[#71717a]">Just now</td>
                    </tr>
                    
                    <tr className="border-b border-slate-100 dark:border-[#27272a]/50 hover:bg-slate-50 dark:hover:bg-[#18181b] transition-colors group">
                      <td className="px-4 py-2.5">
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-sans font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Passed
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-slate-700 dark:text-[#e4e4e7]"><span className="text-slate-400 dark:text-[#71717a]">main</span> <span className="text-slate-400 dark:text-[#a1a1aa] ml-1">#c109d4</span></td>
                      <td className="px-4 py-2.5 text-slate-500 dark:text-[#a1a1aa] font-sans truncate max-w-xs">API: POST /v1/logistics/dispatch</td>
                      <td className="px-4 py-2.5 text-slate-700 dark:text-[#e4e4e7]">145ms</td>
                      <td className="px-4 py-2.5">
                        <span className="bg-slate-100 dark:bg-[#27272a] text-slate-500 dark:text-[#a1a1aa] px-1.5 py-0.5 rounded text-[10px] border border-slate-200 dark:border-transparent">k6 / WSO2</span>
                      </td>
                      <td className="px-4 py-2.5 text-right text-slate-400 dark:text-[#71717a]">2 min ago</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
