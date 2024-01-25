# Ideas for ToDoodle

## Task Objects

### Get & Set

Embed functions inside task objects

```js
const task = {
  name: 'LX Bill',
  set taskName(newName) { this.name = newName; },
};

task.name; //returns 'LX Bill'
task.taskName = 'Pay EDF';
task.name; //returns 'Pay EDF'
```

We can use this for dynamic properties that might change based on vibes, like priority. This would also allow tracking of status changes etc dynamically. Probably also useful for habit tracking?

```js
const task = {
	priorityList: [1]
	set priority(newValue) {
		if (newValue != this.priority) {
			this.priorityList.push(newValue);
		}
	}
	get priority() { this.priorityList[priorityList.length - 1] }
}

task.priority; //returns 1
task.priority = 2; //pushes 2 to priorityList unless it was already 2
task.priority; //returns 2
task.priorityList; //returns [1, 2]
```
