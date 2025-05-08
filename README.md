# Opulen
Simple yet Powerful React UI Elements built upon Tailwind v4.0

> [!NOTE]
> This repo is looking for active contributer and UI designers.

> [!CAUTION]
> This repo in under construction it might not be suitable for production.

## Installation

```bash
npm install @oplen/css @opulen/ui # Using npm
bun add @opulen/css @opulen/ui # Using bun
```

After successfully installation import css file and oplen react library as follow:

```css
/* Your tailwindcss file*/
@import "@opluen/css";
@source "./node_modules/@@oplen/ui";
```

## Usage/Example

```tsx
import { Avatar } from "@opulen/ui"

function AvatarExample() {
  return <Avatar src="/avatar.jpg" alt="avatar"/>
}
```

## Compnents

#### Inputs
- [ ] Button
- [ ] Button Group
- [ ] Checkbox
- [ ] Input
- [ ] Input OTP
- [x] Label
- [ ] Radio Button
- [ ] Select
- [ ] Slider
- [ ] Switch
- [ ] Textarea
- [ ] Toggle Button Group


#### Data Display
- [x] Aspect Ratio
- [-] Avatar
- [-] Badge
- [-] Chip
- [ ] List
- [ ] Separator
- [ ] Table
- [ ] Tooltip
- [x] Heading
- [x] Text

#### Feedback
- [ ] Alert
- [ ] Circular Progress
- [ ] Linear Progress
- [ ] Modal
- [ ] Skeleton
- [ ] Toast

#### Surfaces
- [ ] Accordion
- [ ] Card
- [ ] Sheet

#### Navigation
- [ ] Breadcrumbs
- [ ] Drawer
- [ ] Link
- [ ] Menu
- [ ] Stepper
- [ ] Tabs

#### Layout
- [ ] Box
- [ ] Grid
- [ ] Stack
