# Compleme

A complementary set of utilities for web app & UI development.

## SCSS Utilities

The `scss-utils` directory contains reusable SCSS variables, functions, and mixins that can be used across multiple projects in the monorepo.

### Available Utilities

- **Variables**: Colors, spacing, breakpoints
- **Mixins**: Flexbox helpers, responsive typography
- **Functions**: Unit conversion, responsive scaling
- **Utility Classes**: Container layouts, text alignment, buttons

### How to Use in Another Project

To use these SCSS utilities in other projects within the monorepo, follow these steps:

#### 1. First, make sure Sass is installed:

```bash
npm install -D sass
```

#### 2. Import the utilities in your SCSS files:

```scss
// Option 1: Import everything with a namespace (recommended)
@use '../../compleme/src/scss-utils' as compleme;

body {
  // Use variables with namespace
  background-color: compleme.$primary-color;
  padding: compleme.$spacing-medium;
  
  // Use functions with namespace
  font-size: compleme.scaled(16px, 24px);
  
  // Use mixins with namespace
  @include compleme.flex-center;
}

// Option 2: Import specific files with namespace
@use '../../compleme/src/scss-utils/util_variables' as vars;
@use '../../compleme/src/scss-utils/utils' as utils;

.my-element {
  color: vars.$text-color;
  @include utils.flex-center;
}

// Option 3: Import everything without namespace (use with caution - may cause conflicts)
@use '../../compleme/src/scss-utils' as *;

.my-element {
  color: $primary-color;
  font-size: scaled(14px, 18px);
}
```

#### 3. Configure your build tool (if needed)

If you're using a build tool like Webpack, Vite, or Next.js, you may need to configure SCSS path resolution.

For **Vite**, add this to your `vite.config.js`:

```js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        // Optional: add the compleme path for easier imports
        additionalData: `@use "../../compleme/src/scss-utils" as compleme;`
      }
    }
  }
}
```

### Example Usage

```scss
@use '../../compleme/src/scss-utils' as compleme;

.my-component {
  // Responsive font sizing with the scaled function
  font-size: compleme.scaled(16px, 24px);
  
  // Use utility variables for consistent spacing
  margin-bottom: compleme.$spacing-large;
  
  // Use utility mixins for common patterns
  @include compleme.flex-center;
  
  // Button styling
  &_button {
    @extend compleme.u-button;
    
    // Customize further as needed
    border-radius: 8px;
  }
}
```

## Available Utils

- `u-container`: Container with max-width and padding
- `u-text-primary`: Primary text color
- `u-text-center`: Center-aligned text
- `u-flex-center`: Flexbox centered content
- `u-button`: Base button styling

## Available Functions

- `scaled($beg, $end, $min_width, $max_width)`: Generate responsive values that scale based on viewport width
- `strip-unit($value)`: Remove units from a value

## Available Variables

- Colors: `$primary-color`, `$text-color`, etc.
- Spacing: `$spacing-small`, `$spacing-medium`, `$spacing-large`
- Breakpoints: `$breakpoint-mobile`, `$breakpoint-tablet`, `$breakpoint-desktop`