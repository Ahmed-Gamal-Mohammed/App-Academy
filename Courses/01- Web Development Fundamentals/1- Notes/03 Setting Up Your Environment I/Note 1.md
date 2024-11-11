- *cd + name of directory* , cd is is shortcut for (**changing directory**) == this is the first command 
- *ls* for list all files and folders in the current Directory
- *pwd* ==> print Working Directory ---> 
- *cd ..* ==> for going one back level on the directory 
- *cd + directory name / file into the directory* ==> it's go into the directory and choose the file you chose to go into 
	- ex .. *cd desktop/AhmedFiles* ==> it's go into desktop directory and go into AhmedFiles 
- *clear* ===> clear the terminal from any command's written 
- **Shell** is a program where u type commands
- **File System**  Is The part of the operating system responsible for managing files and directories
	- The file system organizes and keeps track of your files
- To change the present working directory to the top-most directory, known as the **root directory**, type `cd /`. That means "change directory to the directory named '/'". Because the directory path that you're changing to begins with "/", that is an **absolute path**
	- 	```
	appacademy@DESKTOP-MUCKO9F:~$ cd /
	appacademy@DESKTOP-MUCKO9F:/$```
	- Notice that the directory portion of the prompt changed from "~" (which is a nickname for your "home directory") to "/" (which is the name of the "root directory").- 
- `ls -F`, now. Look at the difference of the output. All of the names that are directories contained in the present working directory now have a slash after their names. If you have any files that are executable (that you can run them), then those files have an asterisk "*" after their names. On Ubuntu for Windows, here's what the output looks like.
	- ````
	appacademy@DESKTOP-MUCKO9F:/$ ls -F
	bin/    boot/   dev/  etc/   home/  init*  lib/
	lib64/  media/  mnt/  opt/   proc/  root/  run/
	sbin/   snap/   srv/  sys/   tmp/   usr/   var/```	
- Any extra instructions that you give to a command that begins with a dash like "-F" is called a **flag**The most common flags for `ls` are
	- `-a` which means do not ignore entries that begin with "."
	- `-l` which tells the command to show lots of information about each entry
	- `-F` which appends an indicator to inform you of the kind of entry it is
- `cd ~` and it will change the present working directory from wherever you are to your home directory.
- **mkdir** To create a directory, you will use the "make directory" command
	- **mkdir "prep-work"
- In Unix-like systems, the word "file" has two meanings. It can mean the collection of data that is some information, like an image or a spreadsheet. It also is a generic term for any entry in the "file system".
- ## Good names for files and directories

	Complicated names of files and directories can make your life painful when working on the command line. Here are a few useful tips for the names of your files.

	- **Don’t use spaces**: Spaces can make a name more meaningful, but since spaces are used to separate arguments on the command line it is best practice to avoid them in names of files and directories. It is generally better use - or _ instead (e.g. north-pacific-gyre/ rather than north pacific gyre/).
	- **Don’t begin the name with - (dash)**: Commands treat names starting with - as options.
	- Stick with letters, numbers, . (period or ‘full stop’), - (dash) and _ (underscore).
- **`code notes.txt`** This should open Visual Studio Code with an empty tab with the name "notes.txt" in it.
- You use the `mv` command which means "move". It takes two arguments: the file that you want to move, and where you want to move it.
	- ```mv notes.txt my-notes.txt```
- f you want to move your notes out of the "prep-work" directory? You want to create a "notes" directory in your home directory and move "my-notes.txt" into the new "notes" directory _without changing the present working directory_! You can do that.
	This will be a two step process. Think about how you can use the home directory shortcut "~" and relative paths.
	1. Create a new directory named "notes" as a sub directory of your home directory.
	2. Move the file from this location to the newly-created "notes" directory.
- ## Copying files and directories
	The `cp` command works very much like `mv`, except it copies a file instead of moving it.
- ## Removing files
	The command to remove a file is `rm`, short for "remove". it's for removing just files not folders or Directories
- Try it! Use `rm -i` to remove a file you just created, and see the confirmation prompt.
- **rmdir** remove the folder or directory
- `rm -rf /tmp` The command would remove "/tmp" without confirmation which is why `rm -rf «path»` is a very dangerous command.
- `mv Documents/ Backup/` The command essentially renames the directory.
- `ls` by default lists the "visible" contents of a directory. On Unix-like systems, "visible" means that the file or directory name does not begin with a period.
---

