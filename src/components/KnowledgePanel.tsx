import type { KnowledgePanel as KnowledgePanelData } from "@/data/queries";

export function KnowledgePanel({ panel }: { panel: KnowledgePanelData }) {
  return (
    <aside className="w-full rounded-lg border border-[#dfe1e5] p-4 lg:max-w-[368px]">
      <div className="mb-3 flex h-28 items-center justify-center rounded-md bg-gradient-to-br from-[#e8f0fe] via-[#fce8e6] to-[#e6f4ea]">
        <span className="text-4xl font-medium tracking-tight text-[#202124]">
          {panel.name
            .split(" ")
            .map((p) => p[0])
            .join("")}
        </span>
      </div>
      <h2 className="text-[24px] font-normal leading-tight text-[#202124] sm:text-[28px]">
        {panel.name}
      </h2>
      <p className="mt-1 text-[14px] text-[#70757a]">{panel.subtitle}</p>
      <p className="mt-3 border-t border-[#dfe1e5] pt-3 text-[14px] leading-relaxed text-[#4d5156]">
        {panel.description}
      </p>
      <dl className="mt-3 space-y-2 border-t border-[#dfe1e5] pt-3 text-[14px]">
        {panel.facts.map((fact) => (
          <div key={fact.label} className="grid grid-cols-[88px_1fr] gap-2 sm:grid-cols-[100px_1fr]">
            <dt className="font-bold text-[#202124]">{fact.label}:</dt>
            <dd className="min-w-0 break-words text-[#4d5156]">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
