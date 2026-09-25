// DevOps Academy — front-end config.
// This file holds simple, human-editable settings for the site.

const SITE_CONFIG = {
  siteName: "DevOps Academy",

  // ---------------------------------------------------------------
  // CONFLICT LINE: two branches will set this to different values
  // (e.g. "blue" vs "green"). Keep it on ONE line — that guarantees
  // a clean, single-line merge conflict for the lesson.
  themeColor: "green",
  // ---------------------------------------------------------------

  // BUG (intentional): the course count below is WRONG on purpose.
  // There are 3 courses listed in index.html, not 5.
  // We fix this with a hotfix branch + cherry-pick later.
  courseCount: 5,
};

// Expose it globally so script.js can read it.
window.SITE_CONFIG = SITE_CONFIG;
