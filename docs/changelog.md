# Changelog

## 04-11-23

### Headlines

- Create new tasks now works fine
  - Name is mandatory, other values are optional
  - If console is open, console log will show you what values are being created
- Added a debug section
  - Pressing the log tasks button will console log all currently existing tasks in the task list

### Details

- General
  - Applied Prettier as default formatter on my IDE
- `index.html`
  - changed language from `en` to `en-uk`
  - Created Task Creation `form` element
  - Created debug button section to console log tasks without relying on list display in html
- `script.js`
  - Formatted code, comments & headers
  - Moved the ideas section into `ideas.md`
  - Created a task creation function that creates tasks as objects with several properties then pushes that task to taskList
  - Set list display `${task.name}` rather than $`{task}` as `task` is now an object
- created `normalize.css`
- created `dark.css`
  - temporary fix for my poor eyes
