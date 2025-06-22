# LYS Design System Documentation

## Design Philosophy

### Core Principles
1. **Mobile-First**: Design for 320px screens, enhance for larger viewports
2. **Korean Beauty Aesthetic**: Clean, minimal, sophisticated
3. **Touch-Friendly**: Minimum 48px touch targets throughout
4. **Accessibility**: WCAG AA compliance, keyboard navigable
5. **Performance**: Optimized for fast loading and smooth interactions

## Color System

### Primary Palette
```scss
// Brand Colors
$rose-gold: #D4A5A5;        // Primary CTAs, links, accents
$rose-gold-dark: #C48B8B;   // Hover states, emphasis
$soft-pink: #FDF8F6;        // Light backgrounds, cards
$soft-pink-hover: #F5E6E0;  // Interactive hover states

// Neutral Colors
$white: #FFFFFF;            // Primary backgrounds
$deep-charcoal: #1A1A1A;    // Headings, strong text
$text-primary: #2D2D2D;     // Body text
$text-secondary: #5A5A5A;   // Secondary text, captions
$medium-gray: #8B8B8B;      // Disabled states, icons
$border-gray: #E0E0E0;      // Borders, dividers
$light-gray: #F0F0F0;       // Page backgrounds

// Status Colors
$success-green: #4CAF50;    // Success states, verified badges
$warning-amber: #FF9800;    // Warnings, important notices
$error-red: #F44336;        // Errors, validation messages
```

### Brand-Specific Colors
```scss
// WISMIN
$wismin-gold: #F4E4C1;      // Brand accent
$wismin-sage: #E8F0E3;      // Secondary accent

// LALUCELL
$lalucell-lavender: #E8E3F5; // Brand accent
$lalucell-mint: #E3F2ED;     // Secondary accent

// SUNNICORN
$sunnicorn-blue: #E3F0F8;    // Brand accent
$sunnicorn-green: #E8F0E3;   // Secondary accent
```

## Typography

### Font Stack
```css
/* Primary Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Korean Language Support */
font-family: 'Inter', 'Noto Sans KR', -apple-system, sans-serif;
```

### Type Scale
```scss
// Display
$display-large: 64px;   // Brand logos
$display: 48px;         // Page headers
$display-small: 36px;   // Section headers

// Headings
$h1: 32px;             // Major headings
$h2: 28px;             // Sub-headings
$h3: 24px;             // Card titles
$h4: 20px;             // Small headings

// Body
$body-large: 18px;     // Intro text, emphasis
$body: 16px;           // Default body text
$body-small: 14px;     // Secondary text
$caption: 12px;        // Labels, badges

// Line Heights
$line-height-tight: 1.2;
$line-height-normal: 1.5;
$line-height-relaxed: 1.6;
$line-height-loose: 1.8;
```

### Font Weights
```scss
$font-light: 300;      // Display text, elegant headers
$font-regular: 400;    // Body text
$font-medium: 500;     // Buttons, emphasis
$font-semibold: 600;   // Strong emphasis
```

## Spacing System

### Base Unit: 8px
```scss
$space-0: 0;           // 0px
$space-1: 4px;         // 0.25rem
$space-2: 8px;         // 0.5rem - Base unit
$space-3: 12px;        // 0.75rem
$space-4: 16px;        // 1rem
$space-5: 20px;        // 1.25rem
$space-6: 24px;        // 1.5rem
$space-8: 32px;        // 2rem
$space-10: 40px;       // 2.5rem
$space-12: 48px;       // 3rem - Touch minimum
$space-16: 64px;       // 4rem - Section spacing
$space-20: 80px;       // 5rem - Large sections
```

## Layout System

### Breakpoints
```scss
$mobile: 320px;        // Minimum supported
$mobile-lg: 640px;     // Large phones
$tablet: 768px;        // Tablets
$desktop: 1024px;      // Desktop
$desktop-lg: 1280px;   // Wide screens
$desktop-xl: 1536px;   // Extra wide
```

### Container Widths
```scss
$container-sm: 640px;
$container-md: 768px;
$container-lg: 1024px;
$container-xl: 1280px;
$container-2xl: 1536px;
```

### Grid System
```scss
// Mobile: 4 columns
// Tablet: 8 columns
// Desktop: 12 columns
// Gap: 16px (mobile), 20px (tablet), 24px (desktop)
```

## Component Specifications

### Buttons

#### Primary Button
```scss
.btn-primary {
  padding: 16px 40px;
  background: $rose-gold;
  color: $white;
  border-radius: 30px;
  font-weight: 500;
  min-height: 48px;
  transition: all 0.3s ease-out;
  
  &:hover {
    background: $rose-gold-dark;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(212, 165, 165, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

#### Secondary Button
```scss
.btn-secondary {
  padding: 10px 20px;
  background: $white;
  color: $text-primary;
  border: 1px solid $border-gray;
  border-radius: 25px;
  font-weight: 400;
  min-height: 44px;
  
  &:hover {
    background: $soft-pink-hover;
    border-color: $rose-gold;
  }
}
```

### Cards

#### Standard Card
```scss
.card {
  background: $white;
  border: 1px solid $border-gray;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: $rose-gold;
  }
}
```

#### Product Card
```scss
.product-card {
  border-radius: 12px;
  overflow: hidden;
  
  .product-image {
    aspect-ratio: 1;
    overflow: hidden;
    
    img {
      transition: transform 0.3s;
    }
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}
```

### Form Elements

#### Input Fields
```scss
.input {
  padding: 12px 16px;
  border: 1px solid $border-gray;
  border-radius: 8px;
  font-size: 14px;
  min-height: 48px;
  width: 100%;
  transition: all 0.3s;
  
  &:focus {
    outline: none;
    border-color: $rose-gold;
    box-shadow: 0 0 0 3px rgba(212, 165, 165, 0.1);
  }
  
  &::placeholder {
    color: $medium-gray;
  }
}
```

#### Floating Labels
```scss
.floating-label {
  position: relative;
  
  label {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
    background: $white;
    padding: 0 4px;
  }
  
  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 0;
    font-size: 12px;
    color: $rose-gold;
  }
}
```

### Navigation

#### Desktop Navigation
```scss
.nav-desktop {
  height: 64px;
  background: $white;
  border-bottom: 1px solid $border-gray;
  display: none;
  
  @media (min-width: $tablet) {
    display: flex;
  }
}
```

#### Mobile Bottom Navigation
```scss
.nav-mobile {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: $white;
  border-top: 1px solid $border-gray;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
  @media (min-width: $tablet) {
    display: none;
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    
    .icon {
      width: 24px;
      height: 24px;
    }
    
    .label {
      font-size: 12px;
    }
  }
}
```

### Badges
```scss
.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  gap: 6px;
  
  &.badge-success {
    background: $success-green;
    color: white;
  }
  
  &.badge-verified {
    border: 2px solid $success-green;
    color: $success-green;
    background: white;
  }
}
```

## Animation & Transitions

### Timing Functions
```scss
$ease-out: cubic-bezier(0.0, 0, 0.2, 1);
$ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

// Durations
$duration-fast: 150ms;
$duration-normal: 300ms;
$duration-slow: 500ms;
```

### Standard Transitions
```scss
.transition-all {
  transition: all $duration-normal $ease-out;
}

.transition-transform {
  transition: transform $duration-normal $ease-out;
}

.transition-colors {
  transition: color, background-color, border-color $duration-normal $ease-out;
}
```

### Loading States
```scss
// Skeleton Loader
@keyframes skeleton-pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.skeleton {
  background: $border-gray;
  border-radius: 4px;
  animation: skeleton-pulse 2s ease-in-out infinite;
}

// Spinner
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  border: 2px solid $border-gray;
  border-top-color: $rose-gold;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

## Mobile Considerations

### Safe Areas (iOS)
```scss
.safe-top { padding-top: env(safe-area-inset-top); }
.safe-bottom { padding-bottom: env(safe-area-inset-bottom); }
.safe-left { padding-left: env(safe-area-inset-left); }
.safe-right { padding-right: env(safe-area-inset-right); }
```

### Touch Targets
- Minimum size: 48px × 48px
- Spacing between targets: 8px minimum
- Increased tap areas for small icons

### Viewport Heights
```scss
.h-screen-safe {
  height: 100vh;
  height: 100dvh; // Dynamic viewport height
}

.min-h-screen-safe {
  min-height: 100vh;
  min-height: 100dvh;
}
```

## Accessibility Guidelines

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: Clear focus states

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus indicators
- Logical tab order
- Skip links for main content

### Screen Readers
- Semantic HTML structure
- ARIA labels where needed
- Alternative text for images
- Form labels and error messages

## Implementation Notes

### CSS Architecture
- Utility-first with Tailwind CSS
- Component classes for complex patterns
- CSS custom properties for theming
- PostCSS for vendor prefixing

### Performance
- Purge unused CSS in production
- Lazy load images below fold
- Preload critical fonts
- Minimize animation on low-end devices