# INSTALLATION  #

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
####  Tabe of Contents: ####

- [Creating the skuid component pack](#creating-the-skuid-component-pack)
- [Making SF Static Resources](#making-sf-static-resources)
- [Using static resources in skuid](#using-static-resources-in-skuid)
- [User object and setup for the page](#user-object-and-setup-for-the-page)
- [Component setup](#component-setup)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Creating the skuid component pack  ##

1. Click on "configure" in the skuid header, then on the tab labeled "Component Packs".

2. By clicking the little + button on the table (not the button), create a new Component Pack. Enter the following information:
	- Name: *(case-sensitive!)*  
		`mblazonry`
	- Resource Name: *(case-sensitive!)*  
		`mBlazonryComponents`
	- Resource Namespace: leave blank 
	- Pages available in: Desktop Only
	- Load Order: 1 (default) 
 
3. It should look like this:

![Component Pack creation](https://d2r1vs3d9006ap.cloudfront.net/s3_images/1414429/RackMultipart20160512-49271-225l4n-Component_Pack_creation_inline.png)

You can modify the component pack to fit your specific namespace if need be.

## Making SF Static Resources ##

1. Go to the SF menu, search for "Static Resources".

2. Find the "mBlazonryComponents" resource, open it, click "Edit" and upload the .zip file from here. 
It should look like this: *(case-sensitive!)*

    ![Static Resource creation part 1](https://d2r1vs3d9006ap.cloudfront.net/s3_images/1414429/RackMultipart20160512-49271-225l4n-Component_Pack_creation_inline.png)

3. Create a new static resource with the following information: *(case-sensitive!)* 

	![Component Pack creation part2](https://d2r1vs3d9006ap.cloudfront.net/s3_images/1414423/RackMultipart20160512-102723-195rk6a-CounterStaticResource_inline.png) 

using the [.zip from here](https://drive.google.com/file/d/0B3NE4VBwMig0U05leEVRcy1yRms/view?usp=sharing).

## Using static resources in skuid ##

1. Open the skuid Page Builder on the page you want to add the timer (preferrably your org's master page).

2. Create the following JS Resource: 

	![Counter Static Resource JS](https://d2r1vs3d9006ap.cloudfront.net/s3_images/1414418/RackMultipart20160512-19050-ih8jsa-CounterStaticResourceJS_inline.png?1463011455)

3. And the following CSS Resource:

	![Counter Static Resource CSS](https://d2r1vs3d9006ap.cloudfront.net/s3_images/1414419/RackMultipart20160512-5944-iamf11-CounterStaticResourceCSS_inline.png?1463011489)

## User object and setup for the page  ##

1. The Timer component was designed to use standard "User" SF object with some added custom fields for persistency. Ours look like:

	![User Object Custom Fields](https://d2r1vs3d9006ap.cloudfront.net/s3_images/1414418/RackMultipart20160512-19050-ih8jsa-CounterStaticResourceJS_inline.png)

2. Our "CurrentUser" has those fields mapped like so: 

	![skuid CurrentUser Model fields](https://d2r1vs3d9006ap.cloudfront.net/s3_images/1414449/RackMultipart20160512-104995-mfm00b-Custom_user_fields_map_inline.png)
	
with the following condition: 

	![UserModel Condition](https://d2r1vs3d9006ap.cloudfront.net/s3_images/1414438/RackMultipart20160512-14020-x550fw-CurrentUser_Model_inline.png)
	
## Component setup  ##


1. Set the Timer's properties as appropriate for your situation.

2. Important: the "Actions" tab is where you will be tying the timer events in with Action Framework items. **Be sure** to fill those in and fire the events. 
ex: we have popups that display when the timer is started and stopped, inside of which we have buttons leveraging Action Framework to update other models and save the recorded start/end times.