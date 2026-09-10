import { courses, getCourseGroups } from "@/content/courses";

/**
 * Every number here is derived directly from the real transcribed course
 * data — never hardcoded — so headline stats can never drift from the
 * source of truth in /docs/COURSE_DATA.md.
 */
export function getSiteStats() {
  const groups = getCourseGroups();
  const countries = new Set(courses.map((c) => c.country));
  const cities = new Set(courses.map((c) => c.city));

  return {
    totalDeliveries: courses.length, // 58
    uniqueCourses: groups.length,
    countries: countries.size,
    cities: cities.size,
    countryList: Array.from(countries).sort(),
    cityList: Array.from(cities).sort(),
  };
}
