The BCMS dashboard provides a comprehensive view of all critical information and system functionalities. 

It displays a map of the area in which BCMS is installed and serves as the central hub for monitoring and managing bird activities and other relevant data.

# Several-areas version

If you have several areas to monitor within your site, you will first see a live map showing the location and activity of all cameras, deterrence systems and detections in the area.

# Single-area version

If you have a single area to monitor on your site, or if you have selected an area among several on your site, you will see a page with

# Live Cameras

- In this section (top left) you will see all the cameras in use in the area
- Clicking on each one will take you to the video viewer of the camera (see dedicated section)
- Camera protection – this is a function that was developed for a desert installations to protect cameras against sandstorms. To activate it the user needs to provide the wind direction. Once this is done, the system turns all cameras with their lens facing away from the wind and pointing downwards.

# Event Summary

- The event summary (bottom left) lists all events detected in the selected timeframe
- To select the timeframe, use the drop-down menu. The timeframe you select will also be reflected on the live map.
- For each event, you will see
    - Whether it took place in a Critical (red), Danger (yellow) or other (blue) sector.
    - The species of the detected specimen, if available, under “type”
    - The amount of specimens detected, broken down by flying and landed (on the ground) specimens.
- Clicking on an entry will select it and it will cause the live map to only show that event, instead of all the ones in the selected timeframe.

# Live map

- The live map displays the areas in which the system is installed, the location of the cameras and deterrence systems and the location of the events in the timeframe selected in the Event Summary. You can find details for cameras, deterrence systems and events in the dedicated sections below.
- You can move around the map and zoom in and out via standard commands (e.g. “pinch” or “drag” or via the buttons on the map itself)
- The letters and numbers in the top left corner indicate the sector of the area above which your mouse pointer is hovering
- In the top left corner, you will see an indication of the global risk index. This index updated every 15 minutes, aggregating all detection data to help determine necessary actions.
- Clicking on the three dots in the top-right corner will reveal a drop-down menu with 4 display options. These options are just graphic and do not change any functionality of the system.
    - Show grid: display the boundaries of the sectors used for detections and localisation of events.
    - Show cameras: displays the location and activity of the cameras installed in the area
    - Show sector gravities: colour-codes the gravity of each sector
    - Enable detection filters: if any detection filters have been installed or set up by managers, you’d see them here. Otherwise you will see no effect.

## Cameras

- On the map, provided that the option “Show Cameras” is active, you will see the location of all cameras in the selected area. These are the same cameras listed in the Live Cameras section in the top left area beside the map.
- When a camera is active, you will see it in orange, oriented in the actual direction in which it is pointed. You will also see an orange cone, showing the direction in which the camera is pointing in real time. If the camera has been programmed to move in real time, you will see both the icon and the cone move according to the camera’s real-time position.
- Clicking on a camera icon will give you the possibility to connect to the camera’s live feed via the Video Viewer.

## Deterrence Systems

- The BCMS system implements severa deterrence technologies to manage the presence of birds near critical aeras. The main deterrence devices include:
    - **Cannons**: Devices that emit loud noises to scare birds away.
    - **Mechanical Falcons**: Devices that mimic the movements of natural predators of birds, accompanied by pre-recorded sounds.
- Deterrence devices are represented on the map (dashboard) with colored circles: green (functional), red (communication or operational issues), and gray (inactive).
- The GPS position of the devices is automatically detected and displayed on the map.
- Devices can be moved to a virtual position on the map (generally at the top) if they are inactive or not receiving signals.
- Right-clicking on a device allows viewing details such as communication status, battery voltage, and remaining shots.

### **Automatic and Manual Operation**

1. **Automatic Control**:
    - **Automatic Activation**: Cannons fire automatically at regular intervals if they do not receive commands from the BCMS (fail-safe mode).
    - **Automatic Triggering**: The system can be configured to activate the cannons in response to specific detection conditions (e.g., presence of birds in flight or on the ground).
2. **Manual Control**:
    - **Manual Selection**: It is possible to select one or more deterrent devices and activate them manually with a right-click. Clicking on the deterrence system icon will select it, clicking on it again will deselect it, clicking several in a row will select several.
    - **Control Options**: Options include firing the cannon, activating the mechanical falcon, and emitting deterrent sounds.

### Canada-specific

- In Canada there are two deterrence systems based on gas cannons:
    - Land cannon
    - Floats (same cannon mounted on a float and are equipped with other devices, such as an electronic falcon and squawk box)
    - Both have a flasher, an orange light that flashes
- Based on parameters, they could activate automatically or semiautomatically.
    - For the manual command, select one or more cannons and right click
    - You will see a popup with two command options:
        - If I press falcon, the squawk also starts
        - If I press cannon, the flasher also starts

## Events

- The map will display all events that have taken place in the selected timeframe (see “event summary”).
- Left-clicking on an event will open the event video viewer
- Right-clicking on an event will display a summary of key data (e.g. local risk index, height distance) and to links: one to the event video viewer and one to the event edit page.
- All events are coded as follows:
    - Shape
        - A square icon indicates that the species has not been identified
        - A triangular icon indicates that the species has been identified
    - Direction
        - The system will indicate the direction of movement if you hover over the icon with the mouse pointer. The longer the displayed arrow, the faster the speed of movement at the time of detection. Usually if an arrow is displayed it means the specimen was flying – though it could have been walking.
    - Colour
        - Blue indicates low gravity
        - Yellow indicates medium gravity
        - Orange indicates high gravity
        - Red indicates very high gravity

### Event video viewer

- The event video viewer allows you to see the recording of any detection.
- This can be useful to verify what the detection looked like, and to manually edit it, should that be needed.
- On the left side of the screen you will see the recording of the identified specimen or specimens, highlighted via a overlapping square – “bounding box”.
- On the right side of the screen, the system will provide you with basic data (e.g. unique ID, Camera, positioning), as well as with a link to the Event Edit Log.
- The commands on the lower side of the column allow you to repeat the recording, edit its resolution or pause it.
