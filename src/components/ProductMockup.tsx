import { useState } from 'react';
import { FileSpreadsheet, CheckSquare, Calendar, Layout, FileText } from 'lucide-react';
import type { MockupKind } from '../types/store';

interface ProductMockupProps {
  kind: MockupKind;
  variant?: 'overview' | 'spreadsheet' | 'checklist' | 'studio';
  studioImagePath?: string;
  studioImageAlt?: string;
  compact?: boolean;
}

export function ProductMockup({
  kind,
  variant = 'overview',
  studioImagePath,
  studioImageAlt,
  compact = false,
}: ProductMockupProps) {
  const [imgError, setImgError] = useState(false);

  if (variant === 'studio' && studioImagePath && !imgError) {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-lg bg-[#EAE6DD]">
        <img
          src={studioImagePath}
          alt={studioImageAlt ?? 'ReadySet digital toolkit studio preview'}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Fallback or interactive layered digital product mockups tailored per kit & variant
  return (
    <div
      className={`w-full h-full rounded-lg bg-[#EAE6DD] border border-zinc-200/70 flex items-center justify-center overflow-hidden ${
        compact ? 'p-4' : 'p-6 sm:p-8'
      }`}
    >
      {kind === 'creator-starter' && <CreatorStarterSheet variant={variant} compact={compact} />}
      {kind === 'creator-media-kit' && <CreatorMediaKitSheet variant={variant} compact={compact} />}
      {kind === 'freelance-editor' && <FreelanceEditorSheet variant={variant} compact={compact} />}
      {kind === 'freelance-launch' && <FreelanceLaunchSheet variant={variant} compact={compact} />}
      {kind === 'college-event' && <CollegeEventSheet variant={variant} compact={compact} />}
      {kind === 'internship-toolkit' && <InternshipSheet variant={variant} compact={compact} />}
    </div>
  );
}

function SheetFrame({
  headerTitle,
  headerTag,
  accentClass = 'bg-[#1D4ED8]',
  children,
  compact,
}: {
  headerTitle: string;
  headerTag: string;
  accentClass?: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="relative w-full max-w-[460px]">
      <div
        aria-hidden="true"
        className="absolute inset-x-3 -bottom-2 top-2 rounded-md bg-white/60 border border-zinc-200/80"
      />
      <div className="relative w-full bg-white rounded-md border border-zinc-200 shadow-sm flex flex-col overflow-hidden text-[#18181B]">
        <div className="px-3.5 py-2.5 border-b border-zinc-100 flex items-center justify-between gap-2 bg-[#FAF9F6]">
          <div className="flex items-center gap-2 min-w-0">
            <span className={`w-2 h-2 rounded-xs shrink-0 ${accentClass}`} aria-hidden="true" />
            <span className="text-[11px] font-medium text-[#18181B] truncate">{headerTitle}</span>
          </div>
          <span className="font-mono text-[10px] text-[#71717A] shrink-0">{headerTag}</span>
        </div>
        <div className={`flex flex-col justify-between ${compact ? 'p-3' : 'p-4 sm:p-5'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

function CreatorStarterSheet({ variant, compact }: { variant: string; compact?: boolean }) {
  if (variant === 'spreadsheet') {
    return (
      <SheetFrame headerTitle="Monthly Analytics & Posting Log" headerTag="SHEET · 04" compact={compact}>
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2 text-[10px] font-mono text-[#71717A] pb-1 border-b border-zinc-100">
            <span>DATE</span>
            <span>PILLAR</span>
            <span className="text-right">SAVES</span>
            <span className="text-right">STATUS</span>
          </div>
          {[
            ['Nov 04', 'Workflow', '412', 'Published'],
            ['Nov 07', 'Breakdown', '689', 'Published'],
            ['Nov 11', 'Toolkit', '524', 'Scheduled'],
            ['Nov 14', 'Case Note', '—', 'Drafting'],
          ].map(([date, pillar, saves, status]) => (
            <div
              key={date}
              className="grid grid-cols-4 gap-2 text-[11px] py-1 border-b border-zinc-50 items-center"
            >
              <span className="font-mono tabular-nums text-[#52525B]">{date}</span>
              <span className="font-medium truncate">{pillar}</span>
              <span className="font-mono tabular-nums text-right">{saves}</span>
              <span className="text-right text-[10px] text-[#1D4ED8] font-medium">{status}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#52525B]">
          <span className="flex items-center gap-1">
            <FileSpreadsheet className="w-3 h-3 text-[#1D4ED8]" /> Auto-sum enabled
          </span>
          <span className="font-mono tabular-nums">Monthly Avg: 541</span>
        </div>
      </SheetFrame>
    );
  }

  if (variant === 'checklist') {
    return (
      <SheetFrame headerTitle="Brand Collab & Caption Checklist" headerTag="DOC · 06" compact={compact}>
        <div className="space-y-2">
          {[
            ['Confirm hook clarity in first 3 seconds', true],
            ['Align post with core content pillar', true],
            ['Verify CTA & pinned comment copy', true],
            ['Confirm usage rights & disclosure tag', false],
            ['Schedule cross-post & archive raw cut', false],
          ].map(([label, done]) => (
            <div key={String(label)} className="flex items-center gap-2.5 text-[11px] py-1">
              <span
                className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center shrink-0 ${
                  done ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white' : 'border-zinc-300'
                }`}
              >
                {done ? '✓' : ''}
              </span>
              <span className={done ? 'text-[#52525B]' : 'text-[#18181B] font-medium'}>
                {String(label)}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#71717A]">
          <span className="flex items-center gap-1">
            <CheckSquare className="w-3 h-3" /> 7 templates included
          </span>
          <span>A4 / Notion / Doc</span>
        </div>
      </SheetFrame>
    );
  }

  return (
    <SheetFrame headerTitle="30-Day Content Planner" headerTag="CALENDAR · 01" compact={compact}>
      <div className="grid grid-cols-5 gap-1.5">
        {['MON', 'TUE', 'WED', 'THU', 'FRI'].map((d) => (
          <div key={d} className="text-[9px] font-mono text-[#71717A] pb-1">
            {d}
          </div>
        ))}
        {[
          { day: '01', tag: 'Reel', active: true },
          { day: '02', tag: 'Script', active: false },
          { day: '03', tag: 'Slides', active: true },
          { day: '04', tag: 'Rest', active: false },
          { day: '05', tag: 'Story', active: false },
          { day: '08', tag: 'Reel', active: true },
          { day: '09', tag: 'Draft', active: false },
          { day: '10', tag: 'Post', active: true },
          { day: '11', tag: 'Batch', active: false },
          { day: '12', tag: 'Collab', active: true },
        ].map((cell) => (
          <div
            key={cell.day}
            className={`rounded-xs p-1.5 border text-left ${
              cell.active
                ? 'bg-[#1D4ED8]/8 border-[#1D4ED8]/25'
                : 'bg-[#FAF9F6] border-zinc-100'
            }`}
          >
            <div className="font-mono text-[9px] text-[#71717A] tabular-nums">{cell.day}</div>
            <div
              className={`text-[10px] font-medium mt-0.5 truncate ${
                cell.active ? 'text-[#1D4ED8]' : 'text-[#52525B]'
              }`}
            >
              {cell.tag}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#52525B]">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3 text-[#1D4ED8]" /> 4 Content Pillars
        </span>
        <span className="font-mono">30-Day Master</span>
      </div>
    </SheetFrame>
  );
}

function CreatorMediaKitSheet({ variant, compact }: { variant: string; compact?: boolean }) {
  if (variant === 'spreadsheet') {
    return (
      <SheetFrame headerTitle="Brand Campaign Tracker" headerTag="PIPELINE · 04" compact={compact}>
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2 text-[10px] font-mono text-[#71717A] pb-1 border-b border-zinc-100">
            <span>BRAND</span>
            <span>STAGE</span>
            <span className="text-right">RATE</span>
            <span className="text-right">DUE</span>
          </div>
          {[
            ['Studio Desk', 'Proposal Sent', '₹18,000', 'Nov 18'],
            ['Lumen Audio', 'Contracted', '₹24,500', 'Nov 25'],
            ['Field Notes', 'Outreach', '₹12,000', 'Dec 02'],
          ].map(([brand, stage, rate, due]) => (
            <div
              key={brand}
              className="grid grid-cols-4 gap-2 text-[11px] py-1 border-b border-zinc-50 items-center"
            >
              <span className="font-medium truncate">{brand}</span>
              <span className="text-[10px] text-[#1D4ED8] truncate">{stage}</span>
              <span className="font-mono tabular-nums text-right">{rate}</span>
              <span className="font-mono tabular-nums text-right text-[#71717A]">{due}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#52525B]">
          <span>Outreach + Follow-up log</span>
          <span className="font-mono tabular-nums">3 active briefs</span>
        </div>
      </SheetFrame>
    );
  }

  return (
    <SheetFrame headerTitle="Editorial Media Kit — Layout 01" headerTag="DECK · 3 STYLES" compact={compact}>
      <div className="grid grid-cols-12 gap-3 h-full">
        <div className="col-span-5 bg-[#FAF9F6] border border-zinc-100 rounded-xs p-2.5 flex flex-col justify-between">
          <div>
            <div className="w-8 h-8 rounded-xs bg-[#1D4ED8] text-white font-display font-bold text-xs flex items-center justify-center">
              MK
            </div>
            <div className="mt-2.5 font-display text-xs font-semibold leading-tight">
              Creator Portfolio &amp; Audience Sheet
            </div>
          </div>
          <div className="text-[10px] text-[#71717A] space-y-1 mt-3">
            <div>Demographics</div>
            <div>Deliverables</div>
            <div>Rate Card</div>
          </div>
        </div>
        <div className="col-span-7 flex flex-col justify-between gap-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 border border-zinc-100 rounded-xs">
              <div className="text-[9px] font-mono text-[#71717A]">REACH / 30D</div>
              <div className="font-mono text-xs font-semibold tabular-nums mt-0.5">142K</div>
            </div>
            <div className="p-2 border border-zinc-100 rounded-xs">
              <div className="text-[9px] font-mono text-[#71717A]">AVG WATCH</div>
              <div className="font-mono text-xs font-semibold tabular-nums mt-0.5">68%</div>
            </div>
          </div>
          <div className="p-2 bg-[#FAF9F6] border border-zinc-100 rounded-xs text-[10px] space-y-1">
            <div className="flex justify-between">
              <span className="text-[#52525B]">Dedicated Reel + Story</span>
              <span className="font-mono tabular-nums font-medium">Rate A</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#52525B]">Newsletter Feature</span>
              <span className="font-mono tabular-nums font-medium">Rate B</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-[#52525B]">
            <span className="flex items-center gap-1">
              <Layout className="w-3 h-3 text-[#1D4ED8]" /> 3 Kit Layouts
            </span>
            <span>Outreach Scripts</span>
          </div>
        </div>
      </div>
    </SheetFrame>
  );
}

function FreelanceEditorSheet({ variant, compact }: { variant: string; compact?: boolean }) {
  if (variant === 'overview') {
    return (
      <SheetFrame
        headerTitle="Client Brief & Clean Invoice"
        headerTag="DOC · 03 / 05"
        accentClass="bg-[#65A30D]"
        compact={compact}
      >
        <div className="space-y-2.5 text-[11px]">
          <div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
            <div>
              <div className="font-semibold">Project Brief: Brand Launch Cut</div>
              <div className="text-[10px] text-[#71717A]">Deliverable: 9:16 + 16:9 Master</div>
            </div>
            <span className="font-mono text-[10px] text-[#65A30D] font-medium">INV-014</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2 bg-[#FAF9F6] rounded-xs border border-zinc-100">
              <div className="text-[#71717A]">Revision Window</div>
              <div className="font-medium mt-0.5">2 rounds included</div>
            </div>
            <div className="p-2 bg-[#FAF9F6] rounded-xs border border-zinc-100">
              <div className="text-[#71717A]">Asset Turnaround</div>
              <div className="font-medium mt-0.5">72 hours from brief</div>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#52525B]">
          <span className="flex items-center gap-1">
            <FileText className="w-3 h-3 text-[#65A30D]" /> Onboarding + Policy
          </span>
          <span>PDF / Doc Ready</span>
        </div>
      </SheetFrame>
    );
  }

  return (
    <SheetFrame
      headerTitle="Editor Pricing Calculator"
      headerTag="CALC · INR"
      accentClass="bg-[#65A30D]"
      compact={compact}
    >
      <div className="space-y-2">
        <div className="grid grid-cols-12 gap-2 text-[10px] font-mono text-[#71717A] pb-1 border-b border-zinc-100">
          <span className="col-span-6">SCOPE ITEM</span>
          <span className="col-span-3 text-right">HRS / UNIT</span>
          <span className="col-span-3 text-right">QUOTE</span>
        </div>
        {[
          ['A-Roll Assembly & Cut', '4.0 hrs', '₹4,800'],
          ['Motion Captions & Grade', '2.5 hrs', '₹3,200'],
          ['Sound Design & Mix', '1.5 hrs', '₹1,800'],
          ['2 Revision Rounds', 'Included', '₹0'],
        ].map(([item, hrs, quote]) => (
          <div
            key={item}
            className="grid grid-cols-12 gap-2 text-[11px] py-1.5 border-b border-zinc-50 items-center"
          >
            <span className="col-span-6 truncate font-medium">{item}</span>
            <span className="col-span-3 font-mono tabular-nums text-right text-[#71717A]">{hrs}</span>
            <span className="col-span-3 font-mono tabular-nums text-right">{quote}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-zinc-200 flex items-center justify-between text-xs font-semibold">
        <span>Suggested Project Quote</span>
        <span className="font-mono tabular-nums text-[#18181B]">₹9,800</span>
      </div>
    </SheetFrame>
  );
}

function FreelanceLaunchSheet({ variant, compact }: { variant: string; compact?: boolean }) {
  if (variant === 'spreadsheet') {
    return (
      <SheetFrame
        headerTitle="Client Lead & Outreach Tracker"
        headerTag="CRM · 04"
        accentClass="bg-[#65A30D]"
        compact={compact}
      >
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2 text-[10px] font-mono text-[#71717A] pb-1 border-b border-zinc-100">
            <span>PROSPECT</span>
            <span>OFFER</span>
            <span>NEXT STEP</span>
            <span className="text-right">EST.</span>
          </div>
          {[
            ['Kora Studio', 'Site Copy', 'Follow-up Thu', '₹15,000'],
            ['Northwind', 'Retainer', 'Call Booked', '₹28,000'],
            ['Harbor Co.', 'Audit', 'Proposal Sent', '₹9,500'],
          ].map(([name, offer, next, est]) => (
            <div
              key={name}
              className="grid grid-cols-4 gap-2 text-[11px] py-1 border-b border-zinc-50 items-center"
            >
              <span className="font-medium truncate">{name}</span>
              <span className="text-[#52525B] truncate">{offer}</span>
              <span className="text-[10px] text-[#65A30D] font-medium truncate">{next}</span>
              <span className="font-mono tabular-nums text-right">{est}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#52525B]">
          <span>Outreach scripts linked</span>
          <span className="font-mono tabular-nums">6 templates</span>
        </div>
      </SheetFrame>
    );
  }

  return (
    <SheetFrame
      headerTitle="Service Definition & Proposal"
      headerTag="LAUNCH · 01"
      accentClass="bg-[#65A30D]"
      compact={compact}
    >
      <div className="space-y-2.5">
        <div className="p-2.5 bg-[#FAF9F6] border border-zinc-100 rounded-xs">
          <div className="text-[9px] font-mono text-[#71717A]">CORE OFFER STATEMENT</div>
          <div className="text-[11px] font-medium mt-1 leading-snug">
            Clear scope, fixed timeline, and transparent deliverables in one page.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          {[
            ['Tier 1', 'Starter Audit'],
            ['Tier 2', 'Core Build'],
            ['Tier 3', 'Monthly'],
          ].map(([tier, label]) => (
            <div key={tier} className="p-2 border border-zinc-100 rounded-xs">
              <div className="font-mono text-[#65A30D]">{tier}</div>
              <div className="font-medium mt-0.5 truncate">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#52525B]">
        <span>Portfolio checklist included</span>
        <span className="font-mono">Docs + Sheets</span>
      </div>
    </SheetFrame>
  );
}

function CollegeEventSheet({ variant, compact }: { variant: string; compact?: boolean }) {
  if (variant === 'overview') {
    return (
      <SheetFrame
        headerTitle="Event Planning Timeline"
        headerTag="RUNBOOK · 01"
        accentClass="bg-[#EA580C]"
        compact={compact}
      >
        <div className="space-y-2">
          {[
            ['T-6 Weeks', 'Lock venue, core team & budget ceiling', 'Done'],
            ['T-4 Weeks', 'Launch sponsor deck & vendor quotes', 'Active'],
            ['T-2 Weeks', 'Confirm AV, stage & registration sheet', 'Queued'],
            ['Event Day', 'Run-of-show & volunteer check-in', 'Queued'],
          ].map(([phase, task, status]) => (
            <div
              key={phase}
              className="flex items-center justify-between gap-2 text-[11px] py-1 border-b border-zinc-50"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-mono text-[10px] text-[#EA580C] shrink-0">{phase}</span>
                <span className="truncate">{task}</span>
              </div>
              <span className="text-[10px] text-[#71717A] shrink-0">{status}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#52525B]">
          <span>Task allocation + Feedback form</span>
          <span className="font-mono">7 sheets</span>
        </div>
      </SheetFrame>
    );
  }

  return (
    <SheetFrame
      headerTitle="Event Budget & Vendor Matrix"
      headerTag="BUDGET · 02"
      accentClass="bg-[#EA580C]"
      compact={compact}
    >
      <div className="space-y-2">
        <div className="grid grid-cols-4 gap-2 text-[10px] font-mono text-[#71717A] pb-1 border-b border-zinc-100">
          <span>CATEGORY</span>
          <span className="text-right">EST.</span>
          <span className="text-right">ACTUAL</span>
          <span className="text-right">STATUS</span>
        </div>
        {[
          ['Audio & Stage', '₹18,000', '₹16,500', 'Booked'],
          ['Print & Badges', '₹6,500', '₹6,200', 'Paid'],
          ['Speaker Hospitality', '₹8,000', '₹7,400', 'Pending'],
          ['Sponsorship Offset', '−₹20,000', '−₹20,000', 'Confirmed'],
        ].map(([cat, est, act, status]) => (
          <div
            key={cat}
            className="grid grid-cols-4 gap-2 text-[11px] py-1 border-b border-zinc-50 items-center"
          >
            <span className="font-medium truncate">{cat}</span>
            <span className="font-mono tabular-nums text-right text-[#71717A]">{est}</span>
            <span className="font-mono tabular-nums text-right">{act}</span>
            <span className="text-right text-[10px] text-[#EA580C] font-medium">{status}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-zinc-200 flex items-center justify-between text-xs font-semibold">
        <span>Net Variance</span>
        <span className="font-mono tabular-nums text-[#65A30D]">−₹2,400 under</span>
      </div>
    </SheetFrame>
  );
}

function InternshipSheet({ variant, compact }: { variant: string; compact?: boolean }) {
  if (variant === 'checklist') {
    return (
      <SheetFrame
        headerTitle="Resume & Portfolio Audit"
        headerTag="CHECKLIST · 02"
        accentClass="bg-[#EA580C]"
        compact={compact}
      >
        <div className="space-y-2">
          {[
            ['One-page PDF formatted cleanly (no 2-page bleed)', true],
            ['Action-verb bullets with clear project outcomes', true],
            ['Portfolio links tested in incognito window', true],
            ['Tailored cold email attached with role reference', false],
          ].map(([label, done]) => (
            <div key={String(label)} className="flex items-center gap-2 text-[11px] py-1">
              <span
                className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center shrink-0 ${
                  done ? 'bg-[#EA580C] border-[#EA580C] text-white' : 'border-zinc-300'
                }`}
              >
                {done ? '✓' : ''}
              </span>
              <span className="truncate">{String(label)}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#52525B]">
          <span>Interview workbook included</span>
          <span className="font-mono">6 templates</span>
        </div>
      </SheetFrame>
    );
  }

  return (
    <SheetFrame
      headerTitle="Internship Application Tracker"
      headerTag="TRACKER · 01"
      accentClass="bg-[#EA580C]"
      compact={compact}
    >
      <div className="space-y-2">
        <div className="grid grid-cols-4 gap-2 text-[10px] font-mono text-[#71717A] pb-1 border-b border-zinc-100">
          <span>COMPANY</span>
          <span>ROLE</span>
          <span>STAGE</span>
          <span className="text-right">FOLLOW-UP</span>
        </div>
        {[
          ['Atelier Labs', 'Product Intern', 'Interview 1', 'Nov 26'],
          ['Metric Studio', 'Design Intern', 'Applied', 'Nov 29'],
          ['Civic Tech', 'Ops Intern', 'Referral Sent', 'Nov 24'],
          ['Verve Media', 'Content Intern', 'Shortlisted', 'Dec 01'],
        ].map(([co, role, stage, date]) => (
          <div
            key={co}
            className="grid grid-cols-4 gap-2 text-[11px] py-1 border-b border-zinc-50 items-center"
          >
            <span className="font-medium truncate">{co}</span>
            <span className="text-[#52525B] truncate">{role}</span>
            <span className="text-[10px] text-[#EA580C] font-medium truncate">{stage}</span>
            <span className="font-mono tabular-nums text-right text-[#71717A]">{date}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-[#52525B]">
        <span>Networking log + Email scripts</span>
        <span className="font-mono tabular-nums">4 active applications</span>
      </div>
    </SheetFrame>
  );
}
