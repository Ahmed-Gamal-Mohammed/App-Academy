- `git checkout -b "your branch name"`  If you need to make new branch 
- `git branch` show all available branches 
- When two branches are being merged, there may be changes to the same lines of code on both branches. In this case, Git needs to know which changes are final to finalize the merge, and will block the merge until it has been resolved.
- `git push origin --delete <branch_name>` **Delete a remote branch**:
- `git branch -D <branch_name>` This deletes the branch if it has been merged. If the branch hasn't been merged, you'll need to use the `-D` flag to force the deletion:
- `git branch -d <branch_name>`  Delete a local branch
- ## Resolving via the command line
	- After merging in `fourth-branch` to master in GitHub, go back to your Terminal and checkout to `main`. **Note**: `third-branch` should have a PR open but should NOT be merged in yet.
	- Right now, `main` is still in its original state so perform a pull:
	- `git pull origin main`
	- You should have the changes from merging in `fourth-branch` now. Next, you will merge in `third-branch` into master manually to trigger the merge conflict. To do this, run:
	- `git merge origin third-branch`
	- Immediately, you should see the following error:
		- `Auto-merging README.md
		- `CONFLICT (content): Merge conflict in README.md`
		- `Automatic merge failed; fix conflicts and then commit the result.``
	- VSCode conveniently comes with tooling to help you visualize which changes come from where! Simply select whichever option you want: `Accept Current Change`, `Accept Incoming Change`, or `Accept Both Changes` and VSCode will clean it up for you so that you can commit the correct changes.
	- Select `Accept Incoming Change` and you should see the markers disappear and only the line `# third-branch` remain. Save the changes, and then add/commit the changes to complete the merge. When that's done, don't forget to push the changes so that they're updated on the repository!

# Resolving common GitHub Problems 
---
1- Say you're preparing to commit some work and you instinctively ran `git add .` without checking `git status` beforehand and staged all changed files. Say you ended up adding a file with sensitive information inside that should not end up on a public repository.
To fix this, you can simply run the following command:
`git reset <file path>` ==> *This will unstage the file and you can commit as usual.*

## 2- Made a commit with mistakes
===========================================
`git reset` can do more than un-stage files; it can roll back entire commits. Say you didn't notice you `git add`ed a file and already committed. Worry not! It's not the end of the world (yet). If you haven't pushed the code, it won't be publicly viewable yet.

To roll back the last commit you just made, run the following command:

`git reset --soft HEAD~1`

This will un-commit the last commit and keep all the changes you made, just not staged and committed.

If you want to roll back the commit entirely and erase all the changes you made, run:

`git reset --hard HEAD~1`
Say you've massively screwed up and made multiple commits unchecked. To revert to a previous known commit, get the commit ID and run:

`git reset -hard <commit ID>`

---

## Can't switch branches due to uncommitted changes
==========================================================
Say you're working on a branch and realize you were supposed to make the changes on a different branch. When you try to checkout to the other branch, Git gives you the following error:

error: Your local changes to the following files would be overwritten by checkout:
        `<files that would be overwritten>`
Please commit your changes or stash them before you switch branches.
Aborting

One option would be to commit the changes as mentioned and then merge the current branch into the one you should've made the changes on. However, this is cumbersome and requires you to go through the risky process of merging and/or making a pull request.

Instead, you can use the following command to "stash" your changes:

`git stash`
This temporarily stores all your changes on modified or tracked files so that you can switch branches safely. Once you've switched to the branch where you want these changes actually made, you can run:

`git stash pop`
This brings in all the changes you made on the first branch. If you decide that you no longer want the stashed changes, you can just run:
`
`git stash drop`

---

