import * as THREE from 'three';
import { RenderService } from './render.service';
export declare class MyRenderService implements RenderService {
    private axesHelper;
    createObjects(scene: THREE.Scene, renderer: THREE.WebGLRenderer, canvas: HTMLCanvasElement, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight): void;
    renderObjects(scene: THREE.Scene, renderer: THREE.WebGLRenderer, canvas: HTMLCanvasElement, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight): void;
}
