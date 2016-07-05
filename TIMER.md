# mBlazonry's Timer Component#

Originally posted [here](https://community.skuid.com/skuid/topics/timer-component-time-tasks-with-hooks-on-action-framework-events) on the :octopus: skuid community. 

----------

The component runs as a two-part system and is intended to be placed in the header of an orgs' master page. 

The logic is handled by the Timer component in the mBlazonryComponents custom component pack, while the display is handled by our mB fork of [this jQuery-based counter](https://sophilabs.github.io/jquery-counter/). 

> Aside: we've had to modify the original counter from the link above because it wasn't working the way we wanted it to, and because we may choose to replace it with something better eventually. 

Custom logic controls the saving and updating of the various state variables and Datetimes, the events and invokes Action Framework actions that you select for when various events occur. The jQuery counter is responsible for displaying the time on the page visually. Each event can easily be hooked onto, and can be used to trigger action framework actions in the Timer's properties pane.

Please note: 

1 The timer is currently beta! We haven't tested it in all situations. One major limitation at this time is that you should really only have one timer placed on a given page. For issues & feedback, report to the issue tracker here. 
2) The actual *timer* styling is very limited. 
3) This is written strictly for Skuid 7.x (Banzai) and newer. 

## DEMOS:  ## 
(these are YouTube videos)

Part 1: the runtime!

[![Part 1: the runtime!](https://img.youtube.com/vi/k0yAfYj-HJI/maxresdefault.jpg)](https://youtu.be/k0yAfYj-HJI "Timer component - runtime demo!")

Part 2: the builder!

[![Part 1: the runtime!](https://img.youtube.com/vi/vJ2nSqk-kJs/maxresdefault.jpg)](https://youtu.be/vJ2nSqk-kJs "Timer component - builder demo!")


> ### [Setup Instructions Here](INSTALLATION.md) ###


Here's the XML to a [test skuid page](https://gist.github.com/aklef/fbf1fd4995e4d2bb25211410788f7f77) demonstrating the timer. To use it: complete the installation steps above, then create a new skuid page with the same title as the gist and copy/paste the XML shown there. 
(Dev note: for lots of nifty debug output if you change "Test" to "Debug" in the page title). 