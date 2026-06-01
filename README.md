# LuxCut Media - Video Editing Services Website

Professionaal video editing services website built with React, FastAPI, and MongoDB.

## 📁 Project Structure

```
luxcut-media-website/
├── frontend/                  # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx      # Main website page (ALL sections)
│   │   │   └── ui/           # Pre-built UI components (Shadcn)
│   │   ├── mock.js           # Portfolio, Services, Testimonials data
│   │   ├── App.js            # Main app entry point
│   │   ├── index.css         # Global styles
│   │   └── hooks/            # React hooks
│   ├── package.json          # Dependencies list
│   ├── tailwind.config.js    # Tailwind CSS config
│   └── .env                  # Environment variables
│
└── backend/                   # Python FastAPI Backend
    ├── server.py             # API server
    ├── requirements.txt      # Python dependencies
    └── .env                  # Backend environment variables
```

## 🚀 How to Run Locally

### Frontend (React)
```bash
cd frontend
yarn install                  # Install dependencies
yarn start                    # Start development server (http://localhost:3000)
```

### Backend (Python)
```bash
cd backend
pip install -r requirements.txt   # Install dependencies
uvicorn server:app --reload       # Start backend server (http://localhost:8001)
```

## 📝 Key Files to Edit

### 1. Content (No coding needed!)
**File:** `frontend/src/mock.js`
- Services offered
- Portfolio projects
- Client testimonials
- Stats (500+ projects, etc.)

### 2. Branding & Contact
**File:** `frontend/src/components/Home.jsx`
- Line 56: Business name "LuxCut Media"
- Line 402: WhatsApp number
- Line 382: Email address
- Lines 53, 77: Brand colors (orange-rose gradient)

### 3. Styling
**File:** `frontend/src/index.css`
- Colors, fonts, global styles

## 🎨 Current Design

- **Colors:** Orange to Rose gradient (modern & creative)
- **Sections:** Hero, Services, Portfolio, Testimonials, About, Contact
- **Features:** 
  - Responsive design (mobile + desktop)
  - Portfolio filtering by category
  - Smooth scroll navigation
  - WhatsApp & Email contact buttons

## 📱 Current Contact Info

- **WhatsApp:** +91 98152 35805
- **Email:** editor@example.com (placeholder - update this!)

## 🔧 Technologies Used

- **Frontend:** React, TailwindCSS, Shadcn UI
- **Backend:** Python, FastAPI, MongoDB
- **Icons:** Lucide React
- **Deployment:** Ready for Emergent, Vercel, or Netlify

## 📦 What's Included

✅ Complete source code
✅ All UI components
✅ Mock data for testing
✅ Responsive design
✅ Deployment ready

## 🎯 Next Steps

1. **Update Content:**
   - Edit `frontend/src/mock.js` with your real projects
   - Update email in `Home.jsx`

2. **Add Admin Panel:**
   - Build backend to manage content
   - Add authentication
   - Create dashboard

3. **Deploy:**
   - Deploy on Emergent (50 credits/month)
   - Or use Vercel/Netlify for frontend
   - Connect custom domain

## 💡 Tips for Customization

### Change Colors
Find and replace in `Home.jsx`:
- `from-orange-500 to-rose-500` → Your gradient colors
- `orange-600` → Your hover color

### Add More Services
Edit `mock.js`:
```javascript
{
  id: 7,
  title: "Your New Service",
  description: "Description here",
  icon: "video"  // Choose from iconMap
}
```

### Add Portfolio Items
Edit `mock.js`:
```javascript
{
  id: 7,
  title: "Project Name",
  category: "Commercial",
  thumbnail: "https://your-image-url.com/image.jpg",
  duration: "3:45",
  description: "Project description"
}
```

## 🆘 Need Help?

- Contact Emergent support for deployment help
- Edit `mock.js` for quick content changes
- The website is fully functional as-is!

## 📄 License

This website is yours to use, modify, and sell to clients!

---

**Built with ❤️ by Emergent AI**
