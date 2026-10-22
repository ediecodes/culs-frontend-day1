# The Little Herb Garden

A small website for day 1 of **Frontend Development**.

It is fixed by @ediecodes Edith Tembo

## What you need

- a GitHub account
- Git
- an editor
- a browser (Firefox recommended)
- [Node.js](https://nodejs.org/) (the LTS version), which brings `npx`

## Get your copy

1. **Fork** this repository to your GitHub account.
2. **Clone your fork**, not this repository:

   ```sh
   git clone https://github.com/<your-name>/culs-frontend-day1.git
   cd culs-frontend-day1
   ```

## Run it

Start a small web server in the project folder:

```sh
npx serve
```

The first time, `npx` asks whether to install `serve`. Answer `y`.

Then open the address it prints, usually <http://localhost:3000>.
Stop the server with `Ctrl+C`.

Do not open `index.html` by double-clicking it. A `file://` page is not the Web.

## Your mission

Something is wrong. Several things, in fact.

1. Inspect before you change anything: the page, the Console, the Network panel, the Inspector.
2. Pick one problem and find out why it happens.
3. Fix it, reload, verify.
4. Commit that one fix, with a message that says what you fixed.
5. Repeat.

You are done when:

- the Console shows no unexplained errors
- the Network panel shows no missing files
- every link on the page goes where it says
- `git status` is clean, and `git push` has sent your commits to GitHub

## The project

```text
index.html    the page
style.css     how it looks
app.js        what it does
data/         the herbs, as JSON
images/       the logo and a picture
```

## Day 3: Interactive herb details

The website displays one herb at a time. Enter a herb name in the form and select **Show herb**. You can also open a specific herb using a URL hash, for example `index.html#basil`.

### Herb data

Each herb has its own JSON file inside the `data/` directory. The filename must match the herb name in lowercase.

Examples:
- `data/basil.json`
- `data/rosemary.json`
- `data/chives.json`

Each file contains one JSON object with these four required properties:

| Property | Description | Example |
|---|---|---|
| `name` | Common name of the herb | `"Basil"` |
| `latin` | Scientific name | `"Ocimum basilicum"` |
| `use` | Description of common uses | `"Tomatoes, pesto and anything summery."` |
| `life` | Life cycle | `"annual"` |

Example of a complete herb file:

```json
{
  "name": "Basil",
  "latin": "Ocimum basilicum",
  "use": "Tomatoes, pesto and anything summery.",
  "life": "annual"
}
```

To add another herb, create a JSON file in `data/` with the same four properties, then open it using a matching URL hash, such as `index.html#thyme`.

The website uses JavaScript `fetch()` to request the JSON file from the web server. If the herb cannot be loaded, the page displays an error message.