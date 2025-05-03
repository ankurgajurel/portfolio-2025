"use client";

import { useBlogFilterStore } from "@/store/blog";
import { useMemo } from "react";

const LANGUAGE_OPTIONS = ["TypeScript", "Go", "Python", "JavaScript"];
const STACK_OPTIONS = ["Frontend", "Backend", "DevOps"];

export function BlogFilter() {
  const { filters, setFilter, clearFilters } = useBlogFilterStore();

  const handleToggle = (category: "languages" | "stacks", value: string) => {
    const current = filters[category];
    if (current.includes(value)) {
      setFilter(
        category,
        current.filter((v) => v !== value)
      );
    } else {
      setFilter(category, [...current, value]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {LANGUAGE_OPTIONS.map((lang) => (
            <label
              key={lang}
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.languages.includes(lang)}
                onChange={() => handleToggle("languages", lang)}
                className="accent-blue-600"
              />
              <span>{lang}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Stacks</h3>
        <div className="flex flex-wrap gap-2">
          {STACK_OPTIONS.map((stack) => (
            <label
              key={stack}
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.stacks.includes(stack)}
                onChange={() => handleToggle("stacks", stack)}
                className="accent-blue-600"
              />
              <span>{stack}</span>
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={clearFilters}
        className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default BlogFilter;
