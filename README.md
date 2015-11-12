tsv
===
Tab-separated value plugin. Very basic, basically for copy & pasting data from a spreadsheet.

Does NOT:
- check for correct number of columns in each row
- look for any escape characters


Install
-------
```
jspm install github:wpf500/plugin-tsv
```

Usage
----
```
import data from 'data.tsv!tsv'
data.forEach(row => {
    console.log(row);
});
```
