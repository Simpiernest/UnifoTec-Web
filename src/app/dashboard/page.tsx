"use client";

import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Layers,
  Building2,
  Users,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Server,
  Activity,
  LogOut,
  FolderGit2,
  Globe,
  Edit,
  Trash2,
  Plus,
  Save,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { fetchHero, updateHero, fetchServices, addService, updateService, deleteService } from "@/lib/api";

const MDiv = motion.div;

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [heroData, setHeroData] = useState({ title: "", subtitle: "" });
  const [services, setServices] = useState<any[]>([]);
  const [team, setTeam] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchHero(), fetchServices(), fetchTeam()])
      .then(([hero, svcs, tm]) => {
        setHeroData(hero);
        setServices(svcs);
        setTeam(tm);
      })
      .catch(err => console.error("Error loading dashboard data", err))
      .finally(() => setIsLoading(false));
  }, []);

  const handleHeroUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateHero(heroData);
      alert("Hero content updated successfully!");
    } catch (err) {
      alert("Failed to update hero content");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteService = async (id: number) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    try {
      await deleteService(id);
      setServices(services.filter(s => s.id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const sidebarLinks = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Services", icon: Layers },
    { name: "Team", icon: Users },
    { name: "Settings", icon: Settings },
  ];

  const stats = [
    { title: "Total Core Projects", value: "128", change: "+14% MoM", positive: true, icon: FolderGit2, bg: "bg-blue-50 text-primary" },
    { title: "Active Server Nodes", value: "6 / 6", change: "99.98% SLA", positive: true, icon: Server, bg: "bg-emerald-50 text-accent" },
    { title: "Client Lead Requests", value: "1,412", change: "+24% Week", positive: true, icon: Users, bg: "bg-amber-50 text-amber-500" },
    { title: "Global Traffic Hub", value: "84.2K", change: "-2.4% Day", positive: false, icon: Globe, bg: "bg-rose-50 text-rose-500" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans text-dark antialiased">
      {/* Sidebar Widget */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between shrink-0 shadow-xl border-r border-slate-800">
        <div>
          <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white italic shadow-lg shadow-primary/20 overflow-hidden">
              <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-extrabold text-white text-sm tracking-wider uppercase block">UNIFOTEC</span>
              <span className="text-[10px] text-grey font-bold tracking-widest uppercase">Admin Node</span>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.name;
              return (
                <button
                  key={link.name}
                  onClick={() => setActiveTab(link.name)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-left ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <Link
            href="/"
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-rose-400 hover:bg-rose-500/10 transition-all"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            <span>Exit Hub</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Dashboard Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200/80 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4 w-96">
            <Search className="w-4 h-4 text-grey shrink-0" />
            <input
              type="text"
              placeholder="Search administration node buffers..."
              className="w-full bg-slate-50 text-xs font-medium rounded-lg px-3 py-2 focus:outline-none border border-transparent focus:border-gray-200 transition-all placeholder:text-grey/50"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-grey relative transition-all">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 bg-primary rounded-full absolute top-1.5 right-1.5 border-2 border-white animate-pulse"></span>
            </button>
            <div className="border-l border-gray-200 h-6"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-inner">
                JW
              </div>
              <span className="text-xs font-bold text-dark hidden sm:inline-block">Jane Wanjiku</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-8">
            <div>
              <h1 className="text-2xl font-black text-dark tracking-tight">{activeTab} Ecosystem</h1>
              <p className="text-grey text-xs font-medium">Realtime operational statistics for UNIFOTEC-WEB master server array.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 flex items-center space-x-2 text-xs font-bold text-dark shadow-sm">
              <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span>Status: Cluster Connected</span>
            </div>
          </div>

          {isLoading ? (
            <div className="h-64 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {activeTab === "Dashboard" && (
                <MDiv key="dash" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
                          <div>
                            <span className="text-xs text-grey font-bold uppercase tracking-wider block mb-1">{stat.title}</span>
                            <span className="text-2xl font-black text-dark tracking-tight block mb-2">{stat.value}</span>
                            <div className="flex items-center space-x-1 text-[11px] font-bold">
                              {stat.positive ? <ArrowUpRight className="w-3.5 h-3.5 text-accent" /> : <ArrowDownRight className="w-3.5 h-3.5 text-rose-500" />}
                              <span className={stat.positive ? "text-accent" : "text-rose-500"}>{stat.change}</span>
                            </div>
                          </div>
                          <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center shrink-0`}>
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </MDiv>
              )}

              {activeTab === "Services" && (
                <MDiv key="svcs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg text-dark">Live Service Nodes</h3>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary-dark transition-all">
                      <Plus className="w-4 h-4" /> Add Node
                    </button>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 border-b border-gray-100 text-grey font-bold uppercase tracking-wider">
                        <tr>
                          <th className="p-4">Service Title</th>
                          <th className="p-4">Category</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {services.map((svc) => (
                          <tr key={svc.id} className="hover:bg-slate-50/50 transition-all">
                            <td className="p-4 font-bold text-dark">{svc.title}</td>
                            <td className="p-4"><span className="px-2 py-0.5 bg-blue-50 text-primary rounded-md font-bold">{svc.category}</span></td>
                            <td className="p-4 text-accent font-bold uppercase">{svc.status}</td>
                            <td className="p-4 text-right space-x-2">
                              <button className="p-2 hover:bg-blue-50 text-primary rounded-lg transition-all"><Edit className="w-4 h-4" /></button>
                              <button onClick={() => handleDeleteService(svc.id)} className="p-2 hover:bg-rose-50 text-rose-500 rounded-lg transition-all"><Trash2 className="w-4 h-4" /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </MDiv>
              )}

              {activeTab === "Team" && (
                <MDiv key="team" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg text-dark">Core Architecture Team</h3>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary-dark transition-all">
                      <Plus className="w-4 h-4" /> Recruit Member
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.map((member) => (
                      <div key={member.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm group hover:shadow-md transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <img src={member.avatar} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                          <div>
                            <h4 className="font-black text-dark text-sm">{member.name}</h4>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{member.role}</span>
                          </div>
                        </div>
                        <p className="text-grey text-xs mb-6 line-clamp-2">{member.sub}</p>
                        <div className="flex gap-2">
                           <button className="flex-1 bg-slate-50 hover:bg-primary hover:text-white py-2 rounded-lg text-[10px] font-bold uppercase transition-all">Edit</button>
                           <button className="p-2 bg-rose-50 text-rose-500 rounded-lg hover:bg-rose-500 hover:text-white transition-all"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </MDiv>
              )}

              {activeTab === "Settings" && (
                <MDiv key="settings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="max-w-2xl">
                  <form onSubmit={handleHeroUpdate} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                    <h3 className="font-bold text-lg text-dark mb-4">Website Appearance Settings</h3>
                    <div>
                      <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Hero Headline</label>
                      <textarea
                        value={heroData.title}
                        onChange={(e) => setHeroData({...heroData, title: e.target.value})}
                        className="w-full bg-slate-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary/50 transition-all"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Hero Subtitle</label>
                      <textarea
                        value={heroData.subtitle}
                        onChange={(e) => setHeroData({...heroData, subtitle: e.target.value})}
                        className="w-full bg-slate-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary/50 transition-all"
                        rows={4}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary-dark transition-all disabled:opacity-50"
                    >
                      {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                      Sync System Changes
                    </button>
                  </form>
                </MDiv>
              )}
            </AnimatePresence>
          )}
        </main>
      </div>
    </div>
  );
}
