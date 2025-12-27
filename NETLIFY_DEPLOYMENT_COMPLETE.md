# Complete Netlify Deployment Guide with Railway Backend

This guide will help you deploy your video meeting frontend to Netlify and connect it to your Railway backend.

## Prerequisites

- ✅ Backend already deployed on Railway at: `web-production-85f33.up.railway.app`
- ✅ Git repository (GitHub, GitLab, or Bitbucket)
- ✅ Netlify account (free tier works fine)

---

## Step 1: Prepare Your Repository

Make sure your code is committed and pushed to your Git repository:

```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

---

## Step 2: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended)

1. **Go to [Netlify](https://app.netlify.com) and sign in**

2. **Click "Add new site" → "Import an existing project"**

3. **Connect your Git repository**
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select your `video-meet` repository

4. **Configure build settings:**
   - **Base directory:** Leave empty (root directory)
   - **Build command:** `cd stream && npm install && npm run build`
   - **Publish directory:** `stream/dist`
   
   ⚠️ **Important:** These settings should already be in your `netlify.toml` file, so Netlify will auto-detect them.

5. **Click "Show advanced" and add environment variable:**
   - Click "New variable"
   - **Key:** `VITE_API_URL`
   - **Value:** `https://web-production-85f33.up.railway.app`
   - Click "Save"

6. **Click "Deploy site"**

### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Navigate to your project root:**
   ```bash
   cd C:\Users\Muyideen.Jsx\Desktop\WorkSpace\My websites\video-meet
   ```

4. **Initialize Netlify (if first time):**
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Follow the prompts

5. **Set environment variable:**
   ```bash
   netlify env:set VITE_API_URL https://web-production-85f33.up.railway.app
   ```

6. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

---

## Step 3: Verify Environment Variable

After deployment, verify the environment variable is set:

1. Go to your site dashboard on Netlify
2. Navigate to **Site settings** → **Environment variables**
3. Confirm `VITE_API_URL` is set to `https://web-production-85f33.up.railway.app`

---

## Step 4: Test Your Deployment

1. **Visit your Netlify site URL** (e.g., `https://your-site-name.netlify.app`)

2. **Test the connection:**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Try creating a meeting
   - Check for any API errors

3. **Verify API calls:**
   - Go to Network tab in DevTools
   - Look for requests to `web-production-85f33.up.railway.app`
   - They should return successful responses (200 status)

---

## Step 5: Update Backend CORS (If Needed)

If you encounter CORS errors, make sure your Railway backend allows requests from your Netlify domain:

1. **Check your backend `server.js` file:**
   - It should have `cors()` middleware enabled
   - Socket.io CORS is already configured to allow all origins (`origin: "*"`)

2. **If you want to restrict CORS to your Netlify domain:**
   - Update the CORS configuration in `server/server.js`
   - Add your Netlify URL to allowed origins

---

## Configuration Files

### `netlify.toml` (Already configured)
```toml
[build]
  publish = "stream/dist"
  command = "cd stream && npm install && npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### `stream/public/_redirects` (Already configured)
```
/*    /index.html   200
```

### Environment Variable
- **Variable Name:** `VITE_API_URL`
- **Value:** `https://web-production-85f33.up.railway.app`

---

## How It Works

1. **Build Process:**
   - Netlify runs `cd stream && npm install && npm run build`
   - This creates the production build in `stream/dist/`

2. **Environment Variables:**
   - `VITE_API_URL` is injected during build time
   - The frontend uses this to connect to your Railway backend

3. **Routing:**
   - The `_redirects` file ensures all routes serve `index.html`
   - This allows React Router to handle client-side routing

4. **API Connection:**
   - Frontend makes API calls to: `https://web-production-85f33.up.railway.app/api/*`
   - Socket.io connects to: `https://web-production-85f33.up.railway.app`

---

## Troubleshooting

### Issue: API calls failing with CORS errors

**Solution:**
- Check that your Railway backend has CORS enabled
- Verify the backend URL is correct
- Check browser console for specific error messages

### Issue: Socket.io connection failing

**Solution:**
- Verify `VITE_API_URL` is set correctly in Netlify
- Check that the backend URL uses `https://` (not `http://`)
- Ensure Socket.io server is running on Railway

### Issue: Routes showing 404 errors

**Solution:**
- Verify `_redirects` file exists in `stream/public/`
- Check `netlify.toml` has the redirects configuration
- Redeploy the site

### Issue: Environment variable not working

**Solution:**
- Make sure variable name is exactly `VITE_API_URL` (case-sensitive)
- Vite environment variables must start with `VITE_`
- Redeploy after adding/updating environment variables
- Check build logs in Netlify dashboard

### Issue: Build failing

**Solution:**
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Netlify uses Node 18 by default)
- Check for any TypeScript or linting errors

---

## Custom Domain Setup (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow Netlify's DNS instructions
5. Wait for DNS propagation (can take up to 48 hours)

---

## Continuous Deployment

Netlify automatically deploys when you push to your main branch:

1. Make changes to your code
2. Commit and push to Git:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
3. Netlify will automatically build and deploy

---

## Monitoring

- **Build logs:** Available in Netlify dashboard under "Deploys"
- **Function logs:** If using Netlify Functions
- **Analytics:** Available in Netlify dashboard (may require upgrade)

---

## Quick Checklist

- [ ] Code pushed to Git repository
- [ ] Netlify site created and connected to repository
- [ ] Environment variable `VITE_API_URL` set to `https://web-production-85f33.up.railway.app`
- [ ] Build settings configured (auto-detected from `netlify.toml`)
- [ ] Site deployed successfully
- [ ] Tested creating a meeting
- [ ] Tested joining a meeting
- [ ] Verified Socket.io connection works
- [ ] No CORS errors in browser console

---

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Netlify build logs
3. Check browser console for errors
4. Verify Railway backend is running and accessible

---

## Summary

Your frontend is now deployed on Netlify and connected to your Railway backend at `web-production-85f33.up.railway.app`. The app should work seamlessly with:
- ✅ API calls to Railway backend
- ✅ Socket.io real-time connections
- ✅ React Router client-side routing
- ✅ Automatic deployments on Git push

Happy video meetings! 🎥✨

