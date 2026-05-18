import {
  LIFESPACE_MODULES,
  type LifespaceLogEntry,
  type LifespaceModule,
  type ModuleScoreMap,
} from "./types";

export type AnalyticsPoint = {
  label: string;
  score: number;
};

const MONTH_LABEL = new Intl.DateTimeFormat("en-US", { month: "short" });

function clampScore(score: number) {
  return Math.max(0, Math.min(100, Math.round(score)));
}

function scoreFromEntries(entries: LifespaceLogEntry[]) {
  const totalQuestions = entries.reduce((sum, entry) => sum + entry.questionCount, 0);
  const totalYes = entries.reduce((sum, entry) => sum + entry.yesCount, 0);
  return totalQuestions > 0 ? clampScore((totalYes / totalQuestions) * 100) : 0;
}

function dayStart(date: Date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

function monthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function monthWeekIndex(date: Date) {
  const day = date.getDate();
  if (day <= 7) return 0;
  if (day <= 14) return 1;
  if (day <= 21) return 2;
  if (day <= 28) return 3;
  return 4;
}

function weekBucket(date: Date) {
  const start = monthStart(date);
  start.setDate(1 + monthWeekIndex(date) * 7);
  start.setHours(0, 0, 0, 0);
  return start;
}

export function getTodayScore(entries: LifespaceLogEntry[]) {
  const today = dayStart(new Date()).getTime();
  const todaysEntries = entries.filter(
    (entry) => entry.type === "lifespace" && dayStart(entry.date).getTime() === today,
  );
  return scoreFromEntries(todaysEntries);
}

export function getLifetimeModuleScores(entries: LifespaceLogEntry[]): ModuleScoreMap {
  const base = Object.fromEntries(LIFESPACE_MODULES.map((module) => [module, 0])) as ModuleScoreMap;

  for (const module of LIFESPACE_MODULES) {
    const moduleEntries = entries.filter(
      (entry) => entry.type === "lifespace" && entry.module === module,
    );
    base[module] = scoreFromEntries(moduleEntries);
  }

  return base;
}

export function getPriorityModules(entries: LifespaceLogEntry[], count = 3): LifespaceModule[] {
  const scores = getLifetimeModuleScores(entries);
  return [...LIFESPACE_MODULES]
    .sort((a, b) => scores[a] - scores[b])
    .slice(0, count);
}

export function getWeeklySeries(entries: LifespaceLogEntry[], module?: LifespaceModule): AnalyticsPoint[] {
  const grouped = new Map<number, LifespaceLogEntry[]>();
  const filtered = entries.filter(
    (entry) =>
      entry.type === "lifespace" && (module ? entry.module === module : true),
  );

  for (const entry of filtered) {
    const bucket = weekBucket(entry.date);
    const key = bucket.getTime();
    grouped.set(key, [...(grouped.get(key) ?? []), entry]);
  }

  return [...grouped.entries()]
    .sort((a, b) => a[0] - b[0])
    .slice(-6)
    .map(([time, bucketEntries]) => {
      const date = new Date(time);
      return {
        label: `${MONTH_LABEL.format(date)} W${monthWeekIndex(date) + 1}`,
        score: scoreFromEntries(bucketEntries),
      };
    });
}

export function getMonthlySeries(entries: LifespaceLogEntry[], module?: LifespaceModule): AnalyticsPoint[] {
  const grouped = new Map<number, LifespaceLogEntry[]>();
  const filtered = entries.filter(
    (entry) =>
      entry.type === "lifespace" && (module ? entry.module === module : true),
  );

  for (const entry of filtered) {
    const bucket = monthStart(entry.date);
    const key = bucket.getTime();
    grouped.set(key, [...(grouped.get(key) ?? []), entry]);
  }

  return [...grouped.entries()]
    .sort((a, b) => a[0] - b[0])
    .slice(-12)
    .map(([time, bucketEntries]) => ({
      label: MONTH_LABEL.format(new Date(time)),
      score: scoreFromEntries(bucketEntries),
    }));
}

