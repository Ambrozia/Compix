# Compix:
<br/>
### Compare dem px yo! 
<br/>
A tool for adding a mockup overlay to your browser based project to get it pixel perfect. 
<br/>
* Replaces the Chrome extension “Pixel Perfect”.
* Upload mockups once, they are automatically changed based on page.
* Only one set of mockups need to be uploaded for everyone on the project to use.
* Remembers position tweaks through refresh. Hallelujah! 
* Can't accidentally inspect the overlay. 
<br/>
<br/>
Dependancies: jQuery 
<br/>
<br/>
Requirements: 
* Each page to have a main container with the class of content followed by the page alias eg. `<div class="content home"></div>`. This is what we use to build the URL for the overlays.
* Folder in the root of your project called compix, which stores the mockup files.
* Mockups need to follow the correct name conventions eg. homeDesktop.jpg & homeTablet.jpg (can easily change file format in the source).
<br/>
<br/>
<br/>
Keyboard Commands:  
<br/>
Alt/Opt + C : Open Console  
ESC : Close Console  
<br/>
Alt/Opt + D : Load Desktop Overlay  
Alt/Opt + T : Load Tablet Overlay  
Alt/Opt + M : Load Mobile Overlay  
<br/>
Alt/Opt + X : Remove Overlay  
<br/>
<br/> 
<br/> 
<br/> 
<br/> 
<br/>
NB. Slightly incomplete. Need to add the ability to move from the left. 
Only tested with Chrome.
