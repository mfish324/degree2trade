# Degree2Trade Admin Guide

## Resource Management

### Admin Interface
Access the resource manager at: `/admin/resources`

This page lets you add and remove resources from the **For Parents** and **For Grads** pages.

### Adding a Resource

1. Go to `/admin/resources`
2. Select the tab (For Parents or For Grads)
3. Click **"+ Add New Resource"**
4. Fill out the form:
   - **Title**: Resource title
   - **Author**: Creator or source name
   - **URL**: Full link to the resource
   - **Description**: Brief summary (1-2 sentences)
   - **Type**: video, article, essay, podcast, youtube-channel, tiktok, reddit
   - **Category**: Select from available categories
   - **Duration**: Optional (for videos/podcasts, e.g., "10 min")
   - **Featured**: Check to show in the carousel
5. Click **"Copy Code to Clipboard"**
6. Open `lib/resourcesData.ts`
7. Paste the code into the appropriate array (`parentResources` or `gradResources`)
8. Commit and push changes

### Removing a Resource

1. Go to `/admin/resources`
2. Find the resource in the list
3. Click **"Remove"** (copies instructions to clipboard)
4. Open `lib/resourcesData.ts`
5. Find and delete the resource object with that ID
6. Commit and push changes

### Resource Categories

**For Parents:**
- Understanding the Shift
- Financial Reality
- Success Stories
- How to Talk About It
- Research & Data

**For Grads:**
- Making the Case
- Day-in-the-Life
- Career Transitions
- Financial Freedom
- Community & Support
- Skill Building

### Resource Types
- `video` - YouTube videos, news segments
- `article` - News articles, blog posts
- `essay` - Long-form opinion pieces
- `podcast` - Audio content
- `youtube-channel` - Full YouTube channels
- `tiktok` - TikTok creators
- `reddit` - Reddit communities/posts

---

## Environment Variables

Set these in Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase database URL | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | `eyJ...` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS` | Show ad placeholders in production | `true` or `false` |

---

## Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a GA4 property for your site
3. Get the Measurement ID (starts with `G-`)
4. Add `NEXT_PUBLIC_GA_ID` to Vercel env vars
5. Redeploy

View real-time data: Analytics → Reports → Real-time

---

## Google AdSense

### Setup
1. Apply at [adsense.google.com](https://adsense.google.com)
2. Wait for approval (1-3 days typically)
3. Once approved, get your AdSense code
4. Contact developer to integrate ads

### Requirements for Approval
- Privacy Policy page ✓ (`/privacy`)
- About page ✓ (`/about`)
- Original content ✓
- Site must be live and accessible

### Ad Placements (Ready for Integration)
Current placeholder locations:
- Below hero sections
- Mid-page (between content sections)
- Before CTA sections
- On career detail pages

---

## Key Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing page |
| Quiz | `/quiz` | Career matching quiz |
| Results | `/results` | Quiz results |
| Programs | `/programs` | Training program directory |
| Career Library | `/library` | All careers overview |
| Career Detail | `/careers/[careerKey]` | Individual career pages |
| For Parents | `/for-parents` | Parent resources |
| For Grads | `/for-grads` | Graduate resources |
| Financial Aid | `/financial-aid` | Funding information |
| About | `/about` | About page |
| Privacy | `/privacy` | Privacy policy |
| Resource Admin | `/admin/resources` | Manage resources (unlisted) |

---

## File Structure

```
lib/
├── resourcesData.ts    # For Parents/Grads resources
├── quizData.ts         # Quiz questions and career data
├── shortageData.ts     # Worker shortage statistics
└── supabase.ts         # Database connection

app/
├── page.tsx            # Homepage
├── quiz/               # Quiz flow
├── results/            # Quiz results
├── programs/           # Program directory
├── library/            # Career library
├── careers/[careerKey] # Individual career pages
├── for-parents/        # Parent resources
├── for-grads/          # Grad resources
├── financial-aid/      # Financial aid info
├── about/              # About page
├── privacy/            # Privacy policy
└── admin/resources/    # Resource admin (unlisted)

components/
├── AdPlaceholder.tsx   # Ad placeholder components
├── GoogleAnalytics.tsx # GA4 integration
├── Acronym.tsx         # Acronym tooltips
└── ...
```

---

## Deployment

The site auto-deploys from GitHub to Vercel on every push to `master`.

To deploy manually:
```bash
git add .
git commit -m "Your commit message"
git push
```

---

## Contact

For technical support or questions:
- Email: contact@degree2jobs.com
