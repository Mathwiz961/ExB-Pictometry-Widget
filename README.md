# ExB-Pictometry-Widget
<h2>A widget to add to Experience Builder Dev ed that opens Pictometry to a point clicked on the associated map</h2>

This widget was created in Visual Studio Code using Typescript and jimu-core.  
<b>You must have a Pictometry API to use this code.</b>  The API used in the code is for Palm Beach County Florida only.  If you do not change this, Pictometry for points outside Palm Beach County will not open.
<br/><b>To change to your API open the widget.tsx file located in Pictometry\src\runtime and change this portion of the URL on line 22 (https://maps.co.palm-beach.fl.us/) to corrospond to your API url.</b>

1.  Copy the entire Pictometry folder to Your ExB root folder\client\your_extensions\widgets.
2.  Change the URL on line 22 in Pictometry\src\runtime\widget.tsx to your Pictometry URL.
3.  If the client is running, stop the client (control C) and restart (npm start) and the widget should be available to add to an experience builder project.
4.  To use the widget, drag it to your ExB project, and in the settings choose a map widget to associate with the widget.

    a. When the "activate" button is clicked, a click on the map will open Pictometry in a separate browser window.
        
    b. Click the button to "deactivate" and normal mouse click function will resume.
