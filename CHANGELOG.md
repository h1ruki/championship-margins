# Changelog

Notable changes to Championship Margins (formerly F1 Title Margins) are documented here.

## v1.2.0 (16 October 2026)

### Changed

- The product is renamed from F1 Title Margins to Championship Margins, so the name no longer
  contains a Formula 1 mark. The application is now at https://championship-margins.pages.dev/
  and the repository at github.com/h1ruki/championship-margins.
- The page header has three lines: the name, "How dominant was each Formula 1™ champion?", and
  "Drivers' titles · {first}–{last}" taken from the full dataset, not the selected range.
- The page title and description are updated, and text-only Open Graph tags are added.
- The README's unofficial-project statement now uses the new product name.
- Package metadata now reports the name `championship-margins` and version 1.2.0.

### Notes

- The previous address (f1-title-margins.pages.dev) redirects to the new one.
- No data, analytical or chart behaviour changes.

## v1.1.0 (16 October 2026)

### Added

- A `LICENSE` file releasing the application's original source code under the MIT License.
- `public/THIRD-PARTY-NOTICES.txt`, the licence notices for the runtime dependencies shipped in
  the built application.

### Changed

- The README's legal section is reordered and rewritten: unofficial project, F1DB-derived data
  (CC BY 4.0), then application source code (MIT License).
- The app footer now carries Formula 1's published disclaimer for unofficial websites, followed
  by the data credit and a link to the MIT License.
- Package metadata now reports version 1.1.0 and licence MIT (previously 0.0.0 with no licence
  field).
- `CLAUDE.md` gains a rule to maintain the third-party notices when runtime dependencies change.

### Removed

- The "all rights reserved" and "not open source" statements about the application code.

## v1.0.0 (8 October 2026)

### Added

- Continuous integration verifies every pull request to `main` and every push to it: the Python
  lint and tests, a rebuild from the pinned F1DB release that must leave `data/seasons.json`
  unchanged, and the frontend tests, type-check and production build on Node 24.
- Reduced-motion support: chart animation is disabled when the visitor's system asks for reduced
  motion.
- A README covering the project, its architecture and data source, local setup, and copyright
  and reuse terms.

### Changed

- The methodology's source note names F1DB's CC BY 4.0 licence and links to it.
- Seasons that genuinely tie for a headline extreme are disclosed beside the named season, for
  example "2007 (tied with 2008)".
- The 1995–1999 view is labelled "1990s 3-Litre Era" to distinguish it from the 1966–1976
  "3-Litre Era".
- The 1997 season note explains why Michael Schumacher was excluded from the championship
  classification.
- The methodology documents how a driver who raced for more than one constructor in a season is
  attributed to one of them.
- Regression tests pin the key historical claims in the methodology and the two-decimal
  precision of championship points that the headline ranking relies on.
- The F1DB source cache keeps at most two immutable, versioned SQLite snapshots: the pinned
  release plus one previous/reference snapshot. Release archives are verified in memory and
  never persisted.

### Fixed

- The chart's accessible description no longer tells users to select a bar for details; bars
  cannot be reached from the keyboard.
- Headline extremes (most dominant, closest, largest and smallest points gap) are ranked from
  the underlying championship points rather than a rounded percentage, so genuine ties are told
  apart from margins that merely round to the same figure.
- The methodology now says dropped-score rules applied through 1990, making clear that 1990 is
  included.

### Removed

- Archived legacy implementations from the active source tree; they remain recoverable through
  Git history.
- Obsolete colour-review tooling.
