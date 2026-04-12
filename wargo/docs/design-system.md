# WARGO Design System - Premium Light Theme

This document defines the visual identity and UI specifications for the WARGO app. All components and pages should strictly adhere to these guidelines to maintain a luxury, calm, and high-end aesthetic.

## 🌿 Color Palette

### Backgrounds
- **App Background:** `#FAF7F5` (Soft off-white)
- **Standard Card:** `#FDEEF4` (Light semi-transparent pink)
- **Urgent Card:** `#FFF0EC` (Soft warm peach/red)

### Borders & Elevation
- **Soft Border:** `#F0B8CE` (Thin, elegant pink stroke)
- **Active Border:** `#E05585` (Bold rose highlight)
- **Shadows:** No harsh shadows. Use soft elevation (e.g., `0 4px 20px rgba(0, 0, 0, 0.03)`).

### Typography
- **Primary Text:** `#1A1A1A` (Near-black for clarity)
- **Secondary Text:** `#9A7A85` (Rose-mauve muted tone)
- **Accent/Labels:** `#C0577A` (Premium rose pink)
- **Command Center Label:** `#D4597A`

### Status & Accents
- **Progress Ring Gradient:** `#E05585` → `#F4A0C0`
- **Streak Badge BG:** `#FFE8F0`
- **XP Badge BG:** `#EAF6E0` (Mint success tone)
- **Urgent Text:** `#C03010`

## 🎯 Design Principles

- **Corner Radius:** 16px to 24px (Soft rounded feel).
- **Glassmorphism:** Very subtle transparency on cards.
- **Spacing:** Breathable and clean layout; mobile-first grid.
- **Icons:** Thin stroke style (Lucide-react or similar).

## 📱 Component Specifications

### 1. Command Center Header
- **Label:** "COMMAND CENTER" (Uppercase, letter-spacing: 0.1em, color: `#D4597A`).
- **Title:** "WARGO" (Large, Bold, `#1A1A1A`).
- **Notification:** Soft pink circle background with a bell icon.

### 2. Progress Card
- **Background:** `#FDEEF4` with a subtle `#F0B8CE` border.
- **Progress:** Circular ring (Gradient: `#E05585` to `#F4A0C0`).
- **Stats:** "X of Y missions accomplished", Streak, and XP badges.

### 3. Mission Cards (Task States)
- **Standard:** Rounded corners, soft pink background.
- **Completed:** Faded opacity, pink check icon.
- **Active:** Bold rose border, "ACTIVE" badge, subtle glow.
- **Pending:** Neutral soft style, "PENDING" badge.
- **Urgent:** Warm peach background (`#FFF0EC`), stronger border, "URGENT" badge.

## ✨ Implementation Notes (Tailwind)

```javascript
// tailwind.config.js snippet
theme: {
  extend: {
    colors: {
      wargo: {
        bg: '#FAF7F5',
        card: '#FDEEF4',
        border: '#F0B8CE',
        primary: '#1A1A1A',
        secondary: '#9A7A85',
        accent: '#C0577A',
        rose: '#E05585',
        urgent: {
          bg: '#FFF0EC',
          text: '#C03010'
        },
        badge: {
          streak: '#FFE8F0',
          xp: '#EAF6E0'
        }
      }
    },
    borderRadius: {
      'wargo': '20px'
    }
  }
}
```
