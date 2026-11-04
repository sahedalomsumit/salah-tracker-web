# Salah Tracker App — Website

The website for **Salah Tracker App**.

Track salah, log prayers, and see your performance over time without ads.

<p align="center">
  <img src="img/Salah%20Tracker%20App%20Feature%20Showcase.png" alt="Salah Tracker App feature showcase" width="800">
</p>

[Get Salah Tracker App on Google Play](https://play.google.com/store/apps/details?id=com.sahed.salah_tracker)

## Website

The responsive landing page puts everyday tracking of all five Salah first, with daily logs, consistency, and progress insights as the main message. It features a calm green design, app screenshots, onboarding, Free and Premium comparisons, FAQs, and download links. Qaza planning is presented as an additional tool after the daily tracking and sync sections.

- All **8 app screenshots** appear in a responsive grid.
- A dedicated onboarding section displays **all 6 onboarding screenshots** in order.
- The feature showcase uses `img/Salah Tracker App Feature Showcase.png`.
- Images are referenced directly from `img/`; the website does not use `img/extra/`.
- Mobile navigation supports closing on link selection and Escape, with accessible expanded states.
- A skip link, visible keyboard focus, and reduced-motion support help make navigation accessible.
- Privacy policy, terms of service, data-deletion information, and optional community support links remain available.

## App features

- **Daily Salah and Tahajjud:** Log Fajr, Dhuhr (Jummah on Fridays), Asr, Maghrib, and Isha. Track optional Tahajjud separately, mark prayers On Time, Qaza, Missed, or Excused, and review or edit earlier days.
- **Local times and reminders:** View prayer times by city and country, access cached times offline, and enable an optional evening logging reminder. Premium adds individual prayer-time alerts and location settings.
- **Lifetime Qaza calculator:** Estimate missed prayers using regular, partial, and non-praying periods, account for menstruation and postnatal exemptions, and compare Light, Moderate, Serious, and Devoted makeup plans. Premium app sync incorporates tracked On Time and Qaza records. A free standalone web calculator is also available through the app without tracked app data.
- **Streaks and milestones:** Follow current and best streaks, perfect days, and completion rates. Premium adds advanced streak analysis, daily breakdowns, and a 30-day activity heatmap.
- **Statistics and trends:** Review daily, weekly, monthly, and yearly performance through seven-day charts, monthly comparisons, and yearly summaries.
- **Community:** View monthly rankings based on obligatory prayer consistency and save or share monthly results.
- **Excused prayers:** Excused entries during menstruation or postnatal recovery do not unfairly break streaks or reduce completion rates.
- **Android widget:** View today's five-prayer status from the home screen and tap to update the log.
- **Guest mode, sync, and offline editing:** Start with local records, sign in with Google for backup and sync across Android devices, and continue editing offline while pending changes retry when connectivity returns.
- **Flexible appearance:** Choose Light, Dark, or System theme, with a Material 3 interface and bundled app fonts.

## Free and Premium

Both plans are ad-free, with no third-party ads or sponsored distractions.

| Free essentials | Premium additions |
| --- | --- |
| Core five-prayer tracking and calendar history | Advanced streak analysis and daily breakdowns |
| Statistics and progress summaries | Interactive 30-day activity heatmap |
| Optional daily evening reminder | Individual Salah alerts at prayer time or up to an hour before |
| Android home-screen widget | App-synced Qaza calculations |
| Guest mode, offline editing, and cloud sync | Location settings and 12/24-hour time controls |
| Light, Dark, and System themes | Additional advanced tools |

Premium is available through Google Play as a monthly or yearly subscription or a one-time Lifetime purchase. Current pricing, eligible offers, and supported purchase restoration are available inside the app.

## Project structure

```text
index.html                 Landing page, screenshot grids, onboarding, and FAQ
style.css                  Shared website theme and responsive page styles
script.js                  Shared accessible navigation and footer year
privacy-policy.html        Privacy policy
terms-of-service.html      Terms for app use, Premium billing, and service limitations
data-deletion.html         Data-deletion information
sitemap.xml                Search-engine sitemap
img/                       App icon, showcase, screenshots, and onboarding images
LICENSE                    MIT license
```

## Run locally

Open `index.html` in a browser, or serve the repository with Python:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. No package installation or build step is required.

## Technology

All pages use semantic HTML, custom responsive CSS, vanilla JavaScript, and Google Fonts (DM Sans and Manrope). The landing page and all legal pages share the green theme, typography, navigation, footer, `style.css`, and `script.js`. No page requires Tailwind CSS or GSAP. Legal pages include a responsive reading layout and horizontally scrollable tables on narrow screens.

The terms of service reflect the app's guest mode, cloud sync, prayer-time and Qaza limitations, community features, and Google Play billing. Have the legal text reviewed by qualified counsel before publication, especially when changing paid offerings or account policies.

## Updating content and images

Use the app repository's `play-store-description.text` as the source for app feature descriptions and Free/Premium availability. Update the landing-page copy and this README together when those details change.

Keep website image references directly under `img/`, using the supplied filenames. The current galleries use `salah-tracker-app-dark-screenshot (1).jpeg` through `(8).jpeg` and `onboarding (1).jpeg` through `(6).jpeg`. Spaces in HTML image URLs are encoded as `%20`.

After changes, check desktop and mobile layouts, confirm all images load, test section links and the mobile menu, and review the legal-page links.

## Support the mission

Optional Sadaqah supports maintenance and future development:

- **International:** [Donate via Stripe](https://donate.stripe.com/3cI8wO6bWcqd7F46az8AE01)
- **Bangladesh:** bKash Send Money to `01773615582` (Personal).

## License

Distributed under the [MIT License](LICENSE).

Built with care by [Sahed Alom Sumit](https://sahedalomsumit.com).
