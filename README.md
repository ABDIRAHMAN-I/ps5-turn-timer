# 🎮 PS5 Turn Timer

This project started as a simple Bash script I wrote while looking after my nieces as they took turns playing on the PS5. I was manually tracking their 6-minute playtimes and thought — why not automate it?

I then turned the idea into a web app to make it easier and more fun for them (and me 😄).

---

## 🔧 Features

### 🖥️ Web App Version (HTML/CSS/JS)
- 6-minute countdown timer
- Plays a fun sound when time is up
- Alert message prompts to pass the controller
- Automatically restarts the next round
- Simple, kid-friendly interface

### 🖥️ Bash Script Version
- Loops every 6 minutes
- Uses macOS system voice and sound
- Displays macOS notifications

---

## 📂 Folder Structure

```
ps5-turn-timer/
├── index.html           # Web version HTML
├── style.css            # Web version styling
├── script.js            # Web timer logic
├── Mario-coin-sound.mp3 # Fun sound file
├── timer.sh             # Bash version of the timer
├── makefile             # Shortcut to run the Bash timer
└── README.md            # You're here!
```

---

## 🚀 Run the Web App

You can [view the app here](https://yourusername.github.io/ps5-turn-timer) if deployed via GitHub Pages (see below).

Or open `index.html` in your browser.

---

## 🔁 Run the Bash Script (macOS only)

```bash
make timer
```

Make sure it’s executable:

```bash
chmod +x timer.sh
```

---

## 🌐 Deploy with GitHub Pages

Push your code to GitHub.

Go to **Settings > Pages**

Under **Source**, choose **main branch**, and **root folder**.

Done — your timer is now live at:

```
https://yourusername.github.io/ps5-turn-timer
```

---

## ✨ Why I Built This

I love solving real-world problems, even the small ones. This started with family and fun but became a neat little coding project that showcases automation, creativity, and full-stack development.

---

## 📸 Screenshot (Optional)

Add a screenshot of your app here.

---

## 📚 Tech Stack

- Bash
- HTML/CSS
- JavaScript
- macOS commands (afplay, say, osascript)

---

## ✅ Future Ideas

- Make it mobile-friendly
- Allow custom timer lengths
- Show turn counter
- Store player names

Thanks for checking this out! 🎉

---

## ✅ Want Me to Help You Deploy It on GitHub Pages Now?

Just let me know your GitHub repo name and username, and I’ll walk you through the last step.
