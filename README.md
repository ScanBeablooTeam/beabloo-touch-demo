# Beabloo Touch Screen Demo

This repo can be used to demo a basic touch screen app on the Beabloo platform. </br>
Clone the repo and run the build script `npm run build` (you must have NodeJS installed on your system).

---

## Zip up files
After running the `build` script you should have a /build directory. Zip up the continence of the folder.

## Upload to Beabloo
Now log into the [cms](https://cms.beabloo.com) and navigate to an orginisation of your choice. Go to Library > HTML app and upload the app. Take note of the name you give it and try not to include spaces etc... A good example name would be: `beabloo-testing-app`.

## Beabloo configuration
Once you have upload the app you need to make a free configuration so that the beabloo player knows where it lives. Go to Content > Advanced content customization. </br>

Create a new Free configuration called `html`. Add 3 variables as follows

| Name       | Type      | Value                                                                 |
|------------|-----------|-----------------------------------------------------------------------|
| autoResume | Text      | false                                                                 |
| time       | Text      | 30000                                                                 |
| url        | Text      | http://localdevice.beabloo.com:8081/html/clientapps/NAME_OF_YOUR_APP/ |
> The `time` variable doesn't really matter. it just needs to be there.

## Template setup 
Now that you have uploaded the app and set up a config for it. You need to make a template so that the app can be loaded on interaction with the screen. You can also skip this step and just load the app as is by creating a program with just the app in the content. 

Go to an existing template as you normal would or copy and old on and set it up as normal. Got to the advanced editor and add the following XML

```XML
 <ACTION ID="interactiveLayer1" SRC="http://localdevice.beabloo.com/widgets/InteractiveLauncher/InteractiveLauncher.swf" CLASS="swf">
    <param value="''" name="areaText"/>
    <param value="'html'" name="widgetKey"/>
    <posX>0</posX>
    <posY>0</posY>
    <maxWidth>1080</maxWidth>
    <maxHeight>1920</maxHeight>
    <mantProp>false</mantProp>
    <showDelay>0</showDelay>
    <hideDelay>0</hideDelay>
</ACTION>
```

Add this `Action` block to be the highest in the document. This will put an invisible layer over the content and trigger the app when touched. 

---

Use this repo an an example of how HTML apps work in Beabloo


