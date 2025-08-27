# 🌌 Nova CSS

Nova CSS is a **lightweight, beginner-friendly CSS framework** inspired by Tailwind.  
It provides utility-first classes for fast, responsive, and clean UI development — without the steep learning curve.

---

## 📦 Installation

### Install via **npm**
```bash
npm install nova-css
````

Include in your project:

**React / Next.js / Vite etc:**

```js
import "nova-css/dist/novacss.min.css";
```

**Plain HTML:**

```html
<link rel="stylesheet" href="./node_modules/nova-css/dist/novacss.min.css" />
```

---

### Use via **CDN**

Don’t want npm? Use the CDN link:

```html
<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nova-css/dist/novacss.min.css" />

<!-- OR unpkg -->
<link rel="stylesheet" href="https://unpkg.com/nova-css/dist/novacss.min.css" />
```

---

## ⚡ Quick Start

```html
<div class="p-4 bg-primary text-white rounded-lg shadow-lg">
  🚀 Hello from Nova CSS!
</div>
```

---

## 🎨 Features

✅ Utility-first classes (easy to remember)
✅ Responsive grid system
✅ Spacing, colors, typography, buttons out-of-the-box
✅ Beginner-friendly naming (like `text-lg`, `bg-primary`, `btn`)
✅ Works with **npm** and **CDN**
✅ Extendable with custom CSS

---

## 🖌 Usage Examples

### Typography

```html
<h1 class="text-4xl font-bold text-color-primary">Heading 1</h1>
<p class="text-base text-color-secondary">This is a paragraph using Nova CSS.</p>
```

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-outline text-color-primary">Outline</button>
```

### Grid

```html
<div class="grid grid-cols-3 gap-4">
  <div class="p-2 bg-light text-color-dark">1</div>
  <div class="p-2 bg-light text-color-dark">2</div>
  <div class="p-2 bg-light text-color-dark">3</div>
</div>
```

### Responsive

```html
<div class="p-2 md:p-4 lg:p-8 bg-color-success text-color-light">
  Responsive Padding Example
</div>
```

### Column Count

```html
<div class="columns-3 col-gap-4">
  <p class="bg-light text-color-dark">Column 1</p>
  <p class="bg-light text-color-dark">Column 2</p>
  <p class="bg-light text-color-dark">Column 3</p>
</div>
```

---

