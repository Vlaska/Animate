import { vec2, _Data } from '../types'

export class Data {
    pos: vec2;
    angle: number = 0;
    scale: vec2;
    transformationPoint: vec2;
    alpha: number = 1;

    constructor(data: _Data | null) {
        this.pos = { x: 0, y: 0 };
        this.scale = { x: 1, y: 1 };
        this.transformationPoint = { x: 0, y: 0 };

        if (data) {
            if (data.pos){
                if (data.pos.x) {
                    this.pos.x = data.pos.x;
                }
                if (data.pos.y) {
                    this.pos.y = data.pos.y;
                }
            }
            this.angle = typeof data.angle === 'undefined' ? 0 : data.angle;
            if (data.scale) {
                if (data.scale.x) {
                    this.scale.x = data.scale.x;
                }
                if (data.scale.y) {
                    this.scale.y = data.scale.y;
                }
            }
            if (data.transformationPoint) {
                if (data.transformationPoint.x) {
                    this.transformationPoint.x = data.transformationPoint.x;
                }
                if (data.transformationPoint.y) {
                    this.transformationPoint.y = data.transformationPoint.y;
                }
            }
            this.alpha = typeof data.alpha === 'undefined' ? 1 : data.alpha;
        }
    }

    getData(to: Data, progress: number) {
        return {
            pos: {
                x: this.pos.x + (to.pos.x - this.pos.x) * progress,
                y: this.pos.y + (to.pos.y - this.pos.y) * progress
            },
            angle: this.angle + (to.angle - this.angle) * progress,
            scale: {
                x: this.scale.x + (to.scale.x - this.scale.x) * progress,
                y: this.scale.y + (to.scale.y - this.scale.y) * progress,
            },
            transformationPoint: {
                x: this.transformationPoint.x + (to.transformationPoint.x - this.transformationPoint.x) * progress,
                y: this.transformationPoint.y + (to.transformationPoint.y - this.transformationPoint.y) * progress,
            },
            alpha: this.alpha + (to.alpha - this.alpha) * progress,
        }
    }
}