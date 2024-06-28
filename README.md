# ExB-Pictometry-Widget
<h2>A widget to add to Experience Builder Dev ed that opens Pictometry to a point clicked on the associated map</h2>

This widget was created in Visual Studio Code using Typescript and jimu-core.  
<b>You must have a Pictometry API to use this code.</b>  The API used in the code is for Palm Beach County Florida only.  If you do not change this, Pictometry for points outside Palm Beach County will not open.
To change to your API open the widget.tsx file located in Pictometry\src\runtime and change this portion of the URL on line 22 (https://maps.co.palm-beach.fl.us/pol/polipa.aspx?POlocation=) to corrospond to your API url.
