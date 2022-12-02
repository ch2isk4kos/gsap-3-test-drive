# [GSAP](https://greensock.com/) v3 Test Drive

<!-- ![GSAP Logo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seekicon.com%2Ffree-icon-download%2Fgreensock-icon_1.png&f=1&nofb=1&ipt=9c1fe75b0647c24f9b7a84305fa4f33a42fd053e7817ab4caf5ef3b50aa9a784&ipo=images) -->

![GSAP Logo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgreensock.com%2Fuploads%2Fmonthly_2020_03%2Ftweenmax.png.cf27916e926fbb328ff214f66b4c8429.png&f=1&nofb=1&ipt=f3f43e7c44d50daa7c699ba25087fee2141ba8e0a7ba5c9c0c68e1888b37877d&ipo=images)

<br>

## Resources

[GreenSock](https://greensock.com/cheatsheet/) _cheat sheet_<br>
[GreenSock](https://greensock.com/docs/) _documentation_

<br>

## Concepts

### [Tween](https://greensock.com/docs/v3/GSAP/Tween)

You can think of a _Tween_ as a high-performance property setter.

<br>

Common methods for creating a _Tween_ are:

```js
gsap.to();
gsap.from();
gsap.fromTo();
```

<br>

#### `gsap.to()`

Defines the destination values.

```js
// Rotate and move elements with a class of "box"
// ("x" is a shortcut for a translateX() transform) over the course of 1 second.
gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
```
