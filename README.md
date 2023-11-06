# ToDoodle

## Links

### Repo Docs

- [Ideas Scratchpad](docs/ideas.md)
- [Pseudocode Scratchpad](docs/pseudo.js)
- [Links to Utilities & Inspiration](docs/utilities.md)

### Resources

- [The Advantages of the Template Element](https://codepen.io/oliverjam/pen/yLNEOQO?editors=1010)

## How It Works

### Current Version

```mermaid
    graph TB
    subgraph user[User Interface]
        userListFilter[User Filters List]:::input
        userListDisplay[Tasklist Displayed]:::output
        userListSort[User Sorts List]:::input

        userTaskAdd[User Adds Task]:::input
        userTaskComplete[User Completes Task]:::input
        userTaskDelete[User Deletes Task]:::input
    end

    subgraph code[Back End]
        jsTaskAdd[Add Task to List]
        jsTaskAppend[Append Task Div]:::dom
        jsTaskCreate[Create Task Object]:::data
        jsTaskComplete[Change Div Icon]:::data
    end

    null["No Code"]

    jsTaskAdd -.-> null
    jsTaskAppend ---> userListDisplay
    jsTaskCreate ---> jsTaskAdd
    jsTaskCreate ---> jsTaskAppend
    jsTaskComplete ---> userListDisplay
    userListDisplay ---> userListFilter
    userListDisplay ---> userListSort
    userListDisplay ---> userTaskComplete
    userListDisplay ---> userTaskDelete
    userListFilter ---> null
    userListSort ---> null
    userTaskAdd ---> jsTaskCreate
    userTaskComplete ---> jsTaskComplete
    userTaskDelete ---> null

    classDef input fill:#9999ff99
    classDef data fill:#ff99ff99
    classDef dom fill:#ffff9999
    classDef output fill:#99ff9999
```

### End Goal

```mermaid
    graph TB

    placeholder["Placeholder"]
```
