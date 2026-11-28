# Korean Fried Chicken Recipe UI

A small, dependency-free recipe page for crispy Korean fried chicken. It lets visitors change the serving count, recalculates the ingredient quantities, and switches between the ingredients and method on narrow screens.

## Requirements

- A modern web browser.
- Visual Studio Code with the Live Server extension for the recommended local preview. No Node.js, package manager, or environment variables are required.

## Run locally

Clone the repository and open the project folder in Visual Studio Code:

```sh
git clone https://github.com/ThienTimothy-Nguyen/recipe-ui.git
cd recipe-ui
```

In VS Code, open `index.html`, right-click in the editor, and select **Open with Live Server**. The page opens in your browser and refreshes as you save changes.

Alternatively, from the project root you can start Python's built-in static server:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). On Windows, use `py -m http.server 8000` if `python3` is not available. Stop the server with `Ctrl+C`. You can also open `index.html` directly in a browser; the page does not require a build step.

## Use the page

- Use the `+` and `−` buttons or edit the serving field. The minimum is one serving; a blank or lower value is reset to one.
- Ingredient quantities are recalculated from the one-serving amounts and displayed to one decimal place.
- Below 630 px, use the Ingredients and Method buttons to switch between the two sections. At wider sizes, both sections are shown. Resizing preserves the selected section when returning to the narrow layout.
- When ingredient quantities change, the page updates a status message intended to be announced by assistive technology.

## Environment variables

None. The recipe data and page behavior run entirely in the browser.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Recipe content and page controls |
| `style.css` | Layout, responsive presentation, and visual styling |
| `index.js` | Serving validation, ingredient scaling, responsive section display, and status updates |

## Design decisions and trade-offs

- **Use plain HTML, CSS, and JavaScript.** This keeps setup to a browser and a static server, with no build tools or dependencies. The trade-off is that the page has no component framework or reusable application structure.
- **Keep base quantities and units together in a JavaScript object.** This makes recipe quantities easier to edit in one place. The current rendering logic pairs those values with quantity elements by their order in the HTML, so changing the order in one place requires updating the other.
- **Use one `addVal(num)` function for both serving buttons.** Passing `-1` or `1` avoids separate increment and decrement functions. Serving validation remains centralized in `setVal(val)`; the ingredient updater also rejects values below one.
- **Use JavaScript to switch sections below 630 px.** The selected section is stored so it can be restored after resizing. On larger screens both sections are visible, so the mobile switcher is not needed to read the recipe.
- **Use a `role="status"` message for quantity updates.** This provides a polite live announcement without moving focus. Screen reader behavior should still be checked in the browsers and assistive technologies you intend to support.

## Limits and known gaps

- The page contains one hard-coded recipe. It does not load recipes from an API, save user changes, or support adding recipes through the interface.
- Ingredient quantities scale linearly from the one-serving values, and all results are rounded to one decimal place. The page does not adjust units or round quantities for practical cooking measurements.
- No automated test command is documented. For a manual check, try the serving buttons and direct input, check that the minimum stays at one, switch sections at a narrow width, resize to desktop and back, and confirm that the status message updates.