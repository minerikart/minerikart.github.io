import {k} from "./kabbomCtx.js";
import {scaleFactor} from "./constants.js";

k.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 952,
        "walk-down": {from: 952, to: 955, loop: true, speed: 8},
        "idle-side": 991,
        "walk-side": {from: 991, to: 994, loop: true, speed: 8},
        "idle-up": 1030,
        "walk-up": {from: 1030, to: 1033, loop: true, speed: 8},
    },
});

k.loadSprite("map", "./map.png");

k.setBackground(k.Color.fromHex("#311047"));

k.scene("main", async () => {
    const mapData = await (await fetch("./map.json")).json();
    const layers = mapData.layers;

    const map = k.make([
        k.sprite("map"),
        k.pos(0),
        k.scale(scaleFactor),
    ]);
});

k.go("main");
