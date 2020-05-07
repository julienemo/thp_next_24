### Julie Keep

20200507 Julie Kwok

run `npm install` then `npm start` to see the result

_Uncomment `index.jsx` to inject some notes into browser_

* * *
#### Page behaviour

- [x] can see a list of notes on the left, with long notes chopped
- [x] can click on any note to see complete detail on the right, over flow is visible in scroll
- [x] can click on new and write a new post and submit to save
- [x] can type in markdown and see live html effect

- [ ] on submit, list on the left update automatically
- [ ] modify an existing note   

* * *
### Difficulties

1. How to update `content` when `form` is submitted ? 
- There is on level of component between these two components
- Passing event handlers with arguments two levels through results in "something is not a function" error

2. How to remove the blue outline on a button when it is clicked ?

3. How to not trigger `overflow: scroll;` when there is no overflow yet ? 