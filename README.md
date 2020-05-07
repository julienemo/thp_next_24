### Julie Keep

20200507 Julie Kwok

run `npm install` then `npm start` to see the result

_Uncomment `index.jsx` to inject some notes into browser_

* * *
#### Page behaviour

- [x] can see a list of notes on the left, with long notes chopped
- [x] can click on any note to see complete detail on the right, over flow is visible in scroll (just....don't click on any markdown test on the left yet...)
- [x] can click on new and write a new post and submit to save
- [x] can type in markdown and see live html effect
- [x] on submit, list on the left update automatically, last entry on top

- [ ] modify an existing note   

* * *
### Difficulties

1. Are we sure that event handling(with arguments other than `e` ) only pass from parent to child ? Not with one level in the middle?

2. How to remove the blue outline on a button when it is clicked ?

3. How to not trigger `overflow: scroll;` when there is no overflow yet ? 