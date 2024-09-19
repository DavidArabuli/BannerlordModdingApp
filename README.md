# React + Vite
First and final version of web-based modding app for a PC game M&B Bannerlord.

It allows you to modify unit`s skills and equipment (add or replace items) and generates ready to use XML file.

Currently it is online and is hosted here:
[https://bannerlord-modding-app.netlify.app/](https://bannerlord-modding-app.netlify.app/)

Using Bannerlord modding tools is extremely easy:

- Navigate to the unit you want to edit.
- Enter desired values in a skill box (from 0 to 999)
- If you wish to add or replace items - choose equipment roster (some units only have one roster), choose a slot appropriate to your desired item type, and choose new item from a dropdown menu. Proceed to another slot, next equipment roster or to another unit.
- When you are happy with your choices - click "submit and download XML" button.
- This will download an XML file, named "spnpccharacters.xml", on your computer.
- Navigate to \Mount & Blade II Bannerlord\Modules\SandBoxCore\ModuleData, and replace existing "spnpccharacters.xml" file with file produced by this app. I suggest backing up your original file, so that you can revert your changes.

Things To Know:

- The file you get is fully compatible with original vanilla Bannerlord.
- It was not tested with mods that heavily modify your original game files.
- It should work in most scenarios, unless you have directly removed some of the items or units, or changed id-s that are used in "spnpccharacters.xml".
- XML structure of original file is preserved.
- The only side-effect is that during conversion, "comments" from the original file are lost, but this does not affect your game whatsoever.
- Item0,1,2,3 - are slots for weapons and shields.
- All other have self-explaining names.

Plans For The Future:

As this purely frontend app is inherently limited by not being able to access file system and by some performance limitations, I will not update it with new features, instead I want to concentrate my efforts on creating a desktop modding app.
Desktop version will have advanced features, ability to make consecutive edits, modify items, party templates and some more.
