
![MBB](https://github.com/user-attachments/assets/4eb4e5ff-71f0-483b-9b69-c8a97e6cf29e)

**"Mount and Blade II: Bannerlord" modding web app for PC.**

App allows you to modify unit`s skills and equipment (add or replace items) and generates ready to use XML file, which you can use to replace original game file.

Modding "MB:Bannerlord" manually is a very tiresome and tedious process, and it is very easy to make critical mistakes, and modding multiple units in one go is an extremely annoying undertaking. 
This app solves that problem for modders\players, and offers easy to use, easy to understand interface, with all capabilities you might need.
 **Requires no knowledge of "MB2:B" modding!**
Even if you are an absolute beginner, you can use it easily.

**Currently it is online and is hosted here:**
[https://bannerlord-modding-app.netlify.app/](https://bannerlord-modding-app.netlify.app/)

**Using Bannerlord modding tools is easy:**

- Follow the link, press "Load app content", and wait till the app loads.
- Navigate to the unit you want to edit.
- Enter desired values in a particular skill box (from 0 to 999)
- If you wish to add or replace items - choose equipment roster (some units only have one roster), choose a slot appropriate to your desired item type, and choose new item from a dropdown menu. Proceed to another slot, next equipment roster or to another unit.
- When you are happy with your choices - click "submit and download XML" button.
- This will download an XML file, named "spnpccharacters.xml", on your computer.
- Navigate to \Mount & Blade II Bannerlord\Modules\SandBoxCore\ModuleData, and replace existing "spnpccharacters.xml" file with file produced by this app. 

> [!IMPORTANT]
> I suggest backing up your original file, so that you can revert your changes.

**Things To Know:**

- The file you get is fully compatible with original vanilla MB2:Bannerlord.
- It was not tested with mods that heavily modify your original game files.
- It should work in most scenarios, unless you have directly removed some of the items or units, or changed id-s that are used in "spnpccharacters.xml".
- XML structure of original file is preserved.
- The only side-effect is that during conversion, "comments" from the original file are lost, but this does not affect your game whatsoever.
- Item0,1,2,3 - are slots for weapons and shields.
- All other slots have self-explaining names.

