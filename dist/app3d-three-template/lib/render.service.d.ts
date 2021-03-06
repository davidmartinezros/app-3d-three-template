export declare abstract class RenderService {
    abstract createObjects(scene: THREE.Scene, renderer: THREE.WebGLRenderer, canvas: HTMLCanvasElement, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight): any;
    abstract renderObjects(scene: THREE.Scene, renderer: THREE.WebGLRenderer, canvas: HTMLCanvasElement, camera: THREE.PerspectiveCamera, light: THREE.AmbientLight): any;
}
