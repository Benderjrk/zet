# The path matters

---

## When you add to your path where do you add it?

* Should you use `$PATH:/Users/`?
* Or should you use `/Users/:$PATH`? 

It's a good idea to put the new paths onto the end of the existing path.

## Why is it good to add new paths to the end?

This comes from where the filesystem will be looking for the scripts or binaries to run. So if you place the new path before the secure paths. You leave a point available where someone can run their `ls` or similar command before the actual secure system command.

