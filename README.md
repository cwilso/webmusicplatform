# Web Music Platform
This is a platform that provides an easy collaboration environment between Web Music applications, an development environment of Web Music, and an playground of Web Music on open web platform.

![Web Music Platfrom image](https://raw.github.com/yamaha-webmusic/WebMusicPlatform/master/images/WebMusicPlatform_Sample.png)

## Description
This platform manages connection between each **"Custom Element Node"** (both Audio and MIDI) and UI behavior.

(**Custom Element Node**: A script set of Web Audio and Web MIDI which developed as Polymer element. )

### Good thing to use this platform
 - this platform built on top of the Web Components and [Polymer](http://www.polymer-project.org/)
  - developers does NOT need to worry about conflict (e.g. class name, id name, method name and so on)
  - easy to add Custom Element Node on your environment
  - the Custom Element Nodes runs stand alone (e.g. embed on your Web page)

## Demo
[Web Music Platfrom](http://yamaha-webmusic.github.io/webmusicplatform/)  

##  Concept
Basic concept is almost same as [Web Audio Playground](http://webaudioplayground.appspot.com/) by Chris Wilson.  
Difference is Web Music Platfrom is supporting...

 - supports MIDI(input/output)
 - applied Web Components and Polymer

## Instructions for Users & Developers
### Users' instruction
 - [Tutorial](https://docs.google.com/document/d/1HyhPZdjDEGgbCCvprlfWsQ8ZCgcbZoR3HEmACrWyEJg/edit): Play audio file and display its waveform on oscilloscope.  

### Developers' instruction
 - [Tutorial](https://docs.google.com/document/d/13UAp3MAUnVQUoS7H-cYRWHM-j2gYq03HaL3eIuq6H7w/edit): Develop gain node and regist to the platform.
 ([Skelton template](https://github.com/yamaha-webmusic/webmusicplatform/blob/master/app/components/wm-skelton/wm-skelton_template.html), [Completed file](https://github.com/yamaha-webmusic/webmusicplatform/blob/master/app/components/wm-tutorial/wm-tutorialgain.html))
 - [API Document (Japanese)](https://yamaha-webmusic.github.io/webmusicplatform/app/components/wm-skelton/)

## Requirement
 - Web Server
 - Web Audio/MIDI readied Web Browser(e.g. [Google Chrome](https://www.google.co.jp/chrome/) )

## Setup Web Music Platform on your environment
1. Pull the repository
2. Copy them into your Web Server directory
3. Access the URL where you copied them  

## Contribution
**TBA**

## Licence
[MIT](https://raw.githubusercontent.com/yamaha-webmusic/WebMusicPlatform/master/LICENSE)

## Copyright
Copyright (c) 2014 Yamaha Corporation




