import { Rectangle } from './Renderable/Rectangle';
import { Sprite } from './Renderable/Sprite';
import { Timeline } from './Timeline/Timeline';
import { TimelineInstance } from './Timeline/TimelineInstance';

export interface vec2 {
	x: number;
	y: number;
}

export interface _Color {
	[0]: number;
	[1]: number;
	[2]: number;
	[3]?: number;
}

export interface _Data {
    pos?: vec2;
    angle?: number;
    scale?: vec2;
    transformationPoint?: vec2;
    alpha?: number;
}

export type Matrix = Array<number> | Float32Array;

export type timeElement = Timeline | Sprite | Rectangle | TimelineInstance;

export interface timelineElement {
    width: number;
    height: number;
    padding: vec2;
    loop: boolean;
    duration: number;
}

export interface elementData {
    data?: _Data;
    to?: _Data;
    start?: number;
    duration?: number;
    continueFrom?: number;
    layer?: number;
}
