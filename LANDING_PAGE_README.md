# Dreamland Athletics Landing Page

This project has been transformed into a comprehensive landing page for **Dreamland Athletics** gym website using **Next.js**, **shadcn/ui**, and **Tailwind CSS**.

## 🎯 Features

### 1. Hero Section with Video Background

- Full-screen video background with fallback image
- Animated logo and call-to-action buttons
- Professional branding with golden (#ffd700) accent color
- Responsive design for all devices

### 2. About Section

- Company mission and values
- Three key feature cards:
  - Elite Training
  - Expert Coaches
  - 24/7 Access

### 3. Facilities Section

- Detailed features with icons:
  - Strength Training Zone
  - Cardio Theater
  - Combat Sports Arena
  - Recovery & Wellness

### 4. Testimonials Section

- Customer success stories
- Professional athlete endorsements
- Community feedback

### 5. Newsletter Signup

- Enhanced form with shadcn/ui components
- Zod validation
- API integration
- Success/error handling with Sonner toasts

### 6. Footer

- Brand information
- Feature badges
- Copyright information

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Styling
- **Zod** - Form validation
- **Sonner** - Toast notifications
- **react-spinners** - Loading indicators

## 📋 Setup Requirements

### 1. Install shadcn/ui Components

The following components have been installed:

```bash
npx shadcn@latest add button card badge
```

### 2. Video Asset

Add a hero video file to:

```
public/videos/gym-hero.mp4
```

**Recommended video specifications:**

- Format: MP4
- Resolution: 1920x1080 or higher
- Duration: 10-30 seconds (loops automatically)
- File size: <10MB for optimal loading
- Content: Gym/fitness training footage

### 3. Image Assets

Ensure these images exist in your public directory:

- `public/images/logo/logo-primary.png` - Main logo
- `public/images/elements/bg.webp` - Fallback background image

### 4. API Endpoint

The newsletter form posts to `/api/newsletter`. Ensure this endpoint exists and handles:

```javascript
{
  fname: string,
  email: string
}
```

## 🎨 Design System

### Colors

- **Primary Gold**: #ffd700
- **Background**: Black (#000000)
- **Secondary Background**: Gray-900 (#111827)
- **Text**: White (#ffffff)
- **Muted Text**: Gray-300 (#d1d5db)

### Typography

- **Headings**: Swiss721Bold font family
- **Body**: Default system fonts
- **Responsive**: 4xl on mobile, 6xl on tablet, 8xl on desktop

### Spacing

- **Sections**: 24 padding (py-24)
- **Containers**: Max width 7xl (max-w-7xl)
- **Grid**: Responsive 1-3 columns on different breakpoints

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: MD breakpoint adjustments
- **Desktop**: LG breakpoint optimizations
- **Large Screens**: XL breakpoint fine-tuning

## 🚀 Component Usage

### Button Examples

```jsx
// Primary CTA
<Button size="lg" className="bg-[#ffd700] text-black hover:bg-[#e6c200]">
  Start Your Journey
</Button>

// Secondary CTA
<Button variant="outline" size="lg" className="border-[#ffd700] text-[#ffd700]">
  Watch Our Story
</Button>
```

### Card Examples

```jsx
<Card className="bg-black border-gray-800 hover:border-[#ffd700]">
  <CardHeader>
    <CardTitle className="text-white">Title</CardTitle>
    <CardDescription className="text-gray-400">Description</CardDescription>
  </CardHeader>
</Card>
```

### Badge Examples

```jsx
<Badge variant="outline" className="text-[#ffd700] border-[#ffd700]">
  Premium Fitness Experience
</Badge>
```

## 🔧 Customization

### Adding New Sections

1. Follow the existing section structure:

```jsx
<section className="py-24 px-4 bg-[background-color]">
  <div className="max-w-7xl mx-auto">{/* Content */}</div>
</section>
```

### Modifying Colors

Update the custom color values in component className props:

- Primary: `#ffd700`
- Hover: `#e6c200`
- Backgrounds: `bg-black`, `bg-gray-900`

### Adding Icons

Replace emoji icons with proper icon libraries:

```jsx
import { Dumbbell, Trophy, Zap, Heart } from "lucide-react";
```

## 📊 Performance Considerations

1. **Video Optimization**: Compress video files for web delivery
2. **Image Optimization**: Use Next.js Image component with proper sizing
3. **Code Splitting**: Components are automatically split by Next.js
4. **Loading States**: Implemented for form submissions

## 🧪 Testing

Test the landing page on:

- [ ] Mobile devices (375px+)
- [ ] Tablets (768px+)
- [ ] Desktop (1024px+)
- [ ] Large screens (1280px+)
- [ ] Newsletter form functionality
- [ ] Video playback across browsers

## 📝 Next Steps

1. Add the hero video file
2. Test newsletter API integration
3. Add more interactive elements
4. Implement scroll animations
5. Add more testimonials
6. Create additional pages (About, Services, Contact)

## 🤝 Contributing

When adding new features:

1. Follow the existing design system
2. Use shadcn/ui components when possible
3. Maintain responsive design principles
4. Test across different screen sizes
5. Keep accessibility in mind

---

**Dreamland Athletics** - Where Champions Are Made 🏆
