
Clean up your html by
```shell
find . -name "*.html" -print0 | xargs -0 djlint --reformat
```
