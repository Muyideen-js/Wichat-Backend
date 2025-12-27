# Quick Netlify Setup - Quick Reference

## 🚀 Fast Deployment Steps

### 1. Set Environment Variable in Netlify
```
Variable: VITE_API_URL
Value: https://web-production-85f33.up.railway.app
```

### 2. Deploy via Netlify Dashboard
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. **Add environment variable:** `VITE_API_URL = https://web-production-85f33.up.railway.app`
5. Click "Deploy site"

### 3. Build Settings (Auto-detected)
- **Build command:** `cd stream && npm install && npm run build`
- **Publish directory:** `stream/dist`

---

## ✅ Verification Checklist

After deployment, verify:
- [ ] Site is live on Netlify
- [ ] Environment variable `VITE_API_URL` is set
- [ ] Can create a meeting
- [ ] Can join a meeting
- [ ] No CORS errors in browser console
- [ ] Socket.io connection works

---

## 🔧 Current Configuration

- **Backend URL:** `https://web-production-85f33.up.railway.app`
- **Frontend:** Netlify (your-site.netlify.app)
- **API Config:** `stream/src/config/apiConfig.js` (already updated)
- **Netlify Config:** `netlify.toml` (already configured)
- **SPA Routing:** `stream/public/_redirects` (already configured)

---

## 📝 Important Notes

1. **Environment Variable:** Must be set in Netlify dashboard before first deployment
2. **HTTPS:** Backend URL uses `https://` (required for production)
3. **Auto-deploy:** Netlify will auto-deploy on every Git push to main branch
4. **CORS:** Backend already configured to allow all origins

---

## 🆘 Quick Troubleshooting

**CORS Error?** → Backend CORS is already configured, check Railway is running

**404 on Routes?** → `_redirects` file is in place, redeploy if needed

**API Not Working?** → Verify `VITE_API_URL` environment variable is set correctly

**Build Failing?** → Check Netlify build logs for specific errors

---

For detailed instructions, see: `NETLIFY_DEPLOYMENT_COMPLETE.md`

