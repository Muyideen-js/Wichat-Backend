# Fix Railway Build Error

## Problem
You're seeing: "Error creating build plan with Railpack"

## Solution

### Step 1: Set Root Directory in Railway

1. **Go to your Railway project dashboard**
2. **Click on your service** (the one that's failing)
3. **Go to the "Settings" tab**
4. **Scroll down to "Root Directory"**
5. **Enter:** `server`
6. **Click "Save"**

### Step 2: Verify Configuration

Make sure Railway can see:
- ✅ `server/package.json` exists
- ✅ `server/server.js` exists
- ✅ Root directory is set to `server`

### Step 3: Redeploy

1. **Go to "Deployments" tab**
2. **Click "Redeploy"** or push a new commit
3. **Watch the build logs**

### Alternative: Deploy Server Folder Only

If the above doesn't work, you can:

1. **Create a separate GitHub repo** with just the `server` folder contents
2. **Deploy that repo to Railway** (no root directory needed)
3. **Use that server URL** for your frontend

### Quick Check

Run this in your terminal to verify server structure:
```bash
cd server
ls -la
```

You should see:
- package.json
- server.js
- streamToken.js
- zegoToken.js

### Still Having Issues?

1. **Check Railway logs** - Look for specific error messages
2. **Verify Node.js version** - Add `NODE_VERSION=18` in Railway Variables
3. **Try Render instead** - Sometimes Render is easier for subdirectory deployments

