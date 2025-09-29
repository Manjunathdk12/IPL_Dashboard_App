```markdown
# IPL Dashboard App 🏏

An interactive IPL Dashboard built with **React.js** that displays IPL teams, their latest matches, and recent match details. The app consumes the [CCBP IPL APIs](https://apis.ccbp.in/ipl) and provides a seamless, responsive UI.

---

## 🚀 Features

- **Home Page**
  - Fetches and displays all IPL teams from the API.
  - Loader animation while fetching data.
  - Clickable team cards that navigate to their match details.

- **Team Matches Page**
  - Displays the team banner.
  - Shows the latest match details.
  - Lists recent matches with status and competing team information.
  - Loader animation while fetching data.
  - Dynamic gradient backgrounds based on team selection.

- **Responsive Design**
  - Fully optimized for mobile, tablet, and desktop views.

---

## 📂 Project Structure

```

src/
├── App.js
├── App.css
└── components/
├── Home/
│   ├── index.js
│   └── index.css
├── TeamCard/
│   ├── index.js
│   └── index.css
├── TeamMatches/
│   ├── index.js
│   └── index.css
├── LatestMatch/
│   ├── index.js
│   └── index.css
└── MatchCard/
├── index.js
└── index.css

````

---

## 🔗 API Endpoints

### Get All Teams
- **URL:** `https://apis.ccbp.in/ipl`
- **Method:** `GET`

**Response Example**
```json
{
  "teams": [
    {
      "name": "Royal Challengers Bangalore",
      "id": "RCB",
      "team_image_url": "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
    }
  ]
}
````

### Get Team Matches

* **URL:** `https://apis.ccbp.in/ipl/:id`
* **Example:** `https://apis.ccbp.in/ipl/KKR`
* **Method:** `GET`

**Response Example**

```json
{
  "team_banner_url": "https://assets.ccbp.in/frontend/react-js/kkr-team-img.png",
  "latest_match_details": {
    "umpires": "CB Gaffaney, VK Sharma",
    "result": "Kolkata Knight Riders Won by 7 wickets",
    "man_of_the_match": "Shubman Gill",
    "id": "1216545",
    "date": "2020-09-26",
    "venue": "At Sheikh Zayed Stadium, Abu Dhabi",
    "competing_team": "Sunrisers Hyderabad",
    "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.svg",
    "first_innings": "Sunrisers Hyderabad",
    "second_innings": "Kolkata Knight Riders",
    "match_status": "Won"
  },
  "recent_matches": [
    {
      "id": "1216540",
      "date": "2020-10-12",
      "venue": "At Sharjah Cricket Stadium, Sharjah",
      "competing_team": "Royal Challengers Bangalore",
      "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/2/2a/Royal_Challengers_Bangalore_2020.svg",
      "result": "Royal Challengers Bangalore Won by 82 runs",
      "man_of_the_match": "AB de Villiers",
      "first_innings": "Royal Challengers Bangalore",
      "second_innings": "Kolkata Knight Riders",
      "match_status": "Lost"
    }
  ]
}
```

---

## 🛠️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd IPL-Dashboard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Application**

   ```bash
   npm start
   ```

The app will run on [http://localhost:3000](http://localhost:3000).

---

## 🎨 Resources

* **Logos & Backgrounds**

  * [IPL Logo](https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png)
  * [Small Screen BG](https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png)
  * [Large Screen BG](https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png)

* **Colors**

  * Primary BG: `#1e293b`
  * Secondary BGs: `#a4261d`, `#5755a7`, `#d91c1f`, `#f7db00`, `#da237b`, `#13418b`, `#f26d22`, `#4f5db0`, `#0f172a`
  * Text: `#ffffff`, `#18ed66`, `#e31a1a`

* **Font**

  * [Bree Serif](https://fonts.google.com/specimen/Bree+Serif)

---

## 📸 Screenshots

### Home Page

![Home Page](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-lg-output.png)

### Team Matches Page

![Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-lg-output-v2.png)

---

## ⚡ Tech Stack

* React.js
* React Router
* REST API
* CSS3 (Responsive Design)

---

## 🧑‍💻 Author

Developed with ❤️ using React.js

---

```
```
