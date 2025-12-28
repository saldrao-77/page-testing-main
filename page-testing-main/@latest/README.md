# page-testing (React + Vite)

This project is a small React app scaffolded with Vite. It includes a demo page at `src/PhoneDemoPage.jsx` and global styles in `src/styles.css`.

This README explains, step-by-step, how to run the site on your computer using PowerShell on Windows. The steps are written plainly so anyone (yes, even a toddler with help) can follow them.

---

## What you need (very simple)

- A computer running Windows.
- Node.js installed. We recommend Node 18 or 20 or newer.
	- To check if Node is installed, open PowerShell and type:

```powershell
node -v
```

	- If you see something like `v18.16.0` or `v20.6.0`, great — Node is installed.
	- If you see an error or nothing, go to https://nodejs.org and download the LTS version. Then repeat the `node -v` check.

---

## Where to run commands from (one place)

All commands must be run from the project folder. 

## Step 1 — Install the website's pieces (do this first)

1. Open PowerShell.
2. Make sure you are inside the project folder (see previous section).
3. Run this command to download and install everything the project needs:

```powershell
npm install
```

What this does: it reads `package.json` and installs the libraries the site needs.

If the command shows warnings that's usually fine. If it shows errors about permissions or network, try again or see the Troubleshooting section below.

---

## Step 2 — Start the development website (see it in your browser)

After `npm install` finishes, run this to start the dev server:

```powershell
npm run dev
```

What to expect:
- The terminal will print lines. Look for a line that says something like `Local: http://localhost:5173` (the port may be different).
- Open your web browser (Edge, Chrome, Firefox) and type the address shown (for example `http://localhost:5173`) in the address bar and press Enter.
- The site will load and you can click the button and try the form.

To stop the site, go back to the PowerShell window and press Ctrl+C. That stops the dev server.

If you want to use a different port (e.g., 3000), run:

```powershell
npm run dev -- --port 3000
```

---

## Step 3 — Make a production build (optional)

When you want to make files suitable for a real website (not for development), run:

```powershell
npm run build
```

This will create optimized files in a `dist` folder.

To preview the production build locally, run:

```powershell
npm run preview
```

Then open the `Local` URL the preview command shows in your browser.

---

## Where to change text and styles (very small guide)

- The page layout and form live in: `src/PhoneDemoPage.jsx`.
- The global CSS is in: `src/styles.css`.

If you change these files while `npm run dev` is running, Vite will usually update the browser automatically (hot-reload). If the browser doesn’t update, try pressing the browser Reload button.

---

## Troubleshooting (common problems and quick fixes)

- Problem: `node` not found or `node -v` doesn't show a version.
	- Fix: Install Node from https://nodejs.org (choose LTS) and restart PowerShell.

- Problem: `npm install` fails with network errors.
	- Fix: Try again. If it still fails, connect to a different network or run:

```powershell
npm cache clean --force
npm install
```

- Problem: The server starts but nothing appears in the browser.
	- Fix: Look at the terminal where `npm run dev` is running. Copy the `Local:` URL it prints and paste it into the browser (do not guess the port).

- Problem: Permission errors on Windows.
	- Fix: Try running PowerShell as Administrator (right-click PowerShell -> Run as administrator), then run `npm install` again.

- Problem: I pressed Ctrl+C and want to start again.
	- Fix: Run `npm run dev` again.

---

## Extra tips (small useful things)

- To open the project folder in Visual Studio Code from PowerShell:

```powershell
code .
```

	(This requires VS Code and the `code` command installed.)

- To run the dev server on a specific port, use the `--port` example above.

---

Thank you — happy testing!
