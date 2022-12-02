# [GSAP](https://greensock.com/) v3 Test Drive

<!-- ![GSAP Logo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seekicon.com%2Ffree-icon-download%2Fgreensock-icon_1.png&f=1&nofb=1&ipt=9c1fe75b0647c24f9b7a84305fa4f33a42fd053e7817ab4caf5ef3b50aa9a784&ipo=images) -->

![GSAP Logo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgreensock.com%2Fuploads%2Fmonthly_2020_03%2Ftweenmax.png.cf27916e926fbb328ff214f66b4c8429.png&f=1&nofb=1&ipt=f3f43e7c44d50daa7c699ba25087fee2141ba8e0a7ba5c9c0c68e1888b37877d&ipo=images)

<br>

## Installation

### CDN

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>GSAP Installation</title>
  </head>
  <body>
    <h1>Hello, World!</h1>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
    <script src="index.js" type="module"></script>
  </body>
</html>
```

`index.js`

```js
console.log({ gsap });
```

<br>

### NPM

`from console`

> npm install gsap

`index.js`

```js
import { gsap } from "gsap";
```

<br>

## Resources

[GreenSock](https://greensock.com/cheatsheet/) _cheat sheet_<br>
[GreenSock](https://greensock.com/docs/) _documentation_

<br>

## Concepts

### [Tween](https://greensock.com/docs/v3/GSAP/Tween)

You can think of a _Tween_ as a high-performance property setter.<br>
Common methods for creating a _Tween_ are as followed:

```js
gsap.to();
gsap.from();
gsap.fromTo();
```

#### [gsap.to()](<https://greensock.com/docs/v3/GSAP/gsap.to()>)

Defines the destination values.

```js
// Rotate and move elements with a class of "box"
// ("x" is a shortcut for a translateX() transform) over the course of 1 second.
gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
```

#### [gsap.from()](<https://greensock.com/docs/v3/GSAP/gsap.from()>)

Defines where the values should start and animates to the current state.<br>
_Ideal for animating objects onto the screen._

```js
// Animate ".class" from an opacity of 0 and a y position of 100 (like transform: translateY(100px))
// to the current values (an opacity of 1 and y position of 0).
gsap.from(".class", { opacity: 0, y: 100, duration: 1 });
```

#### [gsap.fromTo()](<https://greensock.com/docs/v3/GSAP/gsap.fromTo()>)

Defines both the starting and ending values.<br>
_As opposed to `to()` or `from()` which use the current state as either start/end._

```js
// Animate ".box" from an opacity of 0 to an opacity of 0.5
gsap.fromTo(".box", { opacity: 0 }, { opacity: 0.5, duration: 1 });
```

<br>

### [Timeline](https://greensock.com/docs/v3/GSAP/Timeline)

A _Timeline_ is a container of Tweens.<br>
It is a sequencing tool that allows you to position animations in a timely manner.

<br>

```js
const tl = gsap.timeline();

//sequenced one-after-the-other
tl.to(".box1", { duration: 2, x: 100 }) //notice that there's no semicolon!
  .to(".box2", { duration: 1, y: 200 })
  .to(".box3", { duration: 3, rotation: 360 });
```

<br>

Methods that control _Tweens_ and _Timelines_ include:<br>
[pause()](<https://greensock.com/docs/v3/GSAP/Tween/pause()>)<br>
[play()](<https://greensock.com/docs/v3/docs/v3/GSAP/Tween/play()>)<br>
[progress()](<https://greensock.com/docs/v3/GSAP/Tween/progress()>)<br>
[restart()](<https://greensock.com/docs/v3/GSAP/Tween/restart()>)<br>
[resume()](<https://greensock.com/docs/v3/GSAP/Tween/resume()>)<br>
[reverse()](<https://greensock.com/docs/v3/GSAP/Tween/reverse()>)<br>
[seek()](<https://greensock.com/docs/v3/GSAP/Tween/seek()>)<br>
[time()](<https://greensock.com/docs/v3/GSAP/Tween/time()>)<br>
[duration()](<https://greensock.com/docs/v3/GSAP/Tween/duration()>)<br>
[kill()](<https://greensock.com/docs/v3/GSAP/Tween/kill()>)

<br>

Reference the _Tween_ or _Timeline_ instance with a variable to control:

```js
//you only need to create a variable if you want to control it later...
const tween = gsap.to(...);
const tl = gsap.timeline(); //"tl" short for timeline
tl.to(...).to(...); //add animations.

//now we can control them...
tween.pause();
tween.timeScale(2); //double speed
tl.seek(3); //jump to 3 seconds in
tl.progress(0.5); //halfway through
```
