# Canvas Page View Analytics Summary
This project downloads the page view summary for each user in a course and outputs a CSV with the following headers:
* canvas_id: Canvas User ID.
* page_views: The number of page views of the user.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for use with your own API tokens and Canvas domains.

### Prerequisites

1. **Install [Node 10 or greater](https://nodejs.org)**.
2. **Install [Git](https://git-scm.com/downloads)**.

### Host URL and Token setup
1. Create a `.env` file.
1. Generate Canvas API token and copy it to clipboard.
1. Add the following: `CANVAS_API_TOKEN={YOUR API TOKEN}` and `CANVAS_API_DOMAIN={YOUR API DOMAIN}`.
An example `CANVAS_API_DOMAIN` is `https://{school}.instructure.com/api/v1`

### Installation and execution of script

1. Clone this repo. `git clone https://github.com/ubccapico/canvas-page-view-analytics-summary`
1. Then cd into the repo. `cd canvas-page-view-analytics-summary`
1. Run the installation script. `npm install` (If you see `babel-node: command not found`, you've missed this step.)
1. Open `index.js` and supply the Canvas course IDs where it says `/* add Canvas course IDs here */`.
1. Run the script. `npm start`.
1. An `{Canvas user id}-pageviews.csv` file should be generated for each Canvas course ID.

## Authors

* [justin0022](https://github.com/justin0022) -
**Justin Lee** &lt;justin.lee@ubc.ca&gt;

## License

This project is licensed under the GNU General Public License v3.0.
