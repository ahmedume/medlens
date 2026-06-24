import { motion } from "framer-motion";
import type { SearchReport } from "../types";

export default function SearchSummary({ report }: { report: SearchReport }) {
  const studyTypes = report.articles.reduce<Record<string, number>>((acc, a) => {
    acc[a.study_type] = (acc[a.study_type] || 0) + 1;
    return acc;
  }, {});

  const avgScore = report.articles.length
    ? Math.round(report.articles.reduce((s, a) => s + a.trust_score, 0) / report.articles.length)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold">About your search</h2>
      <p className="text-sm text-slate-300 leading-relaxed">
        {report.topic_summary || "No summary available."}
      </p>
      <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
        <div>
          <p className="text-slate-500">Articles reviewed</p>
          <p className="text-xl font-semibold text-white">{report.articles.length}</p>
        </div>
        <div>
          <p className="text-slate-500">Average trust score</p>
          <p className="text-xl font-semibold text-white">{avgScore}/100</p>
        </div>
        <div className="col-span-2">
          <p className="text-slate-500">Study types</p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {Object.entries(studyTypes).map(([type, count]) => (
              <span
                key={type}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300"
              >
                {type} ({count})
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
