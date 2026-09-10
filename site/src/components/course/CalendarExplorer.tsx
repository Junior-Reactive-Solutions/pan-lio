"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { getCourseGroups, courseCategories, courseCities, type CourseCategory } from "@/content/courses";
import { CourseGroupCard } from "@/components/course/CourseGroupCard";

const ALL = "All";

export function CalendarExplorer() {
  const groups = useMemo(() => getCourseGroups(), []);
  const [category, setCategory] = useState<CourseCategory | typeof ALL>(ALL);
  const [city, setCity] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups.filter((g) => {
      if (category !== ALL && g.category !== category) return false;
      if (city !== ALL && !g.deliveries.some((d) => d.city === city)) return false;
      if (q && !g.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [groups, category, city, query]);

  return (
    <div>
      {/* Filter bar — 30% structural band inside the section */}
      <div className="flex flex-col gap-4 rounded-2xl border border-sand-300 bg-sand-50 p-4 sm:flex-row sm:items-center sm:p-5">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-espresso-700/50"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a course — e.g. “fraud”, “AI”, “brand”…"
            aria-label="Search courses"
            className="w-full rounded-full border border-sand-300 bg-sand-50 py-2.5 pl-10 pr-4 font-body text-sm text-espresso-900 placeholder:text-espresso-700/50 focus-visible:outline-2 focus-visible:outline-sage-600"
          />
        </div>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="Filter by city"
          className="rounded-full border border-sand-300 bg-sand-50 px-4 py-2.5 font-body text-sm text-espresso-900 focus-visible:outline-2 focus-visible:outline-sage-600"
        >
          <option value={ALL}>All cities</option>
          {courseCities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Category chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory(ALL)}
          className={`rounded-full px-4 py-2 font-body text-xs font-semibold transition-colors ${
            category === ALL
              ? "bg-sage-600 text-sand-50"
              : "bg-sand-200 text-espresso-700 hover:bg-sand-300"
          }`}
        >
          All categories
        </button>
        {courseCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-2 font-body text-xs font-semibold transition-colors ${
              category === cat
                ? "bg-sage-600 text-sand-50"
                : "bg-sand-200 text-espresso-700 hover:bg-sand-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-5 font-body text-sm text-espresso-700">
        Showing <strong className="text-espresso-900">{filtered.length}</strong> of{" "}
        {groups.length} courses
      </p>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <CourseGroupCard key={g.slug} group={g} accent="sage" />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-sand-300 py-16 text-center">
          <p className="font-body text-sm text-espresso-700">
            No courses match those filters. Try clearing the search or picking
            a different city.
          </p>
        </div>
      )}
    </div>
  );
}
