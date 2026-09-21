"use client";

import React, { useState } from "react";
import { BookOpen, Plus, Save, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function KnowledgeEditorPage() {
  const [knowledge, setKnowledge] = useState([
    { id: 1, key: "web_development_stack", content: "Next.js 15, React 19, Tailwind CSS, TypeScript, PostgreSQL" },
    { id: 2, key: "company_mission", content: "To deliver elite tech solutions driven by Innovation, Reliability, and Client Focus." },
    { id: 3, key: "support_sla_uptime", content: "99.9% uptime guarantees across horizontally scaling AWS clusters." },
  ]);

  const [newKey, setNewKey] = useState("");
  const [newContent, setNewContent] = useState("");

  const addRow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKey.trim() || !newContent.trim()) return;
    setKnowledge([...knowledge, { id: Date.now(), key: newKey.trim(), content: newContent.trim() }]);
    setNewKey("");
    setNewContent("");
  };

  const removeRow = (id: number) => {
    setKnowledge(knowledge.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans antialiased text-dark">
      <div className="max-w-5xl mx-auto">
        <Link href="/dashboard" className="inline-flex items-center text-xs font-bold text-primary hover:underline mb-6">
          <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Admin Hub
        </Link>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-black text-dark tracking-tight">AI Knowledge Editor</h1>
            <p className="text-grey text-xs font-medium">Inject operational corpus tokens straight into the conversational assistant agent array.</p>
          </div>
          <div className="bg-emerald-50 text-accent text-xs font-bold border border-emerald-100 rounded-xl px-4 py-2 flex items-center space-x-1.5">
            <BookOpen className="w-4 h-4" />
            <span>Buffer Sync Active</span>
          </div>
        </div>

        {/* Existing Matrix */}
        <div className="bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm mb-8">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-dark mb-4">Active Knowledge Pairs</h3>
          <div className="space-y-4">
            {knowledge.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 border border-gray-100 rounded-xl">
                <div className="flex-1 space-y-1">
                  <span className="text-xs font-black text-primary font-mono block">[{item.key}]</span>
                  <p className="text-dark font-medium text-xs leading-relaxed">{item.content}</p>
                </div>
                <button
                  onClick={() => removeRow(item.id)}
                  className="text-rose-400 hover:text-rose-600 transition-colors p-2 hover:bg-rose-50 rounded-lg shrink-0 self-end sm:self-center"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ingestion Module */}
        <div className="bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-dark mb-4">Ingest New Knowledge Token</h3>
          <form onSubmit={addRow} className="space-y-4 text-xs font-bold text-dark">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label className="block mb-1.5">Token Context Key</label>
                <input
                  type="text"
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value)}
                  placeholder="e.g. pricing_policy"
                  className="w-full bg-light border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-primary font-mono text-primary"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-1.5">Token Core Content</label>
                <input
                  type="text"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="e.g. Custom quotes are engineered based on project engineering scope."
                  className="w-full bg-light border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg flex items-center shadow-md shadow-primary/10"
              >
                <Plus className="w-4 h-4 mr-1" /> Commit to Token Array
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
