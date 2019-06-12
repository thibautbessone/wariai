# Wariai

#### Shuffles randomly a list or pick an option among several weighted ones.

First, create a JSON string containing your options & weights following this pattern : 

```javascript
let obj = '[{ "option": "test1", "weight": 1},{ "option": "test2", "weight": 2},{ "option": "test3", "weight": 3},{ "option": "test4", "weight": 4}]';
```

Then, create the picker object : 

```javascript
let picker = new Picker(obj);
```

You can now pick an element or shuffle the list with the following code : 

```javascript
picker.pickOneWithWeight(); // Returns a random object from the list, taking weights into account
picker.getRandomizedList(); // Returns a randomly shuffled list of elements
```




