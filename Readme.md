# Starter CSS Template

## Introduction
This starter CSS file is designed to provide a foundational setup for web development projects. It includes a comprehensive `:root` section where CSS variables are defined, along with common CSS properties. This approach facilitates consistent styling across the entire project and allows for easy customization.

## Features

### CSS Variables in `:root`
- The `:root` selector defines global variables accessible throughout the CSS document.
- Includes variables for colors, typography, spacing, and shadows, allowing for a cohesive design theme.
- Easy maintenance and quick adjustments without modifying multiple individual properties.

### Common CSS Properties
- Sets basic styling for body, headers, buttons, and other elements to ensure uniform appearance.
- Default settings include font, background colors, and standard margins and padding.

### Reusable Button Styles
- Predefined classes for buttons with dynamic hover effects, utilizing CSS variables for color shifts and shadow enhancements.

### Scalability and Customization
- Highly scalable and customizable through simple updates to the variable values in the `:root`.
- Allows easy theming of applications or adaptation based on specific branding guidelines.

### Cross-Browser Compatibility
- Ensures that styling appears consistent across various browsers, supporting most modern web browser features.

## Conclusion
This starter file is an ideal base for any web project, providing a solid and consistent foundation of CSS to build upon. It reduces initial setup time and promotes a streamlined development process, suitable for both small and large-scale applications.


# CSS Default Starter / Global Styles

- Save time on project setup.
- Less lines of CSS.

```html
If you prefer video format instead, just follow the link below
```

## Normalize

Small CSS file that provides cross-browser consistency in the default styling of HTML elements.

Alternative/Fancier way of doing this

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- Go to [Docs ](https://necolas.github.io/normalize.css/)
- Select the latest version
- Create normalize.css
- Setup the link in the html

```html
<link rel="stylesheet" href="./normalize.css" />
```

## Fonts

#### Select Fonts

- [fontpair](https://www.fontpair.co/)
- [pagecloud](https://www.pagecloud.com/blog/best-google-fonts-pairings)

#### Grab the CSS

- [typescale](https://type-scale.com/)

Make some adjustments

## Colors

```css
:root {
  /* primary */
  /* grey */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;

}
```

#### Select Primary

Manual Approach

- [coolors](https://coolors.co/)
- [happyhues](https://www.happyhues.co/)
- select your own color
- get shades [shadowlord](https://noeldelgado.github.io/shadowlord/#73fdad)

Library/Faster Approach

- [bootstrap](https://getbootstrap.com/docs/5.0/customize/color/#color-sass-maps)
- [tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)

#### Select Grey

- [tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)

#### Just go with happyhues

- [happyhues](https://www.happyhues.co/)

#### Box Shadow

- [tailwind](https://tailwindcss.com/docs/box-shadow)
